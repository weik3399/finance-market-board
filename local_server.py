from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import base64
import hmac
import json
import os
import socket
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, quote, urlparse
from urllib.request import Request, urlopen


HOST = os.environ.get("STOCK_BOARD_HOST", "0.0.0.0")
PORT = int(os.environ.get("STOCK_BOARD_PORT") or os.environ.get("PORT", "4173"))
ACCESS_USER = os.environ.get("STOCK_BOARD_USER", "family")
ACCESS_PASSWORD = os.environ.get("STOCK_BOARD_PASSWORD", "")
ALLOWED_RANGES = {"1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "ytd", "max"}
ALLOWED_INTERVALS = {"1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1wk", "1mo", "3mo"}


def unique(items):
    seen = set()
    result = []
    for item in items:
        if item and item not in seen:
            seen.add(item)
            result.append(item)
    return result


def get_lan_ips():
    ips = []

    try:
        hostname = socket.gethostname()
        for info in socket.getaddrinfo(hostname, None, socket.AF_INET):
            ips.append(info[4][0])
    except OSError:
        pass

    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.connect(("8.8.8.8", 80))
            ips.append(sock.getsockname()[0])
    except OSError:
        pass

    return unique(
        ip for ip in ips if not ip.startswith("127.") and not ip.startswith("169.254.")
    )


def build_share_info():
    lan_ips = get_lan_ips()
    urls = [f"http://{ip}:{PORT}/" for ip in lan_ips]
    return {
        "host": HOST,
        "port": PORT,
        "localUrl": f"http://127.0.0.1:{PORT}/",
        "urls": urls,
        "primaryUrl": urls[0] if urls else f"http://127.0.0.1:{PORT}/",
    }


class StockBoardHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/healthz":
            self.send_plain_text(200, "ok")
            return
        if not self.is_authorized():
            self.send_auth_required()
            return
        if parsed.path == "/api/yahoo-chart":
            self.handle_yahoo_chart(parsed)
            return
        if parsed.path == "/api/share-info":
            self.handle_share_info()
            return
        super().do_GET()

    def is_authorized(self):
        if not ACCESS_PASSWORD:
            return True

        header = self.headers.get("Authorization", "")
        if not header.startswith("Basic "):
            return False

        try:
            decoded = base64.b64decode(header.removeprefix("Basic ").strip()).decode("utf-8")
        except (ValueError, UnicodeDecodeError):
            return False

        user, sep, password = decoded.partition(":")
        return bool(sep) and hmac.compare_digest(user, ACCESS_USER) and hmac.compare_digest(password, ACCESS_PASSWORD)

    def send_auth_required(self):
        body = b"Authentication required"
        self.send_response(401)
        self.send_header("WWW-Authenticate", 'Basic realm="Stock Board"')
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_plain_text(self, status, message):
        body = message.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_share_info(self):
        body = json.dumps(build_share_info(), ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def handle_yahoo_chart(self, parsed):
        query = parse_qs(parsed.query)
        symbol = (query.get("symbol") or [""])[0].strip()
        range_value = (query.get("range") or ["1mo"])[0]
        interval = (query.get("interval") or ["1d"])[0]

        if not symbol or len(symbol) > 24:
            self.send_json_error(400, "Invalid symbol")
            return
        if range_value not in ALLOWED_RANGES or interval not in ALLOWED_INTERVALS:
            self.send_json_error(400, "Invalid chart range or interval")
            return

        url = (
            "https://query1.finance.yahoo.com/v8/finance/chart/"
            f"{quote(symbol, safe='')}?range={quote(range_value)}&interval={quote(interval)}"
        )
        request = Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 stock-board-local-proxy",
                "Accept": "application/json",
            },
        )

        try:
            with urlopen(request, timeout=15) as response:
                body = response.read()
        except HTTPError as error:
            self.send_json_error(error.code, f"Yahoo returned {error.code}")
            return
        except URLError as error:
            self.send_json_error(502, f"Yahoo request failed: {error.reason}")
            return
        except TimeoutError:
            self.send_json_error(504, "Yahoo request timed out")
            return

        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def send_json_error(self, status, message):
        body = f'{{"error":"{message}"}}'.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), StockBoardHandler)
    share_info = build_share_info()
    print(f"Serving stock board locally at {share_info['localUrl']}")
    for url in share_info["urls"]:
        print(f"Mobile/LAN access: {url}")
    server.serve_forever()
