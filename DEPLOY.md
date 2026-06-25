# 股票基金分析看板公网部署

## 方案一：临时公网分享

适合临时给家人看，不需要买服务器。

1. 启动本地服务：

   ```powershell
   python local_server.py
   ```

2. 安装并启动 Cloudflare Tunnel：

   ```powershell
   winget install Cloudflare.cloudflared
   cloudflared tunnel --url http://127.0.0.1:4173
   ```

3. 复制命令行里生成的 `https://...trycloudflare.com` 地址发给家人。

注意：电脑关机、服务停止或隧道关闭后，临时链接会失效。

## 方案二：长期公网部署到 Render

适合以后不在同一个局域网时长期访问。

1. 把这个项目上传到 GitHub 仓库。
2. 打开 Render，选择 `New` -> `Web Service`。
3. 连接 GitHub 仓库。
4. 部署方式选择 Docker。仓库里已经包含 `Dockerfile` 和 `render.yaml`。
5. 部署完成后，Render 会给出一个 `https://...onrender.com` 公网地址。

## 安全建议

- 不建议直接在家用路由器上做端口转发。
- 这个页面用于学习和观察行情，不要在公网链接里放真实账户、持仓成本等敏感信息。
- 如果以后要加入真实持仓、买入成本或收益金额，再加访问密码或登录。
