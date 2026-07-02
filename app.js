const LEARNING_MODULES = [
  {
    id: "basics",
    tab: "股票是什么",
    title: "股票不是彩票，是公司所有权的一小部分",
    summary:
      "买股票本质上是在买一家公司的权益。股价短期会被情绪、资金、消息影响，长期更依赖公司赚钱能力和市场愿意给它的估值。",
    points: [
      ["权益", "普通股代表对公司剩余收益的索取权，可能有分红，也可能没有分红。"],
      ["收益", "投资收益通常来自股价上涨和现金分红，两者都不是保证收益。"],
      ["风险", "公司经营变差、估值下降、市场流动性收紧，都会让股价下跌。"],
    ],
    checks: ["能说清股票和存款的区别", "知道分红不是白送钱", "知道股价短期不等于公司价值"],
  },
  {
    id: "rules",
    tab: "A股规则",
    title: "先熟悉交易规则，再谈买卖判断",
    summary:
      "A股常见规则包括一手100股、普通股票T+1卖出、主板常见10%涨跌幅限制。科创板、创业板、北交所和新股上市初期规则不同。",
    points: [
      ["交易单位", "沪深主板买入通常按100股或其整数倍申报，卖出零股一般需要一次性处理。"],
      ["T+1", "当天买入的A股，通常下一个交易日才能卖出，不能按美股那样频繁日内回转。"],
      ["涨跌幅", "主板常见10%，ST常见5%，创业板和科创板常见20%，具体以交易所规则为准。"],
    ],
    checks: ["知道一手是什么意思", "知道T+1限制", "知道不同板块涨跌幅可能不同"],
  },
  {
    id: "candles",
    tab: "K线成交量",
    title: "K线看价格路径，成交量看参与强弱",
    summary:
      "K线由开盘价、收盘价、最高价、最低价组成。A股软件通常红色代表上涨、绿色代表下跌，和很多海外软件相反。",
    points: [
      ["实体", "实体表示开盘到收盘之间的变化，实体越长，说明当天方向越明显。"],
      ["影线", "上影线和下影线说明盘中冲高或探低后发生回落或回升。"],
      ["量价", "放量上涨、缩量上涨、放量下跌含义不同，不能只看颜色做决定。"],
    ],
    checks: ["能指出开高低收", "知道红绿颜色习惯", "看价格时会同时看成交量"],
  },
  {
    id: "financials",
    tab: "财报入门",
    title: "财报先看赚钱、现金和负债",
    summary:
      "新手看财报不要一开始追求复杂模型，先看营业收入、净利润、经营现金流、ROE、资产负债率，并和过去几年以及同行比较。",
    points: [
      ["收入利润", "收入增长说明规模变化，净利润增长说明盈利结果，但都要看是否可持续。"],
      ["现金流", "经营现金流长期明显弱于利润，说明利润质量需要进一步核对。"],
      ["ROE", "ROE衡量股东资金的回报效率，适合结合行业特点和负债水平一起看。"],
    ],
    checks: ["知道利润和现金流不是一回事", "会看同比和环比", "会把公司放到行业里比较"],
  },
  {
    id: "etf",
    tab: "指数ETF",
    title: "指数基金适合用来理解分散投资",
    summary:
      "ETF通常跟踪一篮子股票，比单只个股更分散。它不会消灭市场风险，但能降低单家公司出问题带来的冲击。",
    points: [
      ["指数", "沪深300、中证500、创业板指等指数代表不同范围的股票组合。"],
      ["费用", "长期持有时，管理费、托管费、交易成本都会影响最终收益。"],
      ["跟踪误差", "ETF价格和净值可能短期偏离，成交不活跃的品种尤其要小心。"],
    ],
    checks: ["知道ETF不是保本产品", "知道指数代表一篮子股票", "会查看成交额和费用"],
  },
];

const RISK_ITEMS = [
  ["我知道买入理由", "不能只因为别人推荐、热搜、短视频标题就下单。"],
  ["我知道最大亏损", "先想错了怎么办，再想赚了怎么办。"],
  ["我没有满仓单押", "新手更需要分散、轻仓和复盘空间。"],
  ["我能接受不交易", "看不懂时空仓也是一种决策。"],
];

const GLOSSARY = [
  ["市盈率PE", "股价相对每股盈利的倍数，不能脱离行业和增长看。"],
  ["市净率PB", "股价相对每股净资产的倍数，金融、周期行业常用。"],
  ["换手率", "股票在一段时间内被交易的活跃程度。"],
  ["成交额", "成交价格乘以成交数量，比成交量更适合跨股比较。"],
  ["ROE", "净资产收益率，粗略衡量股东资金赚钱效率。"],
  ["止损", "交易前设定错误退出点，不等于保证只亏这么多。"],
];

const MARKET_CONFIG = {
  overview: {
    label: "总览",
    currency: "",
    indices: [],
    defaults: [],
  },
  cn: {
    label: "A股",
    currency: "CNY",
    indices: ["sh000001", "sz399001", "sz399006", "sh000300"],
    defaults: ["sh600519", "sz000001", "sh601318", "sz300750"],
  },
  hk: {
    label: "港股",
    currency: "HKD",
    indices: ["hkHSI", "hkHSCEI", "hk00700", "hk09988"],
    defaults: ["hk00700", "hk09988", "hk03690", "hk01810"],
  },
  us: {
    label: "美股",
    currency: "USD",
    indices: ["usDJI", "usIXIC", "usINX", "usAAPL"],
    defaults: ["usAAPL", "usMSFT", "usNVDA", "usTSLA"],
  },
  global: {
    label: "全球核心",
    currency: "",
    indices: ["g000660KS", "g005930KS", "g2330TW", "gASMLAS"],
    defaults: ["g000660KS", "g005930KS", "g8035T", "g6857T"],
  },
};

const GLOBAL_QUOTE_SYMBOLS = {
  g000660KS: {
    yahoo: "000660.KS",
    name: "SK hynix",
    displayCode: "000660.KS",
    marketLabel: "韩国",
  },
  g005930KS: {
    yahoo: "005930.KS",
    name: "Samsung Electronics",
    displayCode: "005930.KS",
    marketLabel: "韩国",
  },
  g2330TW: {
    yahoo: "2330.TW",
    name: "TSMC",
    displayCode: "2330.TW",
    marketLabel: "台湾",
  },
  gASMLAS: {
    yahoo: "ASML.AS",
    name: "ASML Holding",
    displayCode: "ASML.AS",
    marketLabel: "欧洲",
  },
  g8035T: {
    yahoo: "8035.T",
    name: "Tokyo Electron",
    displayCode: "8035.T",
    marketLabel: "日本",
  },
  g6857T: {
    yahoo: "6857.T",
    name: "Advantest",
    displayCode: "6857.T",
    marketLabel: "日本",
  },
  g6146T: {
    yahoo: "6146.T",
    name: "DISCO",
    displayCode: "6146.T",
    marketLabel: "日本",
  },
  g6920T: {
    yahoo: "6920.T",
    name: "Lasertec",
    displayCode: "6920.T",
    marketLabel: "日本",
  },
  gBESIAS: {
    yahoo: "BESI.AS",
    name: "BE Semiconductor",
    displayCode: "BESI.AS",
    marketLabel: "欧洲",
  },
  g4062T: {
    yahoo: "4062.T",
    name: "Ibiden",
    displayCode: "4062.T",
    marketLabel: "日本",
  },
  gASMAS: {
    yahoo: "ASM.AS",
    name: "ASM International",
    displayCode: "ASM.AS",
    marketLabel: "欧洲",
  },
};

const AI_SEGMENTS = {
  all: "全部环节",
  compute: "AI芯片",
  fab: "晶圆制造",
  eda: "EDA/IP",
  equipment: "半导体设备",
  materials: "材料/存储",
  packaging: "先进封装/PCB",
  interconnect: "光模块/互联",
  datacenter: "服务器/电力散热",
};

const AI_LEVELS = {
  all: "全部强度",
  core: "核心卡点",
  key: "关键配套",
  support: "产业配套",
};

const GLOBAL_SHOVEL_REFERENCES = [
  {
    code: "usASML",
    label: "ASML",
    ticker: "ASML.OQ",
    marketLabel: "美股/欧洲",
    theme: "AI扩产设备",
    reference: "+20%左右",
    referencePct: 22,
    note: "EUV光刻机是先进制程最强卡点之一，观察订单和资本开支预期。",
  },
  {
    code: "usMU",
    label: "Micron Technology",
    ticker: "MU.OQ",
    marketLabel: "美股",
    theme: "HBM/DRAM",
    reference: "+20%以上",
    referencePct: 21,
    note: "HBM供需紧张时，存储盈利弹性会被市场重新定价。",
  },
  {
    code: "g000660KS",
    label: "SK Hynix",
    ticker: "000660.KS",
    marketLabel: "韩国",
    theme: "HBM",
    reference: "+15%~20%",
    referencePct: 17,
    note: "已纳入全球核心行情池；HBM供给、NVIDIA订单和价格周期是关键变量。",
  },
  {
    code: "usNVDA",
    label: "NVIDIA",
    ticker: "NVDA.OQ",
    marketLabel: "美股",
    theme: "GPU",
    reference: "0%~-3%",
    referencePct: -1,
    note: "高位震荡时重点看AI资本开支是否继续上修。",
  },
  {
    code: "usAVGO",
    label: "Broadcom",
    ticker: "AVGO.OQ",
    marketLabel: "美股",
    theme: "网络/ASIC",
    reference: "小幅回调",
    referencePct: -2,
    note: "AI网络芯片和定制ASIC仍强，但短期要看回调后承接。",
  },
  {
    code: "usTSM",
    label: "TSMC",
    ticker: "TSM.N",
    marketLabel: "美股ADR",
    theme: "先进制程代工",
    reference: "-5%~-6%",
    referencePct: -5.5,
    note: "基本面强但股价回落时，说明市场在权衡估值和扩产节奏。",
  },
];

const FUND_UNIVERSE = [
  {
    code: "SMH",
    name: "VanEck Semiconductor ETF",
    market: "us",
    category: "全球半导体龙头",
    focus: "集中覆盖NVIDIA、TSMC、ASML、Broadcom等全球半导体核心公司。",
    useCase: "高弹性卫星仓",
    r1y: 152.3,
    r3y: 330.5,
    r5y: 426.9,
    total: 426.9,
    drawdown: 0,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "SOXX",
    name: "iShares Semiconductor ETF",
    market: "us",
    category: "美国半导体",
    focus: "覆盖美国半导体设计、设备、制造和材料龙头。",
    useCase: "半导体主题核心",
    r1y: 183.4,
    r3y: 276.7,
    r5y: 342.4,
    total: 342.4,
    drawdown: 0,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "SOXQ",
    name: "Invesco PHLX Semiconductor ETF",
    market: "us",
    category: "费城半导体",
    focus: "跟踪费城半导体相关股票，适合观察AI硬件主线。",
    useCase: "半导体主题核心",
    r1y: 174.0,
    r3y: 287.8,
    r5y: 347.7,
    total: 347.7,
    drawdown: 0,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "QQQ",
    name: "Invesco QQQ Trust",
    market: "us",
    category: "纳斯达克100",
    focus: "科技宽基，含AI龙头但不只押半导体。",
    useCase: "新手核心底仓",
    r1y: 40.0,
    r3y: 103.9,
    r5y: 113.0,
    total: 113.0,
    drawdown: -0.7,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "XLK",
    name: "Technology Select Sector SPDR",
    market: "us",
    category: "美国科技板块",
    focus: "科技行业宽基，半导体、软件和平台公司都有。",
    useCase: "科技宽基配置",
    r1y: 58.7,
    r3y: 124.4,
    r5y: 165.0,
    total: 165.0,
    drawdown: -3.4,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "AIQ",
    name: "Global X Artificial Intelligence ETF",
    market: "us",
    category: "AI主题",
    focus: "覆盖AI软件、平台和部分硬件，主题更宽。",
    useCase: "AI宽主题",
    r1y: 59.3,
    r3y: 139.6,
    r5y: 121.9,
    total: 121.9,
    drawdown: -4.8,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "BOTZ",
    name: "Global X Robotics & AI ETF",
    market: "us",
    category: "机器人/自动化",
    focus: "更偏机器人和自动化，不是纯AI算力上游。",
    useCase: "低相关观察",
    r1y: 24.6,
    r3y: 31.0,
    r5y: 10.5,
    total: 10.5,
    drawdown: -7.8,
    sample: "2021-06-23 至 2026-06-18",
  },
  {
    code: "512480",
    name: "半导体ETF国联安",
    market: "cn",
    category: "A股半导体",
    focus: "覆盖国产半导体设计、设备、材料和制造链。",
    useCase: "国产替代卫星仓",
    r1y: 148.5,
    r3y: null,
    r5y: null,
    total: 198.8,
    drawdown: 0,
    sample: "2023-10-30 至 2026-06-22",
  },
  {
    code: "159995",
    name: "芯片ETF华夏",
    market: "cn",
    category: "A股芯片",
    focus: "偏国产芯片设计和半导体产业链核心公司。",
    useCase: "国产芯片主题",
    r1y: 141.3,
    r3y: 169.6,
    r5y: 144.6,
    total: 144.6,
    drawdown: 0,
    sample: "2021-04-22 至 2026-06-22",
  },
  {
    code: "512760",
    name: "芯片ETF国泰",
    market: "cn",
    category: "A股芯片",
    focus: "覆盖A股芯片设计、制造和设备材料方向。",
    useCase: "国产芯片主题",
    r1y: 138.1,
    r3y: null,
    r5y: null,
    total: 181.7,
    drawdown: 0,
    sample: "2023-10-30 至 2026-06-22",
  },
  {
    code: "588200",
    name: "科创芯片ETF嘉实",
    market: "cn",
    category: "科创芯片",
    focus: "偏科创板芯片链，弹性更高，波动也更集中。",
    useCase: "高弹性国产芯片",
    r1y: 178.0,
    r3y: 218.2,
    r5y: null,
    total: 299.3,
    drawdown: 0,
    sample: "2022-10-26 至 2026-06-22",
  },
  {
    code: "588290",
    name: "科创芯片ETF华安",
    market: "cn",
    category: "科创芯片",
    focus: "跟踪科创芯片方向，和国产算力、设备、材料相关。",
    useCase: "高弹性国产芯片",
    r1y: 178.2,
    r3y: 217.5,
    r5y: null,
    total: 297.1,
    drawdown: 0,
    sample: "2022-10-26 至 2026-06-22",
  },
  {
    code: "159813",
    name: "半导体ETF鹏华",
    market: "cn",
    category: "A股半导体",
    focus: "覆盖A股半导体产业链，适合观察国产替代整体行情。",
    useCase: "国产替代卫星仓",
    r1y: 140.0,
    r3y: null,
    r5y: null,
    total: 193.7,
    drawdown: 0,
    sample: "2023-10-30 至 2026-06-22",
  },
  {
    code: "513300",
    name: "纳斯达克ETF华夏",
    market: "cn",
    category: "纳指QDII",
    focus: "境内买美股科技宽基的替代工具，分散度高于半导体ETF。",
    useCase: "新手核心底仓",
    r1y: 41.5,
    r3y: 138.4,
    r5y: 139.8,
    total: 139.8,
    drawdown: -4.2,
    sample: "2021-04-22 至 2026-06-22",
  },
  {
    code: "513500",
    name: "标普500ETF博时",
    market: "cn",
    category: "美股宽基QDII",
    focus: "覆盖美股大盘，AI暴露较低但分散性更好。",
    useCase: "稳健底仓",
    r1y: 26.7,
    r3y: null,
    r5y: null,
    total: 79.7,
    drawdown: -2.3,
    sample: "2023-10-30 至 2026-06-22",
  },
  {
    code: "513180",
    name: "恒生科技ETF华夏",
    market: "cn",
    category: "港股科技",
    focus: "港股科技宽基，和AI上游硬件链相关度较弱。",
    useCase: "暂作观察",
    r1y: -18.7,
    r3y: 13.5,
    r5y: -42.0,
    total: -42.0,
    drawdown: -43.7,
    sample: "2021-05-25 至 2026-06-22",
  },
  {
    code: "513130",
    name: "恒生科技ETF华泰柏瑞",
    market: "cn",
    category: "港股科技",
    focus: "港股科技宽基，历史表现弱于半导体和纳指。",
    useCase: "暂作观察",
    r1y: -18.8,
    r3y: 12.2,
    r5y: -43.9,
    total: -43.9,
    drawdown: -44.5,
    sample: "2021-06-01 至 2026-06-22",
  },
];

const AI_UNIVERSE = [
  { market: "cn", code: "sh688256", segment: "compute", level: "core", thesis: "国产AI训练/推理芯片，算力替代关注度高。", risk: "估值弹性大，业绩兑现和供应链约束需要持续核对。" },
  { market: "cn", code: "sh688041", segment: "compute", level: "core", thesis: "国产高端处理器与服务器算力核心环节。", risk: "客户集中、先进制程和交付节奏会放大波动。" },
  { market: "cn", code: "sh688012", segment: "equipment", level: "core", thesis: "刻蚀与薄膜设备是先进制造中的关键设备环节。", risk: "设备验证周期长，订单和验收节奏影响利润释放。" },
  { market: "cn", code: "sz002371", segment: "equipment", level: "core", thesis: "半导体设备平台型公司，覆盖多类国产替代环节。", risk: "景气周期、资本开支变化和估值水平都很敏感。" },
  { market: "cn", code: "sz301269", segment: "eda", level: "core", thesis: "国产EDA代表，处在芯片设计工具链卡点。", risk: "EDA商业化周期长，海外龙头壁垒仍高。" },
  { market: "cn", code: "sh688206", segment: "eda", level: "key", thesis: "器件建模和EDA相关工具，服务芯片设计验证。", risk: "收入规模和客户拓展节奏需要跟踪。" },
  { market: "cn", code: "sh688082", segment: "equipment", level: "key", thesis: "清洗、电镀等半导体设备，先进封装和晶圆制造扩产的候选观察。", risk: "产品验证、海外收入和半导体资本开支周期会放大波动。" },
  { market: "cn", code: "sh688037", segment: "equipment", level: "key", thesis: "涂胶显影、清洗等设备，连接光刻配套和晶圆制造国产替代。", risk: "规模、客户结构和订单交付节奏需要持续验证。" },
  { market: "cn", code: "sz300604", segment: "equipment", level: "key", thesis: "半导体测试设备，芯片验证和量产检测环节的重要配套。", risk: "测试设备需求受下游扩产、产品迭代和验收节奏影响。" },
  { market: "cn", code: "sh688200", segment: "equipment", level: "key", thesis: "模拟及混合信号测试系统，半导体测试国产替代候选。", risk: "客户集中、订单波动和高估值回撤需要控制。" },
  { market: "cn", code: "sh688072", segment: "equipment", level: "key", thesis: "薄膜沉积设备，先进制程和存储扩产会影响需求。", risk: "订单确认与产品验证节奏容易造成业绩波动。" },
  { market: "cn", code: "sh688120", segment: "equipment", level: "key", thesis: "CMP设备与工艺服务，制造流程中的关键设备。", risk: "半导体资本开支下行时弹性也会反向放大。" },
  { market: "cn", code: "sh688019", segment: "materials", level: "key", thesis: "CMP抛光液等材料，国产半导体材料替代方向。", risk: "材料认证慢，单品价格和毛利率需跟踪。" },
  { market: "cn", code: "sz300666", segment: "materials", level: "key", thesis: "靶材等先进材料，关联晶圆制造和先进封装。", risk: "材料价格、客户认证和扩产进度会影响预期。" },
  { market: "cn", code: "sh688126", segment: "materials", level: "support", thesis: "半导体硅片材料，处在晶圆制造基础材料环节。", risk: "硅片价格、产能利用率和成熟制程周期会影响利润弹性。" },
  { market: "cn", code: "sz002409", segment: "materials", level: "key", thesis: "电子材料和前驱体等方向，关联先进制程材料国产化。", risk: "材料认证周期长，产品结构和并购整合会影响业绩质量。" },
  { market: "cn", code: "sh688008", segment: "materials", level: "key", thesis: "内存接口芯片，服务器和AI内存链条重要配套。", risk: "存储周期和服务器需求变化会直接影响估值。" },
  { market: "cn", code: "sh603986", segment: "materials", level: "key", thesis: "存储和MCU相关芯片，国产芯片生态重要组成。", risk: "消费电子和存储周期回落时波动较大。" },
  { market: "cn", code: "sz002463", segment: "packaging", level: "key", thesis: "高速PCB，AI服务器和交换机链条关注度高。", risk: "客户结构和产品升级节奏决定利润弹性。" },
  { market: "cn", code: "sz002916", segment: "packaging", level: "key", thesis: "高端PCB与封装基板，数据中心硬件基础部件。", risk: "高端产能爬坡和订单可持续性需要验证。" },
  { market: "cn", code: "sh600584", segment: "packaging", level: "key", thesis: "封测龙头之一，先进封装是AI芯片落地关键环节。", risk: "封测行业周期性强，先进封装占比变化要跟踪。" },
  { market: "cn", code: "sz002156", segment: "packaging", level: "key", thesis: "封测与先进封装方向，受益于国产芯片配套。", risk: "资本开支、良率和价格竞争会影响利润。" },
  { market: "cn", code: "sz300308", segment: "interconnect", level: "core", thesis: "高速光模块，AI数据中心网络互联核心标的。", risk: "海外大客户需求、产品迭代和订单集中度风险较高。" },
  { market: "cn", code: "sz300502", segment: "interconnect", level: "core", thesis: "高速光模块和光通信组件，AI网络升级受益方向。", risk: "高增长预期下估值和订单兑现压力都高。" },
  { market: "cn", code: "sz002281", segment: "interconnect", level: "key", thesis: "光芯片、光器件和光模块能力，AI互联上游候选观察。", risk: "通信周期、产品结构升级和价格竞争会影响利润。" },
  { market: "cn", code: "sz300570", segment: "interconnect", level: "key", thesis: "光通信连接器件，受益于AI数据中心高速互联建设。", risk: "客户认证、产品迭代和阶段性估值波动需要跟踪。" },
  { market: "cn", code: "sz300394", segment: "interconnect", level: "key", thesis: "光器件和光模块供应链，承接数据中心互联需求。", risk: "产品结构升级和客户认证进度决定弹性。" },
  { market: "cn", code: "sh688498", segment: "interconnect", level: "key", thesis: "光芯片环节，处在光模块上游关键器件。", risk: "规模、良率和价格波动会放大经营风险。" },
  { market: "cn", code: "sz002837", segment: "datacenter", level: "key", thesis: "数据中心温控，AI机柜功耗提升带来散热需求。", risk: "项目制收入和海外拓展节奏会影响短期表现。" },
  { market: "cn", code: "sh601138", segment: "datacenter", level: "support", thesis: "AI服务器制造和供应链整合，连接算力硬件需求。", risk: "毛利率较薄，对大客户订单和产能利用率敏感。" },
  { market: "hk", code: "hk00981", segment: "fab", level: "core", thesis: "中国大陆晶圆制造龙头，先进制程约束的核心观察对象。", risk: "制程限制、资本开支和行业周期会显著影响估值。" },
  { market: "hk", code: "hk01347", segment: "fab", level: "key", thesis: "特色工艺晶圆制造，国产半导体供应链重要部分。", risk: "成熟制程价格竞争和产能利用率是主要变量。" },
  { market: "hk", code: "hk01385", segment: "compute", level: "key", thesis: "FPGA和安全芯片等设计能力，属于芯片设计上游。", risk: "产品结构、客户拓展和研发投入强度需跟踪。" },
  { market: "hk", code: "hk00522", segment: "equipment", level: "key", thesis: "半导体装配和封装设备，连接先进封装景气。", risk: "全球封装资本开支变化会影响订单。" },
  { market: "hk", code: "hk00992", segment: "datacenter", level: "support", thesis: "服务器和企业IT硬件，受AI基础设施投入影响。", risk: "整机业务利润率有限，竞争和库存周期要关注。" },
  { market: "hk", code: "hk00285", segment: "packaging", level: "support", thesis: "电子制造与结构件，AI硬件供应链配套观察。", risk: "终端需求和客户结构变化会影响弹性。" },
  { market: "hk", code: "hk02382", segment: "interconnect", level: "support", thesis: "光学器件能力可用于观察硬件上游需求。", risk: "手机链占比高，和AI基础设施相关度需单独核对。" },
  { market: "us", code: "usNVDA", segment: "compute", level: "core", thesis: "GPU和AI加速平台核心供应商，是全球算力链锚点。", risk: "估值、出口限制、客户资本开支和竞争变化都很敏感。" },
  { market: "us", code: "usAMD", segment: "compute", level: "core", thesis: "GPU、CPU和数据中心加速器，是AI算力替代变量。", risk: "AI加速器份额兑现和毛利率变化需要持续跟踪。" },
  { market: "us", code: "usARM", segment: "compute", level: "core", thesis: "CPU IP授权，影响移动端和数据中心芯片架构。", risk: "授权模式、估值和客户自研节奏会影响预期。" },
  { market: "us", code: "usAVGO", segment: "interconnect", level: "core", thesis: "AI网络芯片和定制ASIC，处在算力互联卡点。", risk: "大客户集中和定制芯片订单节奏会放大波动。" },
  { market: "us", code: "usMRVL", segment: "interconnect", level: "key", thesis: "高速互联和定制硅，服务AI数据中心网络。", risk: "AI业务放量速度与传统业务拖累需要拆分观察。" },
  { market: "us", code: "usMU", segment: "materials", level: "core", thesis: "HBM和DRAM是AI训练硬件的重要瓶颈之一。", risk: "存储价格周期剧烈，盈利弹性双向都大。" },
  { market: "us", code: "usTSM", segment: "fab", level: "core", thesis: "先进制程代工龙头，AI芯片落地高度依赖其产能。", risk: "地缘风险、资本开支和客户集中度是核心变量。" },
  { market: "us", code: "usASML", segment: "equipment", level: "core", thesis: "EUV光刻机处在先进制程最强卡点之一。", risk: "出口管制、订单周期和客户扩产节奏会影响估值。" },
  { market: "us", code: "usAMAT", segment: "equipment", level: "key", thesis: "半导体设备平台型公司，覆盖多个制造步骤。", risk: "资本开支周期和限制政策会影响订单能见度。" },
  { market: "us", code: "usLRCX", segment: "equipment", level: "key", thesis: "刻蚀和沉积设备，和先进制程、存储扩产相关。", risk: "存储资本开支波动会影响收入节奏。" },
  { market: "us", code: "usKLAC", segment: "equipment", level: "key", thesis: "检测量测设备，是先进制造良率控制关键环节。", risk: "半导体周期和先进制程投资放缓会压制估值。" },
  { market: "us", code: "usTER", segment: "equipment", level: "key", thesis: "半导体自动测试设备，AI芯片量产验证和测试需求候选。", risk: "终端需求和测试设备订单周期会造成业绩波动。" },
  { market: "us", code: "usENTG", segment: "materials", level: "key", thesis: "半导体材料、过滤和化学品，先进制程材料供应链候选。", risk: "晶圆厂资本开支、材料价格和库存周期是主要变量。" },
  { market: "us", code: "usACMR", segment: "equipment", level: "support", thesis: "清洗、电镀等半导体设备，适合观察设备国产替代和扩产弹性。", risk: "客户集中、跨市场估值和订单兑现风险较高。" },
  { market: "us", code: "usSNPS", segment: "eda", level: "core", thesis: "EDA和IP龙头，芯片设计工具链核心卡点。", risk: "估值较高，监管和客户研发周期影响订单。" },
  { market: "us", code: "usCDNS", segment: "eda", level: "core", thesis: "EDA工具链龙头，受益于复杂芯片设计需求。", risk: "增长预期高，软件订单递延和竞争变化需关注。" },
  { market: "us", code: "usANET", segment: "interconnect", level: "key", thesis: "数据中心交换机，AI集群网络扩张重要受益方向。", risk: "大客户资本开支和网络方案替代会影响订单。" },
  { market: "us", code: "usCOHR", segment: "interconnect", level: "key", thesis: "光通信和材料器件，处在AI数据中心高速互联链。", risk: "产品切换、库存和利润率改善需要验证。" },
  { market: "us", code: "usALAB", segment: "interconnect", level: "key", thesis: "AI服务器高速互联芯片，连接GPU、CPU、内存和加速器。", risk: "上市时间短、估值弹性大，客户集中和竞争格局需跟踪。" },
  { market: "us", code: "usVRT", segment: "datacenter", level: "key", thesis: "数据中心电源和热管理，AI机房基础设施卡点。", risk: "订单高增后交付、毛利和估值回撤风险需跟踪。" },
  { market: "us", code: "usMPWR", segment: "datacenter", level: "key", thesis: "高性能电源管理芯片，受益于AI服务器功耗提升。", risk: "高估值、客户库存和电源方案竞争会影响波动。" },
  { market: "us", code: "usSMCI", segment: "datacenter", level: "support", thesis: "AI服务器整机，直接反映算力基础设施需求。", risk: "利润率、会计治理、客户集中和供应节奏风险较高。" },
  { market: "us", code: "usDELL", segment: "datacenter", level: "support", thesis: "服务器和企业硬件，可观察AI服务器订单趋势。", risk: "整机利润率有限，库存和竞争会压缩弹性。" },
  { market: "us", code: "usINTC", segment: "fab", level: "support", thesis: "先进封装和晶圆制造转型标的，适合观察美国本土制造变量。", risk: "转型执行、资本开支压力和竞争落后风险较高。" },
  { market: "us", code: "usGFS", segment: "fab", level: "support", thesis: "成熟/特色制程晶圆制造，作为先进制造之外的供应链观察。", risk: "成熟制程周期、价格竞争和成长弹性有限。" },
  { market: "global", code: "g000660KS", segment: "materials", level: "core", thesis: "HBM高带宽内存龙头，AI GPU和ASIC性能释放高度依赖其供给。", risk: "存储周期、HBM价格、NVIDIA订单和三星/美光追赶都会放大波动。" },
  { market: "global", code: "g005930KS", segment: "materials", level: "core", thesis: "DRAM、HBM、NAND和晶圆代工综合巨头，是AI存储和制造供给的重要变量。", risk: "HBM客户认证、存储价格周期和代工竞争格局需要持续跟踪。" },
  { market: "global", code: "g2330TW", segment: "fab", level: "core", thesis: "台积电台股正股，先进制程产能是全球AI芯片落地的核心瓶颈。", risk: "地缘、资本开支、先进封装产能和大客户集中度是核心风险。" },
  { market: "global", code: "gASMLAS", segment: "equipment", level: "core", thesis: "ASML欧洲正股，EUV光刻机仍是先进制程最强卡点之一。", risk: "出口管制、订单周期和客户扩产节奏会影响估值。" },
  { market: "global", code: "g8035T", segment: "equipment", level: "core", thesis: "东京电子覆盖涂胶显影、刻蚀、沉积、清洗等关键设备，是先进制造扩产核心观察。", risk: "半导体资本开支周期和先进制程订单节奏会直接影响弹性。" },
  { market: "global", code: "g6857T", segment: "equipment", level: "key", thesis: "爱德万测试是高端半导体测试设备龙头，AI芯片量产验证需求提升时受益。", risk: "测试设备订单波动、客户集中和AI芯片出货节奏需要跟踪。" },
  { market: "global", code: "g6146T", segment: "packaging", level: "key", thesis: "DISCO在晶圆切割、减薄和抛光设备中地位突出，先进封装放量会提升重要性。", risk: "设备交付节奏、客户资本开支和高估值回撤风险较高。" },
  { market: "global", code: "g6920T", segment: "equipment", level: "key", thesis: "Lasertec聚焦EUV掩模检测等关键检测设备，是先进制程良率控制的重要卡点。", risk: "单一设备周期、订单波动和客户扩产变化会放大股价波动。" },
  { market: "global", code: "gBESIAS", segment: "packaging", level: "key", thesis: "BESI覆盖先进封装和混合键合设备，和AI芯片封装升级关联度高。", risk: "先进封装渗透速度、客户验证和设备订单周期需要核对。" },
  { market: "global", code: "g4062T", segment: "packaging", level: "key", thesis: "Ibiden是高端封装基板重要供应商，AI服务器和高端芯片封装依赖ABF等基板供给。", risk: "基板价格、产能利用率、客户结构和日元波动都会影响表现。" },
  { market: "global", code: "gASMAS", segment: "equipment", level: "key", thesis: "ASM International在ALD等薄膜沉积设备中竞争力强，服务先进制程和高端器件制造。", risk: "先进制程资本开支、设备份额和订单确认节奏是主要变量。" },
];

const STORAGE_KEYS = {
  progress: "stock-board-progress",
  risk: "stock-board-risk",
  watchPrefix: "stock-board-watch-",
  aiMonitorPrefix: "stock-board-ai-monitor-",
  aiHistoryPrefix: "stock-board-ai-history-",
  aiAlertThreshold: "stock-board-ai-alert-threshold",
  aiAutoRefresh: "stock-board-ai-auto-refresh",
  aiCycleWindow: "stock-board-ai-cycle-window",
  aiTrendRange: "stock-board-ai-trend-range",
  activeAppModule: "stock-board-active-module",
  customWatchlist: "stock-board-custom-watchlist",
  customSeedVersion: "stock-board-custom-seed-version",
  theme: "stock-board-theme",
};

const CUSTOM_WATCHLIST_SEED_VERSION = "2026-07-02-ai-materials-002297-restore";
const CUSTOM_WATCHLIST_SEED = [
  { type: "stock", market: "cn", code: "sz300174" },
  { type: "stock", market: "cn", code: "sz300903" },
  { type: "stock", market: "cn", code: "sz300782" },
  { type: "stock", market: "cn", code: "sh688507" },
  { type: "stock", market: "cn", code: "sz002297" },
];

const CUSTOM_ANALYSIS_NOTES = {
  sz300903: {
    level: "重点跟踪",
    theme: "AI算力PCB / 高阶互连",
    conclusion: "四只里和AI服务器硬件增量关联最直接，核心看高多层PCB、HDI、光模块PCB和散热封装能否持续转化为订单与毛利。",
    watch: ["AI服务器与光模块PCB订单", "高阶HDI和mSAP产能进展", "毛利率修复与亏损收窄"],
    risk: "1年涨幅已经很大，短线估值和情绪波动会很剧烈；如果盈利兑现慢，回撤风险高。",
  },
  sh688507: {
    level: "重点跟踪",
    theme: "CAE / 物理AI / 工业软件",
    conclusion: "属于AI软件与工业仿真方向的稀缺标的，弹性来自CAE国产替代、物理AI平台和具身智能/低空经济等复杂工程场景。",
    watch: ["CAE和物理AI订单落地", "军工与民用客户扩张", "收入规模、回款和费用率"],
    risk: "题材强但业绩基数小，估值对订单兑现非常敏感；若订单确认慢，股价容易大幅波动。",
  },
  sz300174: {
    level: "观察验证",
    theme: "新能源碳材料 / 多孔碳",
    conclusion: "不是典型AI上游卡脖子，更偏新能源材料链。看点在多孔碳、硬碳、硅碳负极材料能否从小收入占比变成实际利润贡献。",
    watch: ["多孔碳和硬碳收入占比", "硅碳负极客户验证", "新增产能利用率和毛利率"],
    risk: "材料放量节奏、客户验证和价格波动不确定；如果只停留在概念，估值支撑会变弱。",
  },
  sz300782: {
    level: "观察验证",
    theme: "射频前端 / 半导体国产替代",
    conclusion: "半导体国产替代属性较强，但AI服务器链条关联不如PCB、HBM、设备直接。核心仍是手机、IoT、汽车电子和射频模组周期修复。",
    watch: ["手机与IoT需求恢复", "射频模组和滤波器产品进展", "毛利率与库存周期"],
    risk: "消费电子周期、竞争加剧和产品结构变化会压制利润；不宜简单当作纯AI上游股。",
  },
  sz002297: {
    level: "观察验证",
    theme: "航空航天材料 / 硬质合金",
    conclusion: "核心看航空机轮刹车系统、航天碳/碳复合材料和硬质合金材料的订单兑现。它更偏商业航天和军工新材料，不是典型AI上游卡脖子标的。",
    watch: ["航空航天板块收入占比", "硬质合金业务利润率", "商业航天订单是否真实放量"],
    risk: "近期涨幅较大且题材驱动强，商业航天产品收入占比仍低；如果订单和利润兑现不足，估值回撤压力会比较大。",
  },
};

const CUSTOM_MARKET_OPTIONS = {
  stock: [
    { value: "cn", label: "A股" },
    { value: "hk", label: "港股" },
    { value: "us", label: "美股" },
    { value: "global", label: "全球核心" },
  ],
  fund: [
    { value: "us", label: "美股ETF" },
    { value: "cn", label: "境内场内基金" },
  ],
};

const state = {
  activeAppModule: localStorage.getItem(STORAGE_KEYS.activeAppModule) || "ai",
  activeModule: LEARNING_MODULES[0].id,
  activeMarket: "overview",
  activeFundScope: "overview",
  selectedQuoteCode: "sh000001",
  selectedAiCode: null,
  selectedTrendCode: null,
  progress: readJSON(STORAGE_KEYS.progress, {}),
  risk: readJSON(STORAGE_KEYS.risk, {}),
  quotes: new Map(),
  fundQuotes: new Map(),
  fundKlines: {},
  fundKlineLoading: {},
  fundKlineErrors: {},
  fundKlineRetryAt: {},
  watchlists: {},
  customWatchlist: readSeededCustomWatchlist(),
  aiMonitors: {},
  aiHistory: {},
  aiKlines: {},
  aiKlineLoading: {},
  aiKlineErrors: {},
  aiKlineRetryAt: {},
  overviewKlines: {},
  overviewKlineLoading: {},
  overviewKlineErrors: {},
  overviewKlineRetryAt: {},
  aiFilters: {
    segment: "all",
    level: "all",
    query: "",
    monitoredOnly: false,
  },
  alertThreshold: Number(localStorage.getItem(STORAGE_KEYS.aiAlertThreshold)) || 3,
  autoRefreshSeconds: Number(localStorage.getItem(STORAGE_KEYS.aiAutoRefresh)) || 0,
  cycleWindowMinutes: Number(localStorage.getItem(STORAGE_KEYS.aiCycleWindow)) || 5,
  trendRangeMinutes: readTrendRange(),
  autoRefreshTimer: null,
  refreshing: false,
  pendingStockRefresh: false,
  pendingFundRefresh: false,
  pendingCustomRefresh: false,
  shareUrl: `${window.location.origin}/`,
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  loadSavedTheme();
  loadWatchlists();
  loadAiMonitors();
  loadAiHistory();
  renderLearningTabs();
  renderModule();
  renderRiskChecklist();
  renderGlossary();
  renderAiFilters();
  renderFundDashboard();
  updateCustomMarketOptions();
  renderCustomDashboard();
  syncMonitorControls();
  setActiveAppModule(state.activeAppModule);
  bindEvents();
  loadShareInfo();
  updateClock();
  updateCalculator();
  window.setInterval(updateClock, 1000);
  setupAutoRefresh();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function bindElements() {
  els.appModuleTabs = document.getElementById("appModuleTabs");
  els.moduleTabs = document.getElementById("moduleTabs");
  els.moduleDetail = document.getElementById("moduleDetail");
  els.progressValue = document.getElementById("progressValue");
  els.riskChecklist = document.getElementById("riskChecklist");
  els.glossaryList = document.getElementById("glossaryList");
  els.refreshBtn = document.getElementById("refreshBtn");
  els.shareBtn = document.getElementById("shareBtn");
  els.sharePanel = document.getElementById("sharePanel");
  els.shareCloseBtn = document.getElementById("shareCloseBtn");
  els.shareDesc = document.getElementById("shareDesc");
  els.shareUrl = document.getElementById("shareUrl");
  els.shareCopyBtn = document.getElementById("shareCopyBtn");
  els.shareHint = document.getElementById("shareHint");
  els.themeToggle = document.getElementById("themeToggle");
  els.sessionStatus = document.getElementById("sessionStatus");
  els.localClock = document.getElementById("localClock");
  els.lastUpdate = document.getElementById("lastUpdate");
  els.marketTabs = document.getElementById("marketTabs");
  els.marketTitle = document.getElementById("marketTitle");
  els.indexCards = document.getElementById("indexCards");
  els.overviewSurface = document.getElementById("overviewSurface");
  els.overviewMetrics = document.getElementById("overviewMetrics");
  els.overviewRows = document.getElementById("overviewRows");
  els.aiCategoryFilters = document.getElementById("aiCategoryFilters");
  els.aiLevelFilters = document.getElementById("aiLevelFilters");
  els.aiSearchInput = document.getElementById("aiSearchInput");
  els.monitorOnlyInput = document.getElementById("monitorOnlyInput");
  els.alertThresholdInput = document.getElementById("alertThresholdInput");
  els.autoRefreshSelect = document.getElementById("autoRefreshSelect");
  els.aiMetrics = document.getElementById("aiMetrics");
  els.monitorFocusCards = document.getElementById("monitorFocusCards");
  els.styleRotationBoard = document.getElementById("styleRotationBoard");
  els.monitorCycleRows = document.getElementById("monitorCycleRows");
  els.cycleWindowSelect = document.getElementById("cycleWindowSelect");
  els.resetCycleBtn = document.getElementById("resetCycleBtn");
  els.stockTrendPanel = document.getElementById("stockTrendPanel");
  els.trendSnapshotRows = document.getElementById("trendSnapshotRows");
  els.trendRangeSelect = document.getElementById("trendRangeSelect");
  els.aiRows = document.getElementById("aiRows");
  els.aiAnalysisDetail = document.getElementById("aiAnalysisDetail");
  els.aiAlerts = document.getElementById("aiAlerts");
  els.segmentHeat = document.getElementById("segmentHeat");
  els.fundTabs = document.getElementById("fundTabs");
  els.fundUpdatedAt = document.getElementById("fundUpdatedAt");
  els.fundMetrics = document.getElementById("fundMetrics");
  els.fundCards = document.getElementById("fundCards");
  els.fundRows = document.getElementById("fundRows");
  els.customSurface = document.getElementById("customSurface");
  els.customAddForm = document.getElementById("customAddForm");
  els.customTypeInput = document.getElementById("customTypeInput");
  els.customMarketInput = document.getElementById("customMarketInput");
  els.customCodeInput = document.getElementById("customCodeInput");
  els.customHint = document.getElementById("customHint");
  els.customMetrics = document.getElementById("customMetrics");
  els.customAnalysis = document.getElementById("customAnalysis");
  els.customRows = document.getElementById("customRows");
  els.marketCanvas = document.getElementById("marketCanvas");
  els.statPrice = document.getElementById("statPrice");
  els.statPct = document.getElementById("statPct");
  els.statAmount = document.getElementById("statAmount");
  els.watchRows = document.getElementById("watchRows");
  els.addCodeForm = document.getElementById("addCodeForm");
  els.codeInput = document.getElementById("codeInput");
  els.accountInput = document.getElementById("accountInput");
  els.riskInput = document.getElementById("riskInput");
  els.entryInput = document.getElementById("entryInput");
  els.stopInput = document.getElementById("stopInput");
  els.calcResult = document.getElementById("calcResult");
}

function bindEvents() {
  els.appModuleTabs.addEventListener("click", handleAppModuleClick);
  els.refreshBtn.addEventListener("click", refreshActiveData);
  els.shareBtn?.addEventListener("click", openSharePanel);
  els.shareCloseBtn?.addEventListener("click", closeSharePanel);
  els.shareCopyBtn?.addEventListener("click", copyShareUrl);
  els.sharePanel?.addEventListener("click", (event) => {
    if (event.target === els.sharePanel) closeSharePanel();
  });
  els.themeToggle.addEventListener("click", toggleTheme);
  els.marketTabs.addEventListener("click", handleMarketClick);
  els.fundTabs?.addEventListener("click", handleFundScopeClick);
  els.customTypeInput?.addEventListener("change", updateCustomMarketOptions);
  els.customAddForm?.addEventListener("submit", handleCustomAdd);
  els.customRows?.addEventListener("click", handleCustomAction);
  els.aiCategoryFilters.addEventListener("click", handleAiFilterClick);
  els.aiLevelFilters.addEventListener("click", handleAiFilterClick);
  els.aiSearchInput.addEventListener("input", handleAiSearch);
  els.monitorOnlyInput.addEventListener("change", handleMonitorOnly);
  els.alertThresholdInput.addEventListener("input", handleAlertThreshold);
  els.autoRefreshSelect.addEventListener("change", handleAutoRefreshChange);
  els.cycleWindowSelect.addEventListener("change", handleCycleWindowChange);
  els.resetCycleBtn.addEventListener("click", handleResetCycleHistory);
  els.trendRangeSelect.addEventListener("change", handleTrendRangeChange);
  els.monitorFocusCards.addEventListener("click", handleAiRowAction);
  els.aiRows.addEventListener("click", handleAiRowAction);
  els.addCodeForm.addEventListener("submit", handleAddCode);
  els.watchRows.addEventListener("click", handleWatchAction);

  [els.accountInput, els.riskInput, els.entryInput, els.stopInput].forEach((input) => {
    input.addEventListener("input", updateCalculator);
  });

  window.addEventListener("resize", () => {
    const quote = state.quotes.get(state.selectedQuoteCode);
    drawQuoteChart(quote);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.sharePanel?.hidden) closeSharePanel();
    if (event.key === "Escape") closeTrendPreviews();
  });

  document.addEventListener("click", (event) => {
    const trendButton = event.target.closest(".trend-hover-button");
    const openTrendCell = event.target.closest(".overview-trend-cell.is-open");

    if (trendButton) {
      const trendCell = trendButton.closest(".overview-trend-cell");
      const shouldOpen = !trendCell?.classList.contains("is-open");
      closeTrendPreviews();
      if (shouldOpen && trendCell) {
        trendCell.classList.add("is-open");
        trendButton.setAttribute("aria-expanded", "true");
      }
      trendButton.blur();
      return;
    }

    if (!openTrendCell) closeTrendPreviews();
  });
}

function closeTrendPreviews() {
  document.querySelectorAll(".overview-trend-cell.is-open").forEach((cell) => {
    cell.classList.remove("is-open");
    cell.querySelector(".trend-hover-button")?.setAttribute("aria-expanded", "false");
  });
}

function renderLearningTabs() {
  els.moduleTabs.innerHTML = LEARNING_MODULES.map((module) => {
    const active = module.id === state.activeModule ? "active" : "";
    return `<button class="module-tab ${active}" type="button" data-module="${module.id}" role="tab">${module.tab}</button>`;
  }).join("");

  els.moduleTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeModule = button.dataset.module;
      renderLearningTabs();
      renderModule();
    });
  });
}

function renderModule() {
  const module = LEARNING_MODULES.find((item) => item.id === state.activeModule) ?? LEARNING_MODULES[0];
  const checks = module.checks
    .map((item, index) => {
      const key = `${module.id}-${index}`;
      const checked = state.progress[key] ? "checked" : "";
      return `
        <label class="check-row">
          <input type="checkbox" data-progress-key="${key}" ${checked} />
          <span>${item}</span>
        </label>
      `;
    })
    .join("");

  els.moduleDetail.innerHTML = `
    <h3>${module.title}</h3>
    <p class="module-summary">${module.summary}</p>
    <ul class="lesson-points">
      ${module.points
        .map(
          ([label, text]) => `
          <li>
            <span class="point-icon" aria-hidden="true"><i data-lucide="check"></i></span>
            <span><strong>${label}</strong>${text}</span>
          </li>
        `,
        )
        .join("")}
    </ul>
    <div class="module-checks">${checks}</div>
  `;

  els.moduleDetail.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.progress[checkbox.dataset.progressKey] = checkbox.checked;
      writeJSON(STORAGE_KEYS.progress, state.progress);
      updateProgress();
    });
  });

  updateProgress();
  refreshIcons();
}

function updateProgress() {
  const total = LEARNING_MODULES.reduce((sum, module) => sum + module.checks.length, 0);
  const completed = Object.values(state.progress).filter(Boolean).length;
  const pct = total ? Math.round((completed / total) * 100) : 0;
  els.progressValue.textContent = `${pct}%`;
  document.documentElement.style.setProperty("--progress", `${pct}%`);
}

function renderRiskChecklist() {
  els.riskChecklist.innerHTML = RISK_ITEMS.map(([title, note], index) => {
    const key = `risk-${index}`;
    const checked = state.risk[key] ? "checked" : "";
    return `
      <label class="risk-item">
        <input type="checkbox" data-risk-key="${key}" ${checked} />
        <span><strong>${title}</strong><span class="risk-note">${note}</span></span>
      </label>
    `;
  }).join("");

  els.riskChecklist.querySelectorAll("input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.risk[checkbox.dataset.riskKey] = checkbox.checked;
      writeJSON(STORAGE_KEYS.risk, state.risk);
    });
  });
}

function renderGlossary() {
  els.glossaryList.innerHTML = GLOSSARY.map(
    ([title, note]) => `
      <div class="term">
        <strong>${title}</strong>
        <span class="term-note">${note}</span>
      </div>
    `,
  ).join("");
}

function handleAppModuleClick(event) {
  const button = event.target.closest("[data-app-module]");
  if (!button) return;
  setActiveAppModule(button.dataset.appModule);
}

function setActiveAppModule(module) {
  const active = ["ai", "fund", "custom"].includes(module) ? module : "ai";
  state.activeAppModule = active;
  localStorage.setItem(STORAGE_KEYS.activeAppModule, active);

  els.appModuleTabs.querySelectorAll("[data-app-module]").forEach((button) => {
    const selected = button.dataset.appModule === active;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });

  document.querySelectorAll("[data-app-panel]").forEach((panel) => {
    const panelName = panel.dataset.appPanel;
    const visible = panelName === active || (panelName === "market-shell" && ["ai", "fund", "custom"].includes(active));
    panel.hidden = !visible;
  });

  document.querySelectorAll("[data-module-content]").forEach((content) => {
    content.hidden = content.dataset.moduleContent !== active;
  });

  if (els.marketTitle) {
    const titleMap = {
      ai: "AI上游股票分析",
      fund: "AI上游对应基金收益率",
      custom: "自选股票和基金观察",
    };
    els.marketTitle.textContent = titleMap[active] || titleMap.ai;
  }

  if (active === "fund") {
    renderFundDashboard();
    refreshFundQuotes();
  } else if (active === "custom") {
    renderCustomDashboard();
    refreshCustomQuotes();
  } else {
    renderIndexCards();
    renderAiDashboard();
    renderWatchRows();
    refreshQuotes();
  }

  refreshIcons();
}

function renderAiFilters() {
  els.aiCategoryFilters.innerHTML = Object.entries(AI_SEGMENTS)
    .map(([id, label]) => {
      const active = state.aiFilters.segment === id ? "active" : "";
      return `<button class="filter-chip ${active}" type="button" data-ai-segment="${id}">${label}</button>`;
    })
    .join("");

  els.aiLevelFilters.innerHTML = Object.entries(AI_LEVELS)
    .map(([id, label]) => {
      const active = state.aiFilters.level === id ? "active" : "";
      return `<button class="filter-chip ${active}" type="button" data-ai-level="${id}">${label}</button>`;
    })
    .join("");
}

function renderAiDashboard() {
  const isOverview = state.activeMarket === "overview";
  if (els.overviewSurface) els.overviewSurface.hidden = !isOverview;
  document.querySelectorAll(".market-detail-only").forEach((node) => {
    node.hidden = isOverview;
  });

  if (isOverview) {
    renderOverviewDashboard();
    return;
  }

  const entries = getFilteredAiUniverse();
  renderAiMetrics();
  renderMonitorFocus();
  renderStyleRotationBoard();
  renderMonitorCycleRows();
  renderStockTrend(entries);
  renderAiRows(entries);
  renderAiAnalysis(entries);
  renderAiAlerts();
  renderSegmentHeat();
}

function renderAiMetrics() {
  const entries = getMonitoredAiEntries();
  const quoted = entries.map((entry) => state.quotes.get(entry.code)).filter(Boolean);
  const up = quoted.filter((quote) => quote.changePct > 0).length;
  const avgPct = average(quoted.map((quote) => quote.changePct).filter(Number.isFinite));
  const biggestMove = quoted
    .filter((quote) => Number.isFinite(quote.changePct))
    .sort((a, b) => Math.abs(b.changePct) - Math.abs(a.changePct))[0];
  const klineMoves = entries
    .map((entry) => {
      const pct = getKlinePeriodPct(entry.code);
      const quote = state.quotes.get(entry.code);
      return { entry, quote, pct };
    })
    .filter((item) => Number.isFinite(item.pct));
  const avg30 = average(klineMoves.map((item) => item.pct));
  const biggest30 = klineMoves.sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct))[0];

  els.aiMetrics.innerHTML = [
    ["重点关注", `${entries.length} 只`],
    ["今日上涨", quoted.length ? `${up}/${quoted.length}` : "--"],
    ["今日平均", Number.isFinite(avgPct) ? formatPct(avgPct) : "--"],
    ["30日平均", Number.isFinite(avg30) ? formatDeltaPct(avg30) : "读取中"],
    ["30日最大波动", biggest30 ? `${biggest30.quote?.name ?? biggest30.entry.code} ${formatDeltaPct(biggest30.pct)}` : "读取中"],
  ]
    .map(([label, value]) => `<div class="metric-tile"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderOverviewDashboard() {
  const entries = getOverviewMonitorEntries();
  const rows = entries.map((entry) => {
    const quote = state.quotes.get(entry.code);
    ensureOverviewKlineData(entry, quote);
    return {
      entry,
      quote,
      p30: getOverviewPeriodPct(entry.code, 30),
      p90: getOverviewPeriodPct(entry.code, 90),
      p250: getOverviewPeriodPct(entry.code, 250),
    };
  });

  const quoted = rows.map((item) => item.quote).filter(Boolean);
  const upCount = quoted.filter((quote) => quote.changePct > 0).length;
  const avgToday = average(quoted.map((quote) => quote.changePct).filter(Number.isFinite));
  const avg30 = average(rows.map((item) => item.p30).filter(Number.isFinite));
  const bestToday = rows
    .filter((item) => Number.isFinite(item.quote?.changePct))
    .sort((a, b) => b.quote.changePct - a.quote.changePct)[0];

  if (els.overviewMetrics) {
    els.overviewMetrics.innerHTML = [
      ["监控市场", `${getMarketScopeKeys().length} 个`],
      ["监控股票", `${entries.length} 只`],
      ["今日上涨", quoted.length ? `${upCount}/${quoted.length}` : "--"],
      ["今日平均", Number.isFinite(avgToday) ? formatPct(avgToday) : "--"],
      ["30日平均", Number.isFinite(avg30) ? formatDeltaPct(avg30) : "读取中"],
      ["今日最强", bestToday ? `${bestToday.quote.name} ${formatPct(bestToday.quote.changePct)}` : "--"],
    ]
      .map(([label, value]) => `<div class="overview-metric-tile"><span>${label}</span><strong>${value}</strong></div>`)
      .join("");
  }

  if (!els.overviewRows) return;

  const sorted = rows.sort((a, b) => {
    const marketDiff = marketOrder(a.entry.market) - marketOrder(b.entry.market);
    if (marketDiff !== 0) return marketDiff;
    const levelDiff = levelRank(a.entry.level) - levelRank(b.entry.level);
    if (levelDiff !== 0) return levelDiff;
    return Math.abs(b.quote?.changePct ?? 0) - Math.abs(a.quote?.changePct ?? 0);
  });

  els.overviewRows.innerHTML =
    sorted
      .map(({ entry, quote, p30, p90, p250 }) => {
        const candles = getOverviewCandles(entry.code);
        const dayTone = toneClass(quote?.changePct);
        return `
          <tr class="overview-row">
            <td class="col-board">
              <div class="overview-board-cell">
                <strong>${MARKET_CONFIG[entry.market]?.label ?? entry.market}</strong>
                <span>${AI_SEGMENTS[entry.segment]} · ${AI_LEVELS[entry.level]}</span>
              </div>
            </td>
            <td class="col-name">
              <div class="stock-cell">
                <strong>${quote?.name ?? getOverviewFallbackName(entry)}</strong>
                <span>${quote?.displayCode ?? getOverviewFallbackCode(entry)}</span>
              </div>
            </td>
            <td class="col-quote">
              <div class="overview-price-cell">
                <strong>${formatPrice(quote?.price)} ${quote?.currency ?? ""}</strong>
                <span class="${dayTone}">${formatPct(quote?.changePct)}</span>
                <em>${formatQuoteDateTime(quote?.time)}</em>
              </div>
            </td>
            <td class="col-p30 ${toneClass(p30)}">${formatDeltaPct(p30)}</td>
            <td class="col-p90 ${toneClass(p90)}">${formatDeltaPct(p90)}</td>
            <td class="col-p250 ${toneClass(p250)}">${formatDeltaPct(p250)}</td>
            <td class="col-trend overview-trend-cell">
              <button class="trend-hover-button" type="button" aria-haspopup="dialog" aria-expanded="false">走势</button>
              <div class="overview-trend-popover">
                <strong>${quote?.name ?? getOverviewFallbackName(entry)} · 近一年</strong>
                ${renderOverviewTrendSvg(candles)}
              </div>
            </td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="7">暂无总览数据。请先在各市场添加监控标的。</td></tr>`;
}

function getOverviewMonitorEntries() {
  return getMarketScopeKeys().flatMap((market) => {
    const savedCodes = state.aiMonitors[market]?.length ? state.aiMonitors[market] : defaultAiMonitors(market);
    return normalizeAiMonitors(market, savedCodes)
      .map((code) => AI_UNIVERSE.find((entry) => entry.market === market && entry.code === code))
      .filter(Boolean);
  });
}

function getMarketScopeKeys() {
  return Object.keys(MARKET_CONFIG).filter((market) => market !== "overview");
}

function marketOrder(market) {
  return getMarketScopeKeys().indexOf(market);
}

function getOverviewFallbackName(entry) {
  return GLOBAL_QUOTE_SYMBOLS[entry.code]?.name ?? entry.code;
}

function getOverviewFallbackCode(entry) {
  return GLOBAL_QUOTE_SYMBOLS[entry.code]?.displayCode ?? entry.code.replace(/^(sh|sz|hk|us)/i, "");
}

function getOverviewCandles(code) {
  return state.overviewKlines[code]?.candles ?? state.aiKlines[code]?.candles ?? [];
}

function getOverviewPeriodPct(code, tradingDays) {
  const candles = getOverviewCandles(code);
  if (candles.length < 2) return Number.NaN;
  const valid = candles.filter((item) => Number.isFinite(item.close));
  if (valid.length < 2) return Number.NaN;
  const last = valid[valid.length - 1];
  const start = valid[Math.max(0, valid.length - tradingDays)];
  return pctChange(last?.close, start?.close);
}

function ensureOverviewKlineData(entry, quote) {
  const code = entry.code;
  const existing = state.overviewKlines[code];
  const freshMs = 60 * 60 * 1000;
  if (existing && Date.now() - existing.loadedAt < freshMs) return;
  if (state.overviewKlineLoading[code]) return;
  if (state.overviewKlineRetryAt[code] && Date.now() < state.overviewKlineRetryAt[code]) return;

  state.overviewKlineLoading[code] = true;
  delete state.overviewKlineErrors[code];

  loadKlineCandlesForCount(code, quote, 250)
    .then((record) => {
      state.overviewKlines[code] = { ...record, loadedAt: Date.now() };
      delete state.overviewKlineRetryAt[code];
    })
    .catch((error) => {
      state.overviewKlineErrors[code] = error?.message || "周期K线读取失败";
      state.overviewKlineRetryAt[code] = Date.now() + 10 * 60 * 1000;
    })
    .finally(() => {
      state.overviewKlineLoading[code] = false;
      if (state.activeMarket === "overview") renderOverviewDashboard();
      if (state.activeAppModule === "custom") renderCustomDashboard();
    });
}

function renderOverviewTrendSvg(candles) {
  const valid = candles.filter((item) => Number.isFinite(item.close)).slice(-250);
  if (valid.length < 2) {
    return `
      <div class="overview-trend-empty">
        <span>走势读取中</span>
        <em>等待日K线返回</em>
      </div>
    `;
  }

  const width = 320;
  const height = 132;
  const values = valid.map((item) => item.close);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = Math.max((max - min) * 0.12, Math.abs(values[values.length - 1]) * 0.002, 0.01);
  const low = min - pad;
  const high = max + pad;
  const plot = { left: 12, right: width - 12, top: 14, bottom: 92 };
  const x = (index) => plot.left + (index / Math.max(1, valid.length - 1)) * (plot.right - plot.left);
  const y = (value) => plot.bottom - ((value - low) / Math.max(0.0001, high - low)) * (plot.bottom - plot.top);
  const points = valid.map((item, index) => `${x(index).toFixed(1)},${y(item.close).toFixed(1)}`).join(" ");
  const pct = pctChange(valid[valid.length - 1]?.close, valid[0]?.close);
  const tone = toneClass(pct);
  const first = valid[0];
  const last = valid[valid.length - 1];
  const areaPoints = `${plot.left},${plot.bottom} ${points} ${plot.right},${plot.bottom}`;

  return `
    <div class="overview-trend-card">
      <div class="overview-trend-stat-grid">
        <div><span>区间</span><strong class="${tone}">${formatDeltaPct(pct)}</strong></div>
        <div><span>最新</span><strong>${formatPrice(last.close)}</strong></div>
        <div><span>高点</span><strong>${formatPrice(max)}</strong></div>
        <div><span>低点</span><strong>${formatPrice(min)}</strong></div>
      </div>
      <svg class="overview-trend-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="近一年走势">
        <line x1="${plot.left}" y1="${plot.top}" x2="${plot.right}" y2="${plot.top}"></line>
        <line x1="${plot.left}" y1="${(plot.top + plot.bottom) / 2}" x2="${plot.right}" y2="${(plot.top + plot.bottom) / 2}"></line>
        <line x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}"></line>
        <polygon class="overview-trend-area ${tone}" points="${areaPoints}"></polygon>
        <polyline class="overview-trend-line halo" points="${points}"></polyline>
        <polyline class="overview-trend-line ${tone}" points="${points}"></polyline>
        <circle class="overview-trend-dot start" cx="${x(0).toFixed(1)}" cy="${y(first.close).toFixed(1)}" r="3.5"></circle>
        <circle class="overview-trend-dot end ${tone}" cx="${x(valid.length - 1).toFixed(1)}" cy="${y(last.close).toFixed(1)}" r="4.5"></circle>
        <text x="${plot.left}" y="${height - 8}">${formatDateLabel(first.date)}</text>
        <text class="end" x="${plot.right}" y="${height - 8}">${formatDateLabel(last.date)}</text>
      </svg>
    </div>
  `;
}

function renderMonitorFocus() {
  const entries = getMonitoredAiEntries();
  const sorted = sortMonitorEntries(entries);

  els.monitorFocusCards.innerHTML =
    sorted
      .map((entry) => {
        const quote = state.quotes.get(entry.code);
        ensureKlineData(entry.code, quote);
        const stats = getCycleStats(entry.code, quote);
        const klinePct = getKlinePeriodPct(entry.code);
        const dayTone = toneClass(quote?.changePct);
        const klineTone = toneClass(klinePct);
        const cycleTone = toneClass(stats.cyclePct);
        const lastTone = toneClass(stats.lastPct);
        const sessionTone = toneClass(stats.sessionPct);
        const alert = getAlertState(quote);
        return `
          <article class="monitor-focus-card">
            <div class="monitor-card-head">
              <div class="monitor-card-name">
                <strong>${quote?.name ?? entry.code}</strong>
                <span>${quote?.displayCode ?? entry.code} · ${AI_SEGMENTS[entry.segment]}</span>
              </div>
              <span class="alert-pill ${alert.className}">${alert.label}</span>
            </div>
            <div class="monitor-price ${dayTone}">${formatPrice(quote?.price)} ${quote?.currency ?? ""}</div>
            <div class="monitor-mini-grid">
              <div><span>日内</span><strong class="${dayTone}">${formatPct(quote?.changePct)}</strong></div>
              <div><span>30日</span><strong class="${klineTone}">${formatDeltaPct(klinePct)}</strong></div>
              <div><span>上次刷新</span><strong class="${lastTone}">${formatDeltaPct(stats.lastPct)}</strong></div>
              <div><span>${state.cycleWindowMinutes}分钟</span><strong class="${cycleTone}">${formatDeltaPct(stats.cyclePct)}</strong></div>
            </div>
            <div class="monitor-card-foot">
              <div class="cycle-value">
                <span>本轮观察</span>
                <strong class="${sessionTone}">${formatDeltaPct(stats.sessionPct)}</strong>
                <em class="cycle-note">${stats.note}</em>
              </div>
              ${renderSparkline(entry.code)}
            </div>
            <div class="row-actions monitor-card-actions">
              <button class="inspect-button ${state.selectedTrendCode === entry.code ? "active" : ""}" type="button" data-ai-trend="${entry.code}">走势</button>
            </div>
          </article>
        `;
      })
      .join("") || `<div class="analysis-card">当前市场还没有监控标的。点击下方股票池里的“监控”后，会在这里重点显示。</div>`;
}

function renderMonitorCycleRows() {
  const rows = sortMonitorEntries(getMonitoredAiEntries()).map((entry) => {
    const quote = state.quotes.get(entry.code);
    const stats = getCycleStats(entry.code, quote);
    const klinePct = getKlinePeriodPct(entry.code);
    const dayTone = toneClass(quote?.changePct);
    const klineTone = toneClass(klinePct);
    const lastTone = toneClass(stats.lastPct);
    const cycleTone = toneClass(stats.cyclePct);
    const sessionTone = toneClass(stats.sessionPct);
    return `
      <tr>
        <td>
          <div class="stock-cell">
            <strong>${quote?.name ?? entry.code}</strong>
            <span>${quote?.displayCode ?? entry.code} · ${AI_SEGMENTS[entry.segment]}</span>
          </div>
        </td>
        <td class="${dayTone}">${formatPct(quote?.changePct)}</td>
        <td class="${klineTone}">${formatDeltaPct(klinePct)}</td>
        <td class="${lastTone}">${formatDeltaPct(stats.lastPct)}</td>
        <td>
          <div class="cycle-value">
            <strong class="${cycleTone}">${formatDeltaPct(stats.cyclePct)}</strong>
            <span>${state.cycleWindowMinutes}分钟 · ${stats.note}</span>
          </div>
        </td>
        <td class="${sessionTone}">${formatDeltaPct(stats.sessionPct)}</td>
        <td>${formatMoney(quote?.amount, quote?.currency)}</td>
        <td>${formatTime(quote?.time)}</td>
      </tr>
    `;
  });

  els.monitorCycleRows.innerHTML =
    rows.join("") || `<tr><td colspan="8">暂无监控数据。先展开候选股票池添加监控标的，再刷新行情。</td></tr>`;
}

function renderStyleRotationBoard() {
  if (!els.styleRotationBoard) return;

  const items = GLOBAL_SHOVEL_REFERENCES.map((item) => {
    const quote = item.code ? state.quotes.get(item.code) : null;
    const quoteHint = quote || (item.ticker ? { displayCode: item.ticker } : null);
    if (item.code) ensureKlineData(item.code, quoteHint);
    const livePct = item.code ? getKlinePeriodPct(item.code) : Number.NaN;
    const rankingPct = Number.isFinite(livePct) ? livePct : item.referencePct;
    return {
      ...item,
      quote,
      livePct,
      rankingPct,
    };
  }).sort((a, b) => b.rankingPct - a.rankingPct);

  const topLive = items.find((item) => Number.isFinite(item.livePct));
  const topItem = topLive || items[0];
  const nvda = items.find((item) => item.code === "usNVDA");
  const mu = items.find((item) => item.code === "usMU");
  const asml = items.find((item) => item.code === "usASML");
  const nvdaPct = Number.isFinite(nvda?.livePct) ? nvda.livePct : nvda?.referencePct;
  const shovelPct = Math.max(
    Number.isFinite(mu?.livePct) ? mu.livePct : mu?.referencePct ?? Number.NEGATIVE_INFINITY,
    Number.isFinite(asml?.livePct) ? asml.livePct : asml?.referencePct ?? Number.NEGATIVE_INFINITY,
  );
  const rotationText =
    Number.isFinite(shovelPct) && Number.isFinite(nvdaPct) && shovelPct - nvdaPct > 8
      ? "资金更偏向HBM和设备扩产，说明利润预期正在向更上游扩散。"
      : "GPU仍是锚点，但需要同时比较HBM、设备和代工是否继续强于它。";

  const cards = items
    .map((item, index) => {
      const liveLabel = Number.isFinite(item.livePct) ? formatDeltaPct(item.livePct) : item.reference;
      const tone = toneClass(Number.isFinite(item.livePct) ? item.livePct : item.referencePct);
      const sourceLabel = Number.isFinite(item.livePct) ? "30天K线" : "参考区间";
      return `
        <article class="rotation-card">
          <div class="rotation-rank">${index + 1}</div>
          <div class="rotation-main">
            <div class="rotation-name-row">
              <strong>${item.label}</strong>
              <span>${item.ticker}</span>
            </div>
            <div class="rotation-meta">
              <span>${item.marketLabel}</span>
              <span>${item.theme}</span>
            </div>
            <p>${item.note}</p>
          </div>
          <div class="rotation-change">
            <strong class="${tone}">${liveLabel}</strong>
            <span>${sourceLabel}</span>
          </div>
        </article>
      `;
    })
    .join("");

  els.styleRotationBoard.innerHTML = `
    <div class="rotation-summary">
      <div>
        <span>当前最强线索</span>
        <strong>${topItem.theme}</strong>
        <em>${topItem.label} ${Number.isFinite(topItem.livePct) ? formatDeltaPct(topItem.livePct) : topItem.reference}</em>
      </div>
      <p>${rotationText}</p>
    </div>
    <div class="rotation-card-list">${cards}</div>
    <div class="rotation-watchline">
      <span>跟踪规则</span>
      <strong>ASML / Micron / SK Hynix 持续强于 NVIDIA 和 TSMC 时，说明市场在交易“上游瓶颈重定价”。</strong>
    </div>
  `;
}

function renderFundDashboard() {
  if (!els.fundMetrics || !els.fundCards || !els.fundRows) return;
  syncFundTabs();

  const funds = getFilteredFunds().sort((a, b) => fundPrimaryReturn(b) - fundPrimaryReturn(a));
  funds.forEach((fund) => ensureFundKlineData(fund, getFundQuote(fund)));
  const positive = funds.filter((fund) => fundPrimaryReturn(fund) > 0).length;
  const avg1y = average(funds.map((fund) => fund.r1y).filter(Number.isFinite));
  const avgLong = average(funds.map((fund) => fundPrimaryReturn(fund)).filter(Number.isFinite));
  const fundQuotes = funds.map((fund) => getFundQuote(fund)).filter(Boolean);
  const quoteUp = fundQuotes.filter((quote) => quote.changePct > 0).length;
  const avgQuotePct = average(fundQuotes.map((quote) => quote.changePct).filter(Number.isFinite));
  const best = funds[0];
  const weakest = [...funds].sort((a, b) => fundPrimaryReturn(a) - fundPrimaryReturn(b))[0];

  els.fundUpdatedAt.textContent = `${fundScopeLabel(state.activeFundScope)} · 周期涨跌幅按日K线计算 · 今日行情为最新交易价`;
  els.fundMetrics.innerHTML = [
    ["当前范围", fundScopeLabel(state.activeFundScope)],
    ["基金样本", `${funds.length} 只`],
    ["今日上涨", fundQuotes.length ? `${quoteUp}/${fundQuotes.length}` : "读取中"],
    ["今日平均", Number.isFinite(avgQuotePct) ? formatPct(avgQuotePct) : "读取中"],
    ["长期上涨", `${positive}/${funds.length}`],
    ["近1年平均", formatDeltaPct(avg1y)],
    ["长期平均", formatDeltaPct(avgLong)],
    ["最强基金", best ? `${best.name} ${formatDeltaPct(fundPrimaryReturn(best))}` : "--"],
    ["弱势提醒", weakest ? `${weakest.name} ${formatDeltaPct(fundPrimaryReturn(weakest))}` : "--"],
  ]
    .map(([label, value]) => `<div class="fund-metric-tile"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  const showFundCards = state.activeFundScope !== "overview";
  els.fundCards.hidden = !showFundCards;
  if (showFundCards) {
    els.fundCards.innerHTML = funds
    .slice(0, 6)
    .map((fund) => {
      const longReturn = fundPrimaryReturn(fund);
      const p30 = getFundPeriodPct(fund, 30);
      const p90 = getFundPeriodPct(fund, 90);
      const p250 = getFundPeriodPct(fund, 250);
      const quote = getFundQuote(fund);
      const quoteTone = toneClass(quote?.changePct);
      return `
        <article class="fund-card">
          <div class="fund-card-head">
            <div>
              <strong>${fund.name}</strong>
              <span>${fund.code} · ${fundMarketLabel(fund.market)}</span>
            </div>
            <span class="fund-category">${fund.category}</span>
          </div>
          <div class="fund-quote-line">
            <strong>${formatPrice(quote?.price)} ${quote?.currency ?? ""}</strong>
            <span class="${quoteTone}">${formatPct(quote?.changePct)}</span>
            <em>${formatQuoteDateTime(quote?.time)}</em>
          </div>
          <div class="fund-return ${toneClass(longReturn)}">${formatDeltaPct(longReturn)}</div>
          <div class="fund-return-grid">
            <div><span>30日</span><strong class="${toneClass(p30)}">${formatDeltaPct(p30)}</strong></div>
            <div><span>3个月</span><strong class="${toneClass(p90)}">${formatDeltaPct(p90)}</strong></div>
            <div><span>1年</span><strong class="${toneClass(p250)}">${formatDeltaPct(p250)}</strong></div>
            <div><span>回撤</span><strong class="${toneClass(fund.drawdown)}">${formatDeltaPct(fund.drawdown)}</strong></div>
          </div>
          <p>${fund.focus}</p>
        </article>
      `;
    })
    .join("");
  } else {
    els.fundCards.innerHTML = "";
  }

  els.fundRows.innerHTML = funds
    .map((fund) => {
      const p30 = getFundPeriodPct(fund, 30);
      const p90 = getFundPeriodPct(fund, 90);
      const p250 = getFundPeriodPct(fund, 250);
      const quote = getFundQuote(fund);
      const quoteTone = toneClass(quote?.changePct);
      return `
        <tr>
          <td class="col-fund-category">
            <span class="fund-category">${fund.category}</span>
            <span class="segment-note">${fund.focus}</span>
          </td>
          <td class="col-fund-name">
            <div class="stock-cell">
              <strong>${fund.name}</strong>
              <span>${fund.code} · ${fundMarketLabel(fund.market)} · ${fund.sample}</span>
            </div>
          </td>
          <td class="col-fund-quote">
            <div class="fund-quote-cell">
              <strong>${formatPrice(quote?.price)} ${quote?.currency ?? ""}</strong>
              <span class="${quoteTone}">${formatPct(quote?.changePct)}</span>
              <em>${formatQuoteDateTime(quote?.time)}</em>
            </div>
          </td>
          <td class="col-fund-p30 ${toneClass(p30)}">${formatDeltaPct(p30)}</td>
          <td class="col-fund-p90 ${toneClass(p90)}">${formatDeltaPct(p90)}</td>
          <td class="col-fund-p250 ${toneClass(p250)}">${formatDeltaPct(p250)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderFundOverviewGroups() {
  if (!els.fundOverviewGroups) return;

  if (state.activeFundScope !== "overview") {
    els.fundOverviewGroups.hidden = true;
    els.fundOverviewGroups.innerHTML = "";
    return;
  }

  els.fundOverviewGroups.hidden = false;
  const groups = ["us", "cn"].map((market) => {
    const funds = FUND_UNIVERSE.filter((fund) => fund.market === market);
    const quotes = funds.map((fund) => getFundQuote(fund)).filter(Boolean);
    const quoteUp = quotes.filter((quote) => quote.changePct > 0).length;
    const avgToday = average(quotes.map((quote) => quote.changePct).filter(Number.isFinite));
    const avg1y = average(funds.map((fund) => fund.r1y).filter(Number.isFinite));
    const avgLong = average(funds.map((fund) => fundPrimaryReturn(fund)).filter(Number.isFinite));
    const strongest = [...funds].sort((a, b) => fundPrimaryReturn(b) - fundPrimaryReturn(a))[0];
    const topFunds = [...funds]
      .sort((a, b) => fundPrimaryReturn(b) - fundPrimaryReturn(a))
      .slice(0, 3)
      .map((fund) => `${fund.name} ${formatDeltaPct(fundPrimaryReturn(fund))}`)
      .join(" / ");

    return {
      market,
      title: fundScopeLabel(market),
      funds,
      quotes,
      quoteUp,
      avgToday,
      avg1y,
      avgLong,
      strongest,
      topFunds,
    };
  });

  els.fundOverviewGroups.innerHTML = groups
    .map((group) => `
      <article class="fund-overview-card">
        <div class="fund-overview-card-head">
          <div>
            <p class="eyebrow">${group.market === "us" ? "海外ETF" : "境内ETF/QDII"}</p>
            <h4>${group.title}</h4>
          </div>
          <span>${group.funds.length} 只</span>
        </div>
        <div class="fund-overview-stat-grid">
          <div><span>今日上涨</span><strong>${group.quotes.length ? `${group.quoteUp}/${group.quotes.length}` : "读取中"}</strong></div>
          <div><span>今日平均</span><strong class="${toneClass(group.avgToday)}">${Number.isFinite(group.avgToday) ? formatPct(group.avgToday) : "读取中"}</strong></div>
          <div><span>近1年平均</span><strong class="${toneClass(group.avg1y)}">${formatDeltaPct(group.avg1y)}</strong></div>
          <div><span>长期平均</span><strong class="${toneClass(group.avgLong)}">${formatDeltaPct(group.avgLong)}</strong></div>
        </div>
        <div class="fund-overview-note">
          <span>最强</span>
          <strong>${group.strongest ? `${group.strongest.name} ${formatDeltaPct(fundPrimaryReturn(group.strongest))}` : "--"}</strong>
        </div>
        <p>${group.topFunds}</p>
      </article>
    `)
    .join("");
}

function getFilteredFunds() {
  if (state.activeFundScope === "overview") return [...FUND_UNIVERSE];
  return FUND_UNIVERSE.filter((fund) => fund.market === state.activeFundScope);
}

function getFundQuoteCode(fund) {
  if (fund.market === "us") return `us${fund.code}`;
  if (fund.market === "cn") {
    return /^(5|6|9)/.test(fund.code) ? `sh${fund.code}` : `sz${fund.code}`;
  }
  return fund.code;
}

function getFundQuote(fund) {
  return state.fundQuotes.get(getFundQuoteCode(fund));
}

function syncFundTabs() {
  els.fundTabs?.querySelectorAll("[data-fund-scope]").forEach((button) => {
    const selected = button.dataset.fundScope === state.activeFundScope;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

function fundScopeLabel(scope) {
  return {
    overview: "总览",
    us: "美股ETF",
    cn: "境内场内基金",
  }[scope] ?? scope;
}

function fundPrimaryReturn(fund) {
  return Number.isFinite(fund.r5y) ? fund.r5y : fund.total;
}

function fundMarketLabel(market) {
  return { us: "美股ETF", cn: "境内场内基金" }[market] ?? market;
}

function getFundPeriodPct(fund, tradingDays) {
  const key = getFundQuoteCode(fund);
  const candles = state.fundKlines[key]?.candles ?? [];
  const pct = getCandlesPeriodPct(candles, tradingDays);
  if (Number.isFinite(pct)) return pct;
  return tradingDays >= 250 ? fund.r1y : Number.NaN;
}

function getCandlesPeriodPct(candles, tradingDays) {
  if (!Array.isArray(candles) || candles.length < 2) return Number.NaN;
  const valid = candles.filter((item) => Number.isFinite(item.close));
  if (valid.length < 2) return Number.NaN;
  const last = valid[valid.length - 1];
  const start = valid[Math.max(0, valid.length - tradingDays)];
  return pctChange(last?.close, start?.close);
}

function ensureFundKlineData(fund, quote) {
  const key = getFundQuoteCode(fund);
  const existing = state.fundKlines[key];
  const freshMs = 60 * 60 * 1000;
  if (existing && Date.now() - existing.loadedAt < freshMs) return;
  if (state.fundKlineLoading[key]) return;
  if (state.fundKlineRetryAt[key] && Date.now() < state.fundKlineRetryAt[key]) return;

  state.fundKlineLoading[key] = true;
  delete state.fundKlineErrors[key];

  loadFundKlineCandles(fund, quote, 250)
    .then((record) => {
      state.fundKlines[key] = { ...record, loadedAt: Date.now() };
      delete state.fundKlineRetryAt[key];
    })
    .catch((error) => {
      state.fundKlineErrors[key] = error?.message || "基金周期K线读取失败";
      state.fundKlineRetryAt[key] = Date.now() + 10 * 60 * 1000;
    })
    .finally(() => {
      state.fundKlineLoading[key] = false;
      if (state.activeAppModule === "fund") renderFundDashboard();
      if (state.activeAppModule === "custom") renderCustomDashboard();
    });
}

function loadFundKlineCandles(fund, quote, count = 250) {
  const size = Math.max(30, Math.min(260, Number(count) || 250));
  if (fund.market === "us") {
    const range = size > 120 ? "1y" : size > 45 ? "3mo" : "1mo";
    return fetchYahooChart(fund.code, range, "1d").then((result) => {
      const candles = parseYahooCandles(result);
      if (candles.length >= 10) {
        return { candles: candles.slice(-size), requestCode: fund.code, source: "Yahoo日线" };
      }
      throw new Error("基金日K线数据不足");
    });
  }

  return loadKlineCandlesForCount(getFundQuoteCode(fund), quote, size);
}

function updateCustomMarketOptions() {
  if (!els.customTypeInput || !els.customMarketInput) return;
  const type = els.customTypeInput.value === "fund" ? "fund" : "stock";
  const options = CUSTOM_MARKET_OPTIONS[type] ?? CUSTOM_MARKET_OPTIONS.stock;
  const previous = els.customMarketInput.value;
  els.customMarketInput.innerHTML = options
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");
  els.customMarketInput.value = options.some((option) => option.value === previous) ? previous : options[0].value;
}

function renderCustomDashboard() {
  if (!els.customRows || !els.customMetrics) return;

  const rows = normalizeCustomWatchlist(state.customWatchlist).map((item) => {
    if (item.type === "fund") {
      const fund = getCustomFundRecord(item);
      const quote = getFundQuote(fund);
      ensureFundKlineData(fund, quote);
      const key = getFundQuoteCode(fund);
      return {
        item,
        quote,
        name: quote?.name ?? fund.name,
        codeLabel: quote?.displayCode ?? getCustomFundDisplayCode(fund),
        typeLabel: "基金",
        marketLabel: fundMarketLabel(fund.market),
        note: fund.category,
        p30: getFundPeriodPct(fund, 30),
        p90: getFundPeriodPct(fund, 90),
        p250: getFundPeriodPct(fund, 250),
        candles: state.fundKlines[key]?.candles ?? [],
      };
    }

    const quote = state.quotes.get(item.code);
    ensureCustomStockKlineData(item, quote);
    return {
      item,
      quote,
      name: quote?.name ?? getCustomStockFallbackName(item),
      codeLabel: quote?.displayCode ?? getCustomStockFallbackCode(item),
      typeLabel: "股票",
      marketLabel: customMarketLabel(item.market),
      note: customMarketLabel(item.market),
      p30: getOverviewPeriodPct(item.code, 30),
      p90: getOverviewPeriodPct(item.code, 90),
      p250: getOverviewPeriodPct(item.code, 250),
      candles: getOverviewCandles(item.code),
    };
  });

  const quoted = rows.map((row) => row.quote).filter(Boolean);
  const upCount = quoted.filter((quote) => quote.changePct > 0).length;
  const avgToday = average(quoted.map((quote) => quote.changePct).filter(Number.isFinite));
  const avg30 = average(rows.map((row) => row.p30).filter(Number.isFinite));
  const bestToday = rows
    .filter((row) => Number.isFinite(row.quote?.changePct))
    .sort((a, b) => b.quote.changePct - a.quote.changePct)[0];

  els.customMetrics.innerHTML = [
    ["自选总数", `${rows.length} 个`],
    ["股票", `${rows.filter((row) => row.item.type === "stock").length} 只`],
    ["基金", `${rows.filter((row) => row.item.type === "fund").length} 只`],
    ["今日上涨", quoted.length ? `${upCount}/${quoted.length}` : "--"],
    ["今日平均", Number.isFinite(avgToday) ? formatPct(avgToday) : "--"],
    ["30日平均", Number.isFinite(avg30) ? formatDeltaPct(avg30) : "读取中"],
    ["今日最强", bestToday ? `${bestToday.name} ${formatPct(bestToday.quote.changePct)}` : "--"],
  ]
    .map(([label, value]) => `<div class="custom-metric-tile"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  renderCustomAnalysis(rows);

  els.customRows.innerHTML =
    rows
      .map((row) => {
        const dayTone = toneClass(row.quote?.changePct);
        const id = customItemKey(row.item);
        return `
          <tr class="custom-row">
            <td class="col-custom-type">
              <div class="custom-type-cell">
                <strong>${row.typeLabel}</strong>
                <span>${row.marketLabel}</span>
              </div>
            </td>
            <td class="col-custom-name">
              <div class="stock-cell">
                <strong>${row.name}</strong>
                <span>${row.codeLabel} · ${row.note}</span>
              </div>
            </td>
            <td class="col-custom-quote">
              <div class="overview-price-cell">
                <strong>${formatPrice(row.quote?.price)} ${row.quote?.currency ?? ""}</strong>
                <span class="${dayTone}">${formatPct(row.quote?.changePct)}</span>
                <em>${formatQuoteDateTime(row.quote?.time)}</em>
              </div>
            </td>
            <td class="col-custom-p30 ${toneClass(row.p30)}">${formatDeltaPct(row.p30)}</td>
            <td class="col-custom-p90 ${toneClass(row.p90)}">${formatDeltaPct(row.p90)}</td>
            <td class="col-custom-p250 ${toneClass(row.p250)}">${formatDeltaPct(row.p250)}</td>
            <td class="col-custom-trend overview-trend-cell">
              <button class="trend-hover-button" type="button" aria-haspopup="dialog" aria-expanded="false">走势</button>
              <div class="overview-trend-popover">
                <strong>${row.name} · 近一年</strong>
                ${renderOverviewTrendSvg(row.candles)}
              </div>
            </td>
            <td class="col-custom-action">
              <button class="remove-button" type="button" data-custom-remove="${id}" title="移除前会再次确认" aria-label="移除${row.name}，会再次确认">
                <i data-lucide="trash-2"></i>
              </button>
            </td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="8">还没有自选。可以添加 A股、港股、美股、全球核心股票，或美股ETF/境内场内基金。</td></tr>`;
}

function renderCustomAnalysis(rows) {
  if (!els.customAnalysis) return;

  const analyzed = rows
    .map((row) => ({ row, note: CUSTOM_ANALYSIS_NOTES[row.item.code] }))
    .filter((item) => item.note);

  if (!analyzed.length) {
    els.customAnalysis.hidden = true;
    els.customAnalysis.innerHTML = "";
    return;
  }

  els.customAnalysis.hidden = false;
  els.customAnalysis.innerHTML = `
    <div class="custom-analysis-head">
      <div>
        <p class="eyebrow">分析结论</p>
        <h4>科翔股份、索辰科技更贴近AI增量；元力股份和卓胜微需要看业务兑现。</h4>
      </div>
      <span>按自选行情同步更新周期数据</span>
    </div>
    <div class="custom-analysis-grid">
      ${analyzed
        .map(({ row, note }) => {
          const dayTone = toneClass(row.quote?.changePct);
          return `
            <article class="custom-analysis-card">
              <div class="custom-analysis-card-head">
                <div>
                  <strong>${row.name}</strong>
                  <span>${row.codeLabel} · ${note.theme}</span>
                </div>
                <em>${note.level}</em>
              </div>
              <div class="custom-analysis-mini">
                <div><span>现价</span><strong>${formatPrice(row.quote?.price)} ${row.quote?.currency ?? ""}</strong></div>
                <div><span>今日</span><strong class="${dayTone}">${formatPct(row.quote?.changePct)}</strong></div>
                <div><span>30日</span><strong class="${toneClass(row.p30)}">${formatDeltaPct(row.p30)}</strong></div>
                <div><span>1年</span><strong class="${toneClass(row.p250)}">${formatDeltaPct(row.p250)}</strong></div>
              </div>
              <p>${note.conclusion}</p>
              <dl>
                <div>
                  <dt>重点验证</dt>
                  <dd>${note.watch.join(" / ")}</dd>
                </div>
                <div>
                  <dt>主要风险</dt>
                  <dd>${note.risk}</dd>
                </div>
              </dl>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function handleCustomAdd(event) {
  event.preventDefault();
  const type = els.customTypeInput?.value === "fund" ? "fund" : "stock";
  const market = els.customMarketInput?.value || (type === "fund" ? "us" : "cn");
  const code = type === "fund"
    ? normalizeFundCode(els.customCodeInput.value, market)
    : normalizeCode(els.customCodeInput.value, market);

  if (!code) {
    setCustomHint("代码格式不对。股票示例：600519、00700、AAPL；基金示例：SMH、QQQ、512480。", true);
    return;
  }

  const item = {
    type,
    market: type === "stock" ? marketFromCode(code) : market,
    code,
  };
  const key = customItemKey(item);
  const list = normalizeCustomWatchlist(state.customWatchlist).filter((saved) => customItemKey(saved) !== key);
  state.customWatchlist = [item, ...list].slice(0, 40);
  saveCustomWatchlist();

  els.customCodeInput.value = "";
  setCustomHint("已加入自选，正在刷新行情。", false);
  renderCustomDashboard();
  refreshCustomQuotes();
}

function handleCustomAction(event) {
  const button = event.target.closest("[data-custom-remove]");
  if (!button) return;

  const key = button.dataset.customRemove;
  const list = normalizeCustomWatchlist(state.customWatchlist);
  const removedItem = list.find((item) => customItemKey(item) === key);
  const label = getCustomRemoveLabel(removedItem);

  if (!window.confirm(`确认从自选移除「${label}」吗？\n\n点“确定”才会删除，点“取消”保留。`)) {
    setCustomHint(`已取消移除：${label}`, false);
    return;
  }

  state.customWatchlist = list.filter((item) => customItemKey(item) !== key);
  saveCustomWatchlist();
  setCustomHint(`已从自选移除：${label}`, false);
  renderCustomDashboard();
  refreshIcons();
}

function getCustomRemoveLabel(item) {
  if (!item) return "该自选";
  if (item.type === "fund") {
    const fund = getCustomFundRecord(item);
    const quote = getFundQuote(fund);
    return `${quote?.name ?? fund.name}（${quote?.displayCode ?? getCustomFundDisplayCode(fund)}）`;
  }

  const quote = state.quotes.get(item.code);
  return `${quote?.name ?? getCustomStockFallbackName(item)}（${quote?.displayCode ?? getCustomStockFallbackCode(item)}）`;
}

function getCustomStockItems() {
  return normalizeCustomWatchlist(state.customWatchlist).filter((item) => item.type === "stock");
}

function getCustomFundItems() {
  return normalizeCustomWatchlist(state.customWatchlist).filter((item) => item.type === "fund");
}

function getCustomFundRecord(item) {
  const found = FUND_UNIVERSE.find((fund) => fund.market === item.market && fund.code.toUpperCase() === item.code.toUpperCase());
  if (found) return found;

  return {
    code: item.code,
    name: item.market === "us" ? `${item.code} ETF` : `${item.code} 基金`,
    market: item.market,
    category: item.market === "us" ? "美股ETF" : "自选基金",
    focus: "自选添加，周期涨跌幅按可获取日K线计算。",
    useCase: "自选观察",
    r1y: null,
    r3y: null,
    r5y: null,
    total: null,
    drawdown: null,
    sample: "自选",
  };
}

function getCustomFundDisplayCode(fund) {
  return fund.market === "us" ? fund.code.toUpperCase() : fund.code;
}

function getCustomStockFallbackName(item) {
  return GLOBAL_QUOTE_SYMBOLS[item.code]?.name ?? item.code;
}

function getCustomStockFallbackCode(item) {
  return GLOBAL_QUOTE_SYMBOLS[item.code]?.displayCode ?? item.code.replace(/^(sh|sz|hk|us)/i, "");
}

function customMarketLabel(market) {
  return {
    cn: "A股",
    hk: "港股",
    us: "美股",
    global: "全球核心",
  }[market] ?? market;
}

function normalizeFundCode(value, market) {
  const compact = value.trim().replace(/\s+/g, "");
  if (!compact) return "";

  if (market === "us") {
    const symbol = compact.replace(/^us/i, "").toUpperCase();
    return /^[A-Z.]{1,12}$/.test(symbol) ? symbol : "";
  }

  if (market === "cn") {
    const code = compact.replace(/^(sh|sz)/i, "");
    return /^\d{6}$/.test(code) ? code : "";
  }

  return "";
}

function normalizeCustomWatchlist(items) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items
    .map((item) => {
      const type = item?.type === "fund" ? "fund" : "stock";
      const market = String(item?.market || "").trim();
      const code = String(item?.code || "").trim();
      if (!market || !code) return null;
      return { type, market, code };
    })
    .filter(Boolean)
    .filter((item) => {
      const key = customItemKey(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function readSeededCustomWatchlist() {
  const saved = normalizeCustomWatchlist(readJSON(STORAGE_KEYS.customWatchlist, []));
  if (localStorage.getItem(STORAGE_KEYS.customSeedVersion) === CUSTOM_WATCHLIST_SEED_VERSION) {
    return saved;
  }

  const seeded = normalizeCustomWatchlist([...CUSTOM_WATCHLIST_SEED, ...saved]).slice(0, 40);
  writeJSON(STORAGE_KEYS.customWatchlist, seeded);
  localStorage.setItem(STORAGE_KEYS.customSeedVersion, CUSTOM_WATCHLIST_SEED_VERSION);
  return seeded;
}

function customItemKey(item) {
  return `${item.type}:${item.market}:${item.code}`;
}

function saveCustomWatchlist() {
  state.customWatchlist = normalizeCustomWatchlist(state.customWatchlist);
  writeJSON(STORAGE_KEYS.customWatchlist, state.customWatchlist);
}

function setCustomHint(message, isError) {
  if (!els.customHint) return;
  els.customHint.textContent = message;
  els.customHint.classList.toggle("error", Boolean(isError));
}

function ensureCustomStockKlineData(item, quote) {
  ensureOverviewKlineData(
    {
      code: item.code,
      market: item.market,
      segment: "all",
      level: "support",
    },
    quote,
  );
}

function renderAiRows(entries) {
  const sorted = [...entries].sort((a, b) => {
    const levelScore = levelRank(a.level) - levelRank(b.level);
    if (levelScore !== 0) return levelScore;
    const quoteA = state.quotes.get(a.code);
    const quoteB = state.quotes.get(b.code);
    return Math.abs(quoteB?.changePct ?? 0) - Math.abs(quoteA?.changePct ?? 0);
  });

  els.aiRows.innerHTML =
    sorted
      .map((entry) => {
        const quote = state.quotes.get(entry.code);
        const monitored = isAiMonitored(entry.code);
        const tone = toneClass(quote?.changePct);
        const alert = getAlertState(quote);
        return `
          <tr>
            <td>
              <div class="stock-cell">
                <strong>${quote?.name ?? entry.code}</strong>
                <span>${quote?.displayCode ?? entry.code}</span>
              </div>
            </td>
            <td>
              <div class="tag-stack">
                <span class="segment-pill">${AI_SEGMENTS[entry.segment]}</span>
              </div>
              <span class="segment-note">${entry.thesis}</span>
            </td>
            <td>
              <span class="level-pill ${entry.level}">${AI_LEVELS[entry.level]}</span>
              <span class="alert-pill ${alert.className}">${alert.label}</span>
            </td>
            <td class="${tone}">${formatPrice(quote?.price)}</td>
            <td class="${tone}">${formatPct(quote?.changePct)}</td>
            <td>${formatMoney(quote?.amount, quote?.currency)}</td>
            <td>
              <div class="row-actions">
                <button class="watch-toggle ${monitored ? "active" : ""}" type="button" data-ai-toggle="${entry.code}">
                  ${monitored ? "已监控" : "监控"}
                </button>
                <button class="inspect-button ${state.selectedTrendCode === entry.code ? "active" : ""}" type="button" data-ai-trend="${entry.code}">走势</button>
                <button class="inspect-button" type="button" data-ai-select="${entry.code}">分析</button>
              </div>
            </td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="7">没有符合筛选条件的AI上游标的</td></tr>`;
}

function renderStockTrend(entries) {
  const entry = resolveTrendEntry(entries);
  if (!entry) {
    delete els.stockTrendPanel.dataset.trendCode;
    els.stockTrendPanel.innerHTML = `<div class="analysis-card">当前市场没有可查看走势的股票。</div>`;
    els.trendSnapshotRows.innerHTML = `<tr><td colspan="5">暂无快照</td></tr>`;
    return;
  }

  state.selectedTrendCode = entry.code;
  els.stockTrendPanel.dataset.trendCode = entry.code;

  const quote = state.quotes.get(entry.code);
  ensureKlineData(entry.code, quote);
  const history = filterTrendHistory(getAiHistoryList(entry.code), state.trendRangeMinutes);
  const summary = getTrendSummary(history, quote);
  const tone = toneClass(summary.rangePct);
  const rangeLabel = trendRangeLabel();
  const quoteLabel = quote?.displayCode ?? entry.code;
  const stockName = quote?.name ?? entry.code;
  const note =
    history.length >= 2
      ? `${rangeLabel}内已记录 ${history.length} 个页面快照，走势会随刷新继续累积。`
      : "当前只有少量页面快照；开启自动刷新或手动多刷新几次后，可以看到更完整的阶段走势。";

  const summaryItems = [
    ["当前价", `${formatPrice(summary.current)} ${quote?.currency ?? ""}`],
    [`${rangeLabel}涨跌`, formatDeltaPct(summary.rangePct), tone],
    ["区间最高", formatPrice(summary.high)],
    ["区间最低", formatPrice(summary.low)],
    ["快照数", `${history.length || (quote ? 1 : 0)} 个`],
    ["时间跨度", summary.duration],
  ];

  els.stockTrendPanel.innerHTML = `
    <article class="trend-main-card">
      <div class="trend-title-row">
        <div>
          <h4>${stockName}</h4>
          <span>${quoteLabel} · ${AI_SEGMENTS[entry.segment]} · ${AI_LEVELS[entry.level]}</span>
        </div>
        <strong class="trend-range-change ${tone}">${formatDeltaPct(summary.rangePct)}</strong>
      </div>
      ${renderKlineBlock(entry, quote)}
      <div class="trend-body">
        <div class="trend-chart-card">
          ${renderTrendSvg(history, quote)}
          <p class="trend-note">${note}</p>
        </div>
        <div class="trend-summary-grid">
          ${summaryItems
            .map(([label, value, valueTone]) => `<div><span>${label}</span><strong class="${valueTone ?? ""}">${value}</strong></div>`)
            .join("")}
        </div>
      </div>
    </article>
  `;

  els.trendSnapshotRows.innerHTML = renderTrendSnapshotRows(history, quote);
}

function renderKlineBlock(entry, quote) {
  const record = state.aiKlines[entry.code];
  const loading = state.aiKlineLoading[entry.code];
  const error = state.aiKlineErrors[entry.code];
  const currency = quote?.currency ?? MARKET_CONFIG[entry.market]?.currency ?? "";

  if (record?.candles?.length) {
    const summary = getKlineSummary(record.candles);
    const summaryItems = [
      ["30日涨跌", formatDeltaPct(summary.periodPct), toneClass(summary.periodPct)],
      ["最新收盘", `${formatPrice(summary.lastClose)} ${currency}`],
      ["30日最高", formatPrice(summary.high)],
      ["30日最低", formatPrice(summary.low)],
      ["阳线/阴线", `${summary.upDays}/${summary.downDays}`],
      ["均量", formatVolume(summary.avgVolume)],
    ];

    return `
      <section class="kline-card" aria-label="30天K线">
        <div class="kline-header">
          <div>
            <strong>30天日K线</strong>
            <span>开盘、收盘、最高、最低与成交量</span>
          </div>
          <span class="kline-source">${record.requestCode} · ${formatDateLabel(summary.lastDate)}</span>
        </div>
        <div class="kline-body">
          <div class="kline-chart-wrap">${renderKlineSvg(record.candles)}</div>
          <div class="kline-summary-grid">
            ${summaryItems
              .map(([label, value, valueTone]) => `<div><span>${label}</span><strong class="${valueTone ?? ""}">${value}</strong></div>`)
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  const message = error
    ? `${error}。可以稍后刷新重试。`
    : loading
      ? "正在读取30天日K线..."
      : "等待行情接口返回30天日K线。";

  return `
    <section class="kline-card" aria-label="30天K线">
      <div class="kline-header">
        <div>
          <strong>30天日K线</strong>
          <span>开盘、收盘、最高、最低与成交量</span>
        </div>
        <span class="kline-source">${loading ? "加载中" : "待更新"}</span>
      </div>
      <div class="kline-empty">${message}</div>
    </section>
  `;
}

function renderKlineSvg(candles) {
  const width = 920;
  const height = 360;
  const pricePlot = { left: 56, right: width - 22, top: 22, bottom: 238 };
  const volumePlot = { left: 56, right: width - 22, top: 272, bottom: 334 };
  const highs = candles.map((item) => item.high).filter(Number.isFinite);
  const lows = candles.map((item) => item.low).filter(Number.isFinite);
  const volumes = candles.map((item) => item.volume).filter(Number.isFinite);
  const high = Math.max(...highs);
  const low = Math.min(...lows);
  const maxVolume = Math.max(...volumes, 1);
  const pad = Math.max((high - low) * 0.12, Math.abs(high) * 0.002, 0.01);
  const min = low - pad;
  const max = high + pad;
  const xStep = (pricePlot.right - pricePlot.left) / Math.max(candles.length, 1);
  const candleWidth = Math.max(6, Math.min(18, xStep * 0.56));
  const x = (index) => pricePlot.left + index * xStep + xStep / 2;
  const y = (value) => pricePlot.bottom - ((value - min) / (max - min || 1)) * (pricePlot.bottom - pricePlot.top);
  const volumeY = (value) => volumePlot.bottom - (value / maxVolume) * (volumePlot.bottom - volumePlot.top);

  const candleNodes = candles
    .map((item, index) => {
      const center = x(index);
      const openY = y(item.open);
      const closeY = y(item.close);
      const highY = y(item.high);
      const lowY = y(item.low);
      const bodyY = Math.min(openY, closeY);
      const bodyHeight = Math.max(Math.abs(closeY - openY), 2);
      const className = item.close >= item.open ? "up" : "down";
      const volY = volumeY(item.volume);
      const volHeight = Math.max(volumePlot.bottom - volY, 1);
      return `
        <g class="kline-candle ${className}">
          <line x1="${center.toFixed(1)}" y1="${highY.toFixed(1)}" x2="${center.toFixed(1)}" y2="${lowY.toFixed(1)}"></line>
          <rect x="${(center - candleWidth / 2).toFixed(1)}" y="${bodyY.toFixed(1)}" width="${candleWidth.toFixed(1)}" height="${bodyHeight.toFixed(1)}"></rect>
          <rect class="kline-volume-bar" x="${(center - candleWidth / 2).toFixed(1)}" y="${volY.toFixed(1)}" width="${candleWidth.toFixed(1)}" height="${volHeight.toFixed(1)}"></rect>
        </g>
      `;
    })
    .join("");

  const first = candles[0];
  const last = candles[candles.length - 1];
  const closeLinePoints = candles.map((item, index) => `${x(index).toFixed(1)},${y(item.close).toFixed(1)}`).join(" ");
  const closeLineClass = last.close >= first.close ? "up" : "down";

  return `
    <svg class="kline-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="30天日K线图">
      <line class="kline-grid-line" x1="${pricePlot.left}" y1="${pricePlot.top}" x2="${pricePlot.right}" y2="${pricePlot.top}"></line>
      <line class="kline-grid-line" x1="${pricePlot.left}" y1="${(pricePlot.top + pricePlot.bottom) / 2}" x2="${pricePlot.right}" y2="${(pricePlot.top + pricePlot.bottom) / 2}"></line>
      <line class="kline-grid-line" x1="${pricePlot.left}" y1="${pricePlot.bottom}" x2="${pricePlot.right}" y2="${pricePlot.bottom}"></line>
      <line class="kline-grid-line" x1="${volumePlot.left}" y1="${volumePlot.top}" x2="${volumePlot.right}" y2="${volumePlot.top}"></line>
      <line class="kline-grid-line" x1="${volumePlot.left}" y1="${volumePlot.bottom}" x2="${volumePlot.right}" y2="${volumePlot.bottom}"></line>
      <text class="kline-axis-label" x="10" y="${pricePlot.top + 4}">${formatPrice(high)}</text>
      <text class="kline-axis-label" x="10" y="${pricePlot.bottom + 4}">${formatPrice(low)}</text>
      <text class="kline-axis-label" x="10" y="${volumePlot.top + 4}">量</text>
      ${candleNodes}
      <polyline class="kline-close-line halo" points="${closeLinePoints}"></polyline>
      <polyline class="kline-close-line ${closeLineClass}" points="${closeLinePoints}"></polyline>
      <circle class="kline-close-dot start" cx="${x(0).toFixed(1)}" cy="${y(first.close).toFixed(1)}" r="4"></circle>
      <circle class="kline-close-dot end ${closeLineClass}" cx="${x(candles.length - 1).toFixed(1)}" cy="${y(last.close).toFixed(1)}" r="5"></circle>
      <text class="kline-time-label" x="${pricePlot.left}" y="${height - 10}">${formatDateLabel(first.date)}</text>
      <text class="kline-time-label end" x="${pricePlot.right}" y="${height - 10}">${formatDateLabel(last.date)}</text>
    </svg>
  `;
}

function getKlineSummary(candles) {
  const first = candles[0];
  const last = candles[candles.length - 1];
  const high = Math.max(...candles.map((item) => item.high).filter(Number.isFinite));
  const low = Math.min(...candles.map((item) => item.low).filter(Number.isFinite));
  const avgVolume = average(candles.map((item) => item.volume).filter(Number.isFinite));
  const upDays = candles.filter((item) => item.close >= item.open).length;

  return {
    periodPct: pctChange(last?.close, first?.close),
    lastClose: last?.close,
    lastDate: last?.date,
    high,
    low,
    avgVolume,
    upDays,
    downDays: candles.length - upDays,
  };
}

function getKlinePeriodPct(code) {
  const candles = state.aiKlines[code]?.candles ?? [];
  if (candles.length < 2) return Number.NaN;
  const first = candles[0];
  const last = candles[candles.length - 1];
  return pctChange(last?.close, first?.close);
}

function ensureKlineData(code, quote) {
  const existing = state.aiKlines[code];
  const freshMs = 30 * 60 * 1000;
  if (existing && Date.now() - existing.loadedAt < freshMs) return;
  if (state.aiKlineLoading[code]) return;
  if (state.aiKlineRetryAt[code] && Date.now() < state.aiKlineRetryAt[code]) return;

  state.aiKlineLoading[code] = true;
  delete state.aiKlineErrors[code];

  loadKlineCandles(code, quote)
    .then((record) => {
      state.aiKlines[code] = { ...record, loadedAt: Date.now() };
      delete state.aiKlineRetryAt[code];
    })
    .catch((error) => {
      state.aiKlineErrors[code] = error?.message || "30天K线读取失败";
      state.aiKlineRetryAt[code] = Date.now() + 10 * 60 * 1000;
    })
    .finally(() => {
      state.aiKlineLoading[code] = false;
      renderStyleRotationBoard();
      if (isAiMonitored(code)) {
        renderAiMetrics();
        renderMonitorFocus();
        renderMonitorCycleRows();
      }
      if (state.selectedTrendCode === code || els.stockTrendPanel?.dataset.trendCode === code) {
        renderStockTrend(getFilteredAiUniverse());
      }
    });
}

function loadKlineCandles(code, quote) {
  return loadKlineCandlesForCount(code, quote, 30);
}

function loadKlineCandlesForCount(code, quote, count = 30) {
  if (GLOBAL_QUOTE_SYMBOLS[code]) {
    return loadGlobalKlineCandles(code, count);
  }

  const requestCode = getKlineRequestCode(code, quote);
  const size = Math.max(30, Math.min(260, Number(count) || 30));
  const primary = `https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?_var={var}&param=${encodeURIComponent(`${requestCode},day,,,${size},qfq`)}`;
  const fallback = `https://web.ifzq.gtimg.cn/appstock/app/kline/kline?_var={var}&param=${encodeURIComponent(`${requestCode},day,,,${size}`)}`;

  return loadKlinePayload(primary)
    .then((payload) => {
      const candles = parseKlinePayload(payload, requestCode);
      if (candles.length >= 10) return { candles, requestCode, source: "腾讯日线" };
      return loadKlinePayload(fallback).then((fallbackPayload) => {
        const fallbackCandles = parseKlinePayload(fallbackPayload, requestCode);
        if (fallbackCandles.length >= 10) return { candles: fallbackCandles, requestCode, source: "腾讯日线" };
        throw new Error("历史K线数据不足");
      });
    })
    .then((record) => ({ ...record, candles: record.candles.slice(-size) }));
}

function loadGlobalKlineCandles(code, count = 30) {
  const config = GLOBAL_QUOTE_SYMBOLS[code];
  const size = Math.max(30, Math.min(260, Number(count) || 30));
  const range = size > 120 ? "1y" : size > 45 ? "3mo" : "1mo";
  return fetchYahooChart(config.yahoo, range, "1d").then((result) => {
    const candles = parseYahooCandles(result);
    if (candles.length >= 10) {
      return {
        candles: candles.slice(-size),
        requestCode: config.displayCode || config.yahoo,
        source: "Yahoo日线",
      };
    }
    throw new Error("全球30天K线数据不足");
  });
}

function loadKlinePayload(urlTemplate) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const variableName = `kline_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    script.charset = "utf-8";
    script.src = `${urlTemplate.replace("{var}", variableName)}&r=${Date.now()}`;

    const timer = window.setTimeout(() => {
      cleanupKlineScript(script, variableName);
      reject(new Error("30天K线请求超时"));
    }, 9000);

    script.onload = () => {
      window.clearTimeout(timer);
      const payload = window[variableName];
      cleanupKlineScript(script, variableName);
      if (!payload || payload.code !== 0) {
        reject(new Error(payload?.msg || "30天K线读取失败"));
        return;
      }
      resolve(payload);
    };

    script.onerror = () => {
      window.clearTimeout(timer);
      cleanupKlineScript(script, variableName);
      reject(new Error("30天K线接口不可用"));
    };

    document.body.appendChild(script);
  });
}

function cleanupKlineScript(script, variableName) {
  if (script.parentNode) {
    script.parentNode.removeChild(script);
  }
  try {
    delete window[variableName];
  } catch {
    window[variableName] = undefined;
  }
}

function parseKlinePayload(payload, requestCode) {
  const data = payload?.data?.[requestCode];
  const rows = data?.qfqday ?? data?.day ?? data?.hfqday ?? [];
  return rows
    .map((row) => ({
      date: row[0],
      open: toNumber(row[1]),
      close: toNumber(row[2]),
      high: toNumber(row[3]),
      low: toNumber(row[4]),
      volume: toNumber(row[5]),
    }))
    .filter((item) =>
      item.date &&
      [item.open, item.close, item.high, item.low, item.volume].every(Number.isFinite) &&
      item.high >= item.low,
    )
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function parseYahooCandles(result) {
  const timestamps = result?.timestamp ?? [];
  const quote = result?.indicators?.quote?.[0] ?? {};
  const gmtoffset = result?.meta?.gmtoffset ?? 0;

  return timestamps
    .map((timestamp, index) => ({
      timestamp,
      date: formatYahooDate(timestamp, gmtoffset),
      open: toNumber(quote.open?.[index]),
      close: toNumber(quote.close?.[index]),
      high: toNumber(quote.high?.[index]),
      low: toNumber(quote.low?.[index]),
      volume: toNumber(quote.volume?.[index]),
    }))
    .filter((item) =>
      item.date &&
      [item.open, item.close, item.high, item.low].every(Number.isFinite) &&
      item.high >= item.low,
    )
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function formatYahooDate(timestamp, gmtoffset = 0) {
  const date = new Date((Number(timestamp) + Number(gmtoffset || 0)) * 1000);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function getKlineRequestCode(code, quote) {
  if (/^us/i.test(code)) {
    const displayCode = quote?.displayCode;
    if (displayCode && /\.[A-Z]+$/i.test(displayCode)) return `us${displayCode}`;
    return `${code}.OQ`;
  }
  return code;
}

function resolveTrendEntry(entries) {
  const candidates = [
    state.selectedTrendCode,
    els.stockTrendPanel?.dataset.trendCode,
    state.selectedAiCode,
    ...(state.aiMonitors[state.activeMarket] ?? []),
    entries[0]?.code,
    getAiUniverse(state.activeMarket)[0]?.code,
  ];
  const code = candidates.find((item) => item && getAiEntry(item));
  return code ? getAiEntry(code) : null;
}

function filterTrendHistory(history, rangeMinutes) {
  const valid = history
    .filter((item) => Number.isFinite(item.ts) && Number.isFinite(item.price))
    .sort((a, b) => a.ts - b.ts);
  if (!valid.length || rangeMinutes === 0) return valid;

  const lastTs = valid[valid.length - 1].ts;
  const cutoff = lastTs - rangeMinutes * 60 * 1000;
  const windowed = valid.filter((item) => item.ts >= cutoff);
  return windowed.length ? windowed : valid.slice(-1);
}

function getTrendSummary(history, quote) {
  const fallback = quoteToSample(quote);
  const first = history[0] ?? fallback;
  const last = history[history.length - 1] ?? fallback;
  const prices = history.length ? history.map((item) => item.price).filter(Number.isFinite) : [];
  if (fallback && !prices.length) prices.push(fallback.price);

  return {
    current: last?.price ?? quote?.price,
    rangePct: history.length >= 2 ? pctChange(last.price, first.price) : Number.NaN,
    high: prices.length ? Math.max(...prices) : Number.NaN,
    low: prices.length ? Math.min(...prices) : Number.NaN,
    duration: history.length >= 2 ? formatDuration(last.ts - first.ts) : "等待累积",
  };
}

function renderTrendSvg(history, quote) {
  const fallback = quoteToSample(quote);
  const pointsSource = history.length ? history : fallback ? [fallback] : [];
  if (pointsSource.length < 2) {
    if (pointsSource.length) {
      const width = 720;
      const height = 260;
      const plot = { left: 48, right: width - 22, top: 22, bottom: height - 42 };
      const y = (plot.top + plot.bottom) / 2;
      return `
        <svg class="trend-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="阶段行情水平折线">
          <line class="trend-grid-line" x1="${plot.left}" y1="${plot.top}" x2="${plot.right}" y2="${plot.top}"></line>
          <line class="trend-grid-line" x1="${plot.left}" y1="${y}" x2="${plot.right}" y2="${y}"></line>
          <line class="trend-grid-line" x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}"></line>
          <text class="trend-axis-label" x="8" y="${y + 4}">${formatPrice(pointsSource[0].price)}</text>
          <line class="trend-line-halo" x1="${plot.left}" y1="${y}" x2="${plot.right}" y2="${y}"></line>
          <line class="trend-line flat" x1="${plot.left}" y1="${y}" x2="${plot.right}" y2="${y}"></line>
          <circle class="trend-dot end flat" cx="${plot.right}" cy="${y}" r="5"></circle>
          <text class="trend-time-label" x="${plot.left}" y="${height - 14}">${formatSampleTime(pointsSource[0].ts)}</text>
          <text class="trend-time-label end" x="${plot.right}" y="${height - 14}">等待下一次刷新</text>
        </svg>
      `;
    }
    return `
      <div class="trend-empty">
        <strong>${pointsSource.length ? formatPrice(pointsSource[0].price) : "--"}</strong>
        <span>等待更多刷新形成折线</span>
      </div>
    `;
  }

  const width = 720;
  const height = 260;
  const plot = { left: 48, right: width - 22, top: 22, bottom: height - 42 };
  const prices = pointsSource.map((item) => item.price).filter(Number.isFinite);
  const minValue = Math.min(...prices);
  const maxValue = Math.max(...prices);
  const pad = Math.max((maxValue - minValue) * 0.14, Math.abs(pointsSource[pointsSource.length - 1].price) * 0.001, 0.01);
  const min = minValue - pad;
  const max = maxValue + pad;
  const x = (index) => plot.left + (index / Math.max(pointsSource.length - 1, 1)) * (plot.right - plot.left);
  const y = (value) => plot.bottom - ((value - min) / (max - min || 1)) * (plot.bottom - plot.top);
  const linePoints = pointsSource.map((item, index) => `${x(index).toFixed(1)},${y(item.price).toFixed(1)}`).join(" ");
  const lineClass = pointsSource[pointsSource.length - 1].price >= pointsSource[0].price ? "up" : "down";
  const firstPoint = pointsSource[0];
  const lastPoint = pointsSource[pointsSource.length - 1];

  return `
    <svg class="trend-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="阶段行情折线图">
      <line class="trend-grid-line" x1="${plot.left}" y1="${plot.top}" x2="${plot.right}" y2="${plot.top}"></line>
      <line class="trend-grid-line" x1="${plot.left}" y1="${(plot.top + plot.bottom) / 2}" x2="${plot.right}" y2="${(plot.top + plot.bottom) / 2}"></line>
      <line class="trend-grid-line" x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}"></line>
      <text class="trend-axis-label" x="8" y="${plot.top + 4}">${formatPrice(maxValue)}</text>
      <text class="trend-axis-label" x="8" y="${plot.bottom + 4}">${formatPrice(minValue)}</text>
      <polyline class="trend-line-halo" points="${linePoints}"></polyline>
      <polyline class="trend-line ${lineClass}" points="${linePoints}"></polyline>
      <circle class="trend-dot start" cx="${x(0).toFixed(1)}" cy="${y(firstPoint.price).toFixed(1)}" r="4"></circle>
      <circle class="trend-dot end ${lineClass}" cx="${x(pointsSource.length - 1).toFixed(1)}" cy="${y(lastPoint.price).toFixed(1)}" r="5"></circle>
      <text class="trend-time-label" x="${plot.left}" y="${height - 14}">${formatSampleTime(firstPoint.ts)}</text>
      <text class="trend-time-label end" x="${plot.right}" y="${height - 14}">${formatSampleTime(lastPoint.ts)}</text>
    </svg>
  `;
}

function renderTrendSnapshotRows(history, quote) {
  const fallback = quoteToSample(quote);
  const source = history.length ? history : fallback ? [fallback] : [];
  if (!source.length) return `<tr><td colspan="5">等待行情刷新后记录快照。</td></tr>`;

  return source
    .slice(-12)
    .reverse()
    .map((sample, index) => {
      const originalIndex = source.length - 1 - index;
      const previous = source[originalIndex - 1];
      const delta = previous ? pctChange(sample.price, previous.price) : Number.NaN;
      return `
        <tr>
          <td>${formatSampleTime(sample.ts)}</td>
          <td>${formatPrice(sample.price)}</td>
          <td class="${toneClass(sample.changePct)}">${formatPct(sample.changePct)}</td>
          <td class="${toneClass(delta)}">${formatDeltaPct(delta)}</td>
          <td>${formatMoney(sample.amount, quote?.currency)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderAiAnalysis(entries) {
  const fallback = entries[0] ?? getAiUniverse(state.activeMarket)[0];
  const entry = getAiEntry(state.selectedAiCode) ?? fallback;
  if (!entry) {
    els.aiAnalysisDetail.innerHTML = `<div class="analysis-card">当前市场没有专题股票池。</div>`;
    return;
  }

  const quote = state.quotes.get(entry.code);
  const tone = toneClass(quote?.changePct);
  const marketAvg = average(
    getAiUniverse(state.activeMarket)
      .map((item) => state.quotes.get(item.code)?.changePct)
      .filter(Number.isFinite),
  );
  const segmentAvg = average(
    getAiUniverse(state.activeMarket)
      .filter((item) => item.segment === entry.segment)
      .map((item) => state.quotes.get(item.code)?.changePct)
      .filter(Number.isFinite),
  );
  const cycleStats = getCycleStats(entry.code, quote);
  const relative = describeRelativeMove(quote?.changePct, marketAvg, segmentAvg, entry.segment);

  els.aiAnalysisDetail.innerHTML = `
    <article class="analysis-card">
      <h5>${quote?.name ?? entry.code}</h5>
      <div class="tag-stack">
        <span class="segment-pill">${AI_SEGMENTS[entry.segment]}</span>
        <span class="level-pill ${entry.level}">${AI_LEVELS[entry.level]}</span>
      </div>
      <div class="analysis-grid">
        <div><span>现价</span><strong>${formatPrice(quote?.price)} ${quote?.currency ?? ""}</strong></div>
        <div><span>涨跌幅</span><strong class="${tone}">${formatPct(quote?.changePct)}</strong></div>
        <div><span>成交额</span><strong>${formatMoney(quote?.amount, quote?.currency)}</strong></div>
        <div><span>价格区间</span><strong>${formatPrice(quote?.low)} - ${formatPrice(quote?.high)}</strong></div>
        <div><span>较上次刷新</span><strong class="${toneClass(cycleStats.lastPct)}">${formatDeltaPct(cycleStats.lastPct)}</strong></div>
        <div><span>${state.cycleWindowMinutes}分钟周期</span><strong class="${toneClass(cycleStats.cyclePct)}">${formatDeltaPct(cycleStats.cyclePct)}</strong></div>
      </div>
      <p class="analysis-note"><strong>观察重点：</strong>${entry.thesis}</p>
      <p class="analysis-note"><strong>主要风险：</strong>${entry.risk}</p>
      <p class="analysis-note"><strong>相对表现：</strong>${relative}</p>
    </article>
  `;
}

function renderAiAlerts() {
  const threshold = state.alertThreshold;
  const monitoredCodes = state.aiMonitors[state.activeMarket] ?? [];
  const monitoredEntries = monitoredCodes.map((code) => getAiEntry(code)).filter(Boolean);
  const entries = monitoredEntries.length ? monitoredEntries : getAiUniverse(state.activeMarket);
  const movers = entries
    .map((entry) => ({ entry, quote: state.quotes.get(entry.code) }))
    .filter((item) => item.quote && Number.isFinite(item.quote.changePct))
    .sort((a, b) => Math.abs(b.quote.changePct) - Math.abs(a.quote.changePct));
  const alerts = movers.filter((item) => Math.abs(item.quote.changePct) >= threshold);
  const display = (alerts.length ? alerts : movers.slice(0, 3)).slice(0, 5);

  els.aiAlerts.innerHTML =
    display
      .map(({ entry, quote }) => {
        const alert = getAlertState(quote);
        const tone = toneClass(quote.changePct);
        const label = Math.abs(quote.changePct) >= threshold ? "触发阈值" : "未触发，显示最大波动";
        return `
          <div class="alert-item">
            <div>
              <strong>${quote.name}</strong>
              <span class="segment-note">${AI_SEGMENTS[entry.segment]} · ${label}</span>
            </div>
            <span class="alert-pill ${alert.className} ${tone}">${formatPct(quote.changePct)}</span>
          </div>
        `;
      })
      .join("") || `<div class="alert-item"><span>等待行情数据</span><span class="alert-pill calm">--</span></div>`;
}

function renderSegmentHeat() {
  const rows = Object.entries(AI_SEGMENTS)
    .filter(([id]) => id !== "all")
    .map(([segment, label]) => {
      const quotes = getAiUniverse(state.activeMarket)
        .filter((entry) => entry.segment === segment)
        .map((entry) => state.quotes.get(entry.code))
        .filter(Boolean);
      return {
        label,
        count: quotes.length,
        avg: average(quotes.map((quote) => quote.changePct).filter(Number.isFinite)),
      };
    })
    .filter((row) => row.count)
    .sort((a, b) => (b.avg || 0) - (a.avg || 0));

  els.segmentHeat.innerHTML =
    rows
      .map((row) => {
        const tone = toneClass(row.avg);
        return `
          <div class="segment-row">
            <div>
              <strong>${row.label}</strong>
              <span class="segment-note">${row.count} 只可读行情</span>
            </div>
            <span class="${tone}">${formatPct(row.avg)}</span>
          </div>
        `;
      })
      .join("") || `<div class="segment-row"><span>等待行情数据</span><span>--</span></div>`;
}

function handleAiFilterClick(event) {
  const segmentButton = event.target.closest("[data-ai-segment]");
  const levelButton = event.target.closest("[data-ai-level]");
  if (segmentButton) {
    state.aiFilters.segment = segmentButton.dataset.aiSegment;
    renderAiFilters();
    renderAiDashboard();
  }
  if (levelButton) {
    state.aiFilters.level = levelButton.dataset.aiLevel;
    renderAiFilters();
    renderAiDashboard();
  }
}

function handleAiSearch(event) {
  state.aiFilters.query = event.target.value.trim().toLowerCase();
  renderAiDashboard();
}

function handleMonitorOnly(event) {
  state.aiFilters.monitoredOnly = event.target.checked;
  renderAiDashboard();
}

function handleAlertThreshold(event) {
  const value = toNumber(event.target.value);
  if (!Number.isFinite(value) || value <= 0) return;
  state.alertThreshold = value;
  localStorage.setItem(STORAGE_KEYS.aiAlertThreshold, String(value));
  renderAiDashboard();
}

function handleAutoRefreshChange(event) {
  state.autoRefreshSeconds = Number(event.target.value) || 0;
  localStorage.setItem(STORAGE_KEYS.aiAutoRefresh, String(state.autoRefreshSeconds));
  setupAutoRefresh();
}

function handleCycleWindowChange(event) {
  state.cycleWindowMinutes = Number(event.target.value) || 5;
  localStorage.setItem(STORAGE_KEYS.aiCycleWindow, String(state.cycleWindowMinutes));
  renderAiDashboard();
}

function handleTrendRangeChange(event) {
  state.trendRangeMinutes = Number(event.target.value) || 0;
  localStorage.setItem(STORAGE_KEYS.aiTrendRange, String(state.trendRangeMinutes));
  renderAiDashboard();
  refreshIcons();
}

function handleResetCycleHistory() {
  resetAiHistory(state.activeMarket);
  recordAiSnapshots();
  renderAiDashboard();
}

function handleAiRowAction(event) {
  const toggle = event.target.closest("[data-ai-toggle]");
  const trend = event.target.closest("[data-ai-trend]");
  const select = event.target.closest("[data-ai-select]");

  if (toggle) {
    toggleAiMonitor(toggle.dataset.aiToggle);
    renderAiDashboard();
    refreshIcons();
    return;
  }

  if (trend) {
    selectAiStock(trend.dataset.aiTrend, true);
    return;
  }

  if (select) {
    selectAiStock(select.dataset.aiSelect, false);
  }
}

function selectAiStock(code, syncTrend) {
  if (!getAiEntry(code)) return;

  state.selectedAiCode = code;
  state.selectedQuoteCode = code;
  if (syncTrend) state.selectedTrendCode = code;

  const quote = state.quotes.get(state.selectedQuoteCode);
  updateSelectedStats(quote);
  drawQuoteChart(quote);
  renderAiDashboard();
  refreshIcons();
}

function getMonitoredAiEntries() {
  const codes = state.aiMonitors[state.activeMarket] ?? [];
  return codes.map((code) => getAiEntry(code)).filter(Boolean);
}

function sortMonitorEntries(entries) {
  return [...entries].sort((a, b) => {
    const quoteA = state.quotes.get(a.code);
    const quoteB = state.quotes.get(b.code);
    const statsA = getCycleStats(a.code, quoteA);
    const statsB = getCycleStats(b.code, quoteB);
    const scoreA = monitorScore(quoteA, statsA);
    const scoreB = monitorScore(quoteB, statsB);
    return scoreB - scoreA;
  });
}

function monitorScore(quote, stats) {
  const day = Math.abs(quote?.changePct ?? 0);
  const cycle = Math.abs(stats.cyclePct ?? 0);
  const last = Math.abs(stats.lastPct ?? 0);
  const alertBoost = day >= state.alertThreshold ? 100 : 0;
  return alertBoost + day * 4 + cycle * 3 + last * 2;
}

function recordAiSnapshots() {
  const market = state.activeMarket;
  const history = ensureAiHistory(market);
  const now = Date.now();

  getAiUniverse(market).forEach((entry) => {
    const quote = state.quotes.get(entry.code);
    if (!quote || !Number.isFinite(quote.price)) return;

    const list = history.codes[entry.code] ?? [];
    const sample = {
      ts: now,
      price: quote.price,
      changePct: quote.changePct,
      amount: quote.amount,
      quoteTime: quote.time instanceof Date && !Number.isNaN(quote.time.getTime()) ? quote.time.getTime() : null,
    };
    const last = list[list.length - 1];
    if (last && now - last.ts < 15000 && last.price === sample.price && last.amount === sample.amount) {
      return;
    }

    list.push(sample);
    history.codes[entry.code] = list.filter((item) => now - item.ts <= 24 * 60 * 60 * 1000).slice(-240);
  });

  saveAiHistory(market);
}

function getCycleStats(code, quote) {
  const history = getAiHistoryList(code);
  const current = history[history.length - 1] ?? quoteToSample(quote);
  if (!current || !Number.isFinite(current.price)) {
    return { lastPct: Number.NaN, cyclePct: Number.NaN, sessionPct: Number.NaN, note: "等待刷新" };
  }
  if (history.length < 2) {
    return { lastPct: Number.NaN, cyclePct: Number.NaN, sessionPct: Number.NaN, note: "等待下次刷新" };
  }

  const previous = history.length >= 2 ? history[history.length - 2] : null;
  const first = history[0] ?? current;
  const targetTs = current.ts - state.cycleWindowMinutes * 60 * 1000;
  const cycleBase = findCycleBase(history, targetTs) ?? first;
  const cycleAgeMs = current.ts - cycleBase.ts;
  const ready = cycleAgeMs >= state.cycleWindowMinutes * 60 * 1000 * 0.7;

  return {
    lastPct: previous ? pctChange(current.price, previous.price) : Number.NaN,
    cyclePct: cycleBase && cycleBase !== current ? pctChange(current.price, cycleBase.price) : Number.NaN,
    sessionPct: first && first !== current ? pctChange(current.price, first.price) : Number.NaN,
    note: ready ? `覆盖${formatDuration(cycleAgeMs)}` : `积累${formatDuration(cycleAgeMs)}`,
  };
}

function findCycleBase(history, targetTs) {
  if (!history.length) return null;
  let base = history[0];
  history.forEach((sample) => {
    if (sample.ts <= targetTs) {
      base = sample;
    }
  });
  return base;
}

function quoteToSample(quote) {
  if (!quote || !Number.isFinite(quote.price)) return null;
  return { ts: Date.now(), price: quote.price, changePct: quote.changePct, amount: quote.amount };
}

function pctChange(current, base) {
  if (!Number.isFinite(current) || !Number.isFinite(base) || base === 0) return Number.NaN;
  return ((current - base) / base) * 100;
}

function renderSparkline(code) {
  const history = getAiHistoryList(code).slice(-12);
  if (!history.length) return `<div class="sparkline" aria-label="等待周期数据"></div>`;
  const prices = history.map((item) => item.price).filter(Number.isFinite);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || Math.max(max * 0.002, 1);
  const bars = history
    .map((item, index) => {
      const prev = history[index - 1];
      const height = 6 + ((item.price - min) / range) * 22;
      const direction = !prev ? "" : item.price >= prev.price ? "up" : "down";
      return `<span class="sparkline-bar ${direction}" style="height:${height.toFixed(0)}px"></span>`;
    })
    .join("");
  return `<div class="sparkline" aria-label="周期价格趋势">${bars}</div>`;
}

function getAiHistoryList(code) {
  return state.aiHistory[state.activeMarket]?.codes?.[code] ?? [];
}

function ensureAiHistory(market) {
  const today = todayKey();
  if (!state.aiHistory[market] || state.aiHistory[market].dateKey !== today) {
    state.aiHistory[market] = { dateKey: today, codes: {} };
  }
  return state.aiHistory[market];
}

function resetAiHistory(market) {
  state.aiHistory[market] = { dateKey: todayKey(), codes: {} };
  saveAiHistory(market);
}

function getAiUniverse(market = state.activeMarket) {
  return AI_UNIVERSE.filter((entry) => entry.market === market);
}

function getFilteredAiUniverse() {
  const query = state.aiFilters.query;
  return getAiUniverse(state.activeMarket).filter((entry) => {
    const quote = state.quotes.get(entry.code);
    const haystack = `${entry.code} ${quote?.name ?? ""} ${AI_SEGMENTS[entry.segment]} ${AI_LEVELS[entry.level]} ${entry.thesis}`.toLowerCase();
    if (state.aiFilters.segment !== "all" && entry.segment !== state.aiFilters.segment) return false;
    if (state.aiFilters.level !== "all" && entry.level !== state.aiFilters.level) return false;
    if (state.aiFilters.monitoredOnly && !isAiMonitored(entry.code)) return false;
    if (query && !haystack.includes(query)) return false;
    return true;
  });
}

function getAiEntry(code) {
  return AI_UNIVERSE.find((entry) => entry.code === code && entry.market === state.activeMarket);
}

function isAiMonitored(code) {
  return (state.aiMonitors[state.activeMarket] ?? []).includes(code);
}

function toggleAiMonitor(code) {
  const list = state.aiMonitors[state.activeMarket] ?? [];
  state.aiMonitors[state.activeMarket] = list.includes(code)
    ? list.filter((item) => item !== code)
    : unique([code, ...list]);
  saveAiMonitors(state.activeMarket);
}

function syncMonitorControls() {
  els.alertThresholdInput.value = state.alertThreshold;
  els.autoRefreshSelect.value = String(state.autoRefreshSeconds);
  els.cycleWindowSelect.value = String(state.cycleWindowMinutes);
  els.trendRangeSelect.value = String(state.trendRangeMinutes);
}

function setupAutoRefresh() {
  if (state.autoRefreshTimer) {
    window.clearInterval(state.autoRefreshTimer);
    state.autoRefreshTimer = null;
  }
  if (state.autoRefreshSeconds > 0) {
    state.autoRefreshTimer = window.setInterval(refreshQuotes, state.autoRefreshSeconds * 1000);
  }
}

function getAlertState(quote) {
  if (!quote || !Number.isFinite(quote.changePct)) {
    return { label: "无数据", className: "calm" };
  }
  const abs = Math.abs(quote.changePct);
  if (abs >= state.alertThreshold && quote.changePct > 0) return { label: "上行异动", className: "hot" };
  if (abs >= state.alertThreshold && quote.changePct < 0) return { label: "下行异动", className: "cold" };
  return { label: "平稳", className: "calm" };
}

function describeRelativeMove(pct, marketAvg, segmentAvg, segment) {
  if (!Number.isFinite(pct)) return "暂未读取到行情，先确认代码和接口是否可用。";
  const marketText = Number.isFinite(marketAvg) ? `专题均值${formatPct(marketAvg)}` : "专题均值暂无";
  const segmentText = Number.isFinite(segmentAvg) ? `${AI_SEGMENTS[segment] || "本环节"}均值${formatPct(segmentAvg)}` : "本环节均值暂无";
  if (Number.isFinite(segmentAvg) && pct - segmentAvg > 2) return `明显强于本环节，需核对是否有订单、业绩或政策催化；${marketText}，${segmentText}。`;
  if (Number.isFinite(segmentAvg) && segmentAvg - pct > 2) return `弱于本环节，需核对是否有基本面、估值或资金流出压力；${marketText}，${segmentText}。`;
  return `接近同环节表现，适合继续观察成交额、指数环境和公司公告；${marketText}，${segmentText}。`;
}

function levelRank(level) {
  return { core: 0, key: 1, support: 2 }[level] ?? 3;
}

function average(values) {
  const valid = values.filter(Number.isFinite);
  if (!valid.length) return Number.NaN;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function handleMarketClick(event) {
  const button = event.target.closest("[data-market]");
  if (!button || button.dataset.market === state.activeMarket) return;

  state.activeMarket = button.dataset.market;
  state.selectedQuoteCode = MARKET_CONFIG[state.activeMarket].indices[0] ?? "";
  state.selectedAiCode = null;
  state.selectedTrendCode = null;
  state.aiFilters.segment = "all";
  state.aiFilters.level = "all";
  state.aiFilters.query = "";
  state.aiFilters.monitoredOnly = false;
  els.aiSearchInput.value = "";
  els.monitorOnlyInput.checked = false;
  els.marketTabs.querySelectorAll(".market-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.market === state.activeMarket);
  });
  renderAiFilters();
  refreshQuotes();
}

function handleFundScopeClick(event) {
  const button = event.target.closest("[data-fund-scope]");
  if (!button || button.dataset.fundScope === state.activeFundScope) return;

  state.activeFundScope = button.dataset.fundScope;
  renderFundDashboard();
  refreshFundQuotes();
  refreshIcons();
}

function refreshActiveData() {
  if (state.activeAppModule === "fund") {
    refreshFundQuotes();
    return;
  }
  if (state.activeAppModule === "custom") {
    refreshCustomQuotes();
    return;
  }
  refreshQuotes();
}

async function refreshQuotes() {
  if (state.refreshing) {
    state.pendingStockRefresh = true;
    return;
  }
  state.pendingStockRefresh = false;
  state.refreshing = true;
  setLoading(true);

  const config = MARKET_CONFIG[state.activeMarket];
  const codes =
    state.activeMarket === "overview"
      ? unique(getOverviewMonitorEntries().map((entry) => entry.code))
      : unique([
          ...config.indices,
          ...state.watchlists[state.activeMarket],
          ...getAiUniverse(state.activeMarket).map((item) => item.code),
        ]);

  try {
    const quotes = await loadQuotes(codes);
    state.quotes = new Map(quotes.filter(Boolean).map((quote) => [quote.code, quote]));
    if (state.activeMarket !== "overview") recordAiSnapshots();
    renderIndexCards();
    renderAiDashboard();
    renderWatchRows();
    const selected = state.activeMarket === "overview"
      ? null
      : state.quotes.get(state.selectedQuoteCode) ?? state.quotes.get(config.indices[0]);
    state.selectedQuoteCode = selected?.code ?? config.indices[0];
    updateSelectedStats(selected);
    drawQuoteChart(selected);
    els.lastUpdate.textContent = `更新 ${new Date().toLocaleTimeString("zh-CN", { hour12: false })}`;
  } catch (error) {
    console.error(error);
    els.lastUpdate.textContent = "行情读取失败";
    renderIndexCards();
    renderAiDashboard();
    renderWatchRows();
    drawQuoteChart(null);
  } finally {
    state.refreshing = false;
    setLoading(false);
    refreshIcons();
    runPendingRefresh();
  }
}

async function refreshFundQuotes() {
  if (state.refreshing) {
    state.pendingFundRefresh = true;
    return;
  }
  state.pendingFundRefresh = false;
  state.refreshing = true;
  setLoading(true);

  const funds = getFilteredFunds();
  const codes = unique(funds.map(getFundQuoteCode));

  try {
    const quotes = await loadQuotes(codes);
    const next = new Map(state.fundQuotes);
    quotes.filter(Boolean).forEach((quote) => next.set(quote.code, quote));
    state.fundQuotes = next;
    renderFundDashboard();
    els.lastUpdate.textContent = `更新 ${new Date().toLocaleTimeString("zh-CN", { hour12: false })}`;
  } catch (error) {
    console.error(error);
    els.lastUpdate.textContent = "基金行情读取失败";
    renderFundDashboard();
  } finally {
    state.refreshing = false;
    setLoading(false);
    refreshIcons();
    runPendingRefresh();
  }
}

async function refreshCustomQuotes() {
  if (state.refreshing) {
    state.pendingCustomRefresh = true;
    return;
  }
  state.pendingCustomRefresh = false;
  state.refreshing = true;
  setLoading(true);

  const stockCodes = getCustomStockItems().map((item) => item.code);
  const fundRecords = getCustomFundItems().map(getCustomFundRecord);
  const fundCodes = fundRecords.map(getFundQuoteCode);
  const stockSet = new Set(stockCodes);
  const fundSet = new Set(fundCodes);

  try {
    const quotes = await loadQuotes(unique([...stockCodes, ...fundCodes]));
    const nextQuotes = new Map(state.quotes);
    const nextFundQuotes = new Map(state.fundQuotes);
    quotes.filter(Boolean).forEach((quote) => {
      if (stockSet.has(quote.code)) nextQuotes.set(quote.code, quote);
      if (fundSet.has(quote.code)) nextFundQuotes.set(quote.code, quote);
    });
    state.quotes = nextQuotes;
    state.fundQuotes = nextFundQuotes;
    renderCustomDashboard();
    els.lastUpdate.textContent = `更新 ${new Date().toLocaleTimeString("zh-CN", { hour12: false })}`;
  } catch (error) {
    console.error(error);
    els.lastUpdate.textContent = "自选行情读取失败";
    renderCustomDashboard();
  } finally {
    state.refreshing = false;
    setLoading(false);
    refreshIcons();
    runPendingRefresh();
  }
}

function runPendingRefresh() {
  if (state.refreshing) return;

  if (state.activeAppModule === "ai" && state.pendingStockRefresh) {
    state.pendingStockRefresh = false;
    refreshQuotes();
    return;
  }

  if (state.activeAppModule === "fund" && state.pendingFundRefresh) {
    state.pendingFundRefresh = false;
    refreshFundQuotes();
    return;
  }

  if (state.activeAppModule === "custom" && state.pendingCustomRefresh) {
    state.pendingCustomRefresh = false;
    refreshCustomQuotes();
  }
}

function setLoading(isLoading) {
  els.refreshBtn.disabled = isLoading;
  els.refreshBtn.classList.toggle("is-loading", isLoading);
  els.refreshBtn.setAttribute("aria-label", isLoading ? "刷新中" : "刷新行情");
  els.refreshBtn.setAttribute("title", isLoading ? "刷新中" : "刷新行情");
  els.indexCards.classList.toggle("loading", isLoading);
  els.overviewSurface?.classList.toggle("loading", isLoading);
  els.customSurface?.classList.toggle("loading", isLoading);
  els.customMetrics?.classList.toggle("loading", isLoading);
  els.aiMetrics.classList.toggle("loading", isLoading);
  els.monitorFocusCards.classList.toggle("loading", isLoading);
  els.stockTrendPanel.classList.toggle("loading", isLoading);
  const refreshLabel = els.refreshBtn.querySelector("span");
  if (refreshLabel) refreshLabel.textContent = isLoading ? "刷新中" : "刷新行情";
}

async function loadQuotes(codes) {
  const uniqueCodes = unique(codes);
  const globalCodes = uniqueCodes.filter((code) => GLOBAL_QUOTE_SYMBOLS[code]);
  const tencentCodes = uniqueCodes.filter((code) => !GLOBAL_QUOTE_SYMBOLS[code]);

  const [tencentQuotes, globalQuotes] = await Promise.all([
    loadTencentQuotes(tencentCodes),
    loadGlobalQuotes(globalCodes),
  ]);

  return [...tencentQuotes, ...globalQuotes];
}

function loadTencentQuotes(codes) {
  return new Promise((resolve, reject) => {
    if (!codes.length) {
      resolve([]);
      return;
    }

    const script = document.createElement("script");
    const callbackId = `quoteScript${Date.now()}`;
    script.id = callbackId;
    script.charset = "gbk";
    script.src = `https://qt.gtimg.cn/q=${codes.join(",")}&r=${Date.now()}`;

    const timer = window.setTimeout(() => {
      cleanupQuoteScript(script);
      reject(new Error("quote request timeout"));
    }, 9000);

    script.onload = () => {
      window.clearTimeout(timer);
      const quotes = codes.map((code) => parseQuote(code, window[`v_${code}`]));
      cleanupQuoteScript(script);
      resolve(quotes);
    };

    script.onerror = () => {
      window.clearTimeout(timer);
      cleanupQuoteScript(script);
      reject(new Error("quote request failed"));
    };

    document.body.appendChild(script);
  });
}

async function loadGlobalQuotes(codes) {
  if (!codes.length) return [];

  const results = await Promise.allSettled(
    codes.map(async (code) => {
      const config = GLOBAL_QUOTE_SYMBOLS[code];
      const result = await fetchYahooChart(config.yahoo, "1mo", "1d");
      return yahooResultToQuote(code, config, result);
    }),
  );

  return results
    .map((result) => {
      if (result.status === "fulfilled") return result.value;
      console.warn(result.reason);
      return null;
    })
    .filter(Boolean);
}

async function fetchYahooChart(symbol, range = "1mo", interval = "1d") {
  const params = new URLSearchParams({ symbol, range, interval });
  const response = await fetch(`/api/yahoo-chart?${params.toString()}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`全球行情读取失败：${symbol}`);
  }

  const payload = await response.json();
  const error = payload?.chart?.error;
  const result = payload?.chart?.result?.[0];
  if (error || !result) {
    throw new Error(error?.description || `全球行情无数据：${symbol}`);
  }
  return result;
}

function yahooResultToQuote(code, config, result) {
  const meta = result.meta ?? {};
  const candles = parseYahooCandles(result);
  const last = candles[candles.length - 1];
  const previous = candles[candles.length - 2];
  const price = firstFinite(meta.regularMarketPrice, last?.close);
  const previousClose = firstFinite(previous?.close, meta.chartPreviousClose);
  const change = Number.isFinite(price) && Number.isFinite(previousClose) ? price - previousClose : Number.NaN;
  const changePct = Number.isFinite(change) && previousClose ? (change / previousClose) * 100 : Number.NaN;
  const volume = firstFinite(last?.volume, 0);
  const amount = Number.isFinite(price) && Number.isFinite(volume) ? price * volume : Number.NaN;
  const quoteTime = Number.isFinite(meta.regularMarketTime)
    ? new Date(meta.regularMarketTime * 1000)
    : last?.timestamp ? new Date(last.timestamp * 1000) : null;

  return {
    code,
    displayCode: config.displayCode || meta.symbol || config.yahoo,
    name: config.name || meta.shortName || meta.longName || config.yahoo,
    market: "global",
    currency: meta.currency || MARKET_CONFIG.global.currency || "",
    price,
    previousClose,
    open: firstFinite(last?.open, price),
    high: firstFinite(meta.regularMarketDayHigh, last?.high, price),
    low: firstFinite(meta.regularMarketDayLow, last?.low, price),
    change,
    changePct,
    amount,
    time: quoteTime,
  };
}

function cleanupQuoteScript(script) {
  if (script.parentNode) {
    script.parentNode.removeChild(script);
  }
}

function parseQuote(requestCode, raw) {
  if (!raw || typeof raw !== "string" || raw.includes("pv_none_match")) return null;

  const fields = raw.split("~");
  const market = marketFromCode(requestCode);
  const amountRaw = toNumber(fields[37]);
  const amount = market === "cn" && Number.isFinite(amountRaw) ? amountRaw * 10000 : amountRaw;

  return {
    code: requestCode,
    displayCode: fields[2] || requestCode.replace(/^(sh|sz|hk|us)/i, ""),
    name: fields[1] || requestCode,
    market,
    currency: MARKET_CONFIG[market]?.currency ?? "",
    price: toNumber(fields[3]),
    previousClose: toNumber(fields[4]),
    open: toNumber(fields[5]),
    high: toNumber(fields[33]),
    low: toNumber(fields[34]),
    change: toNumber(fields[31]),
    changePct: toNumber(fields[32]),
    amount,
    time: parseQuoteTime(fields[30]),
  };
}

function renderIndexCards() {
  const config = MARKET_CONFIG[state.activeMarket];
  els.indexCards.innerHTML = config.indices
    .map((code) => {
      const quote = state.quotes.get(code);
      if (!quote) {
        return emptyQuoteCard(code);
      }

      const tone = toneClass(quote.changePct);
      const active = code === state.selectedQuoteCode ? " aria-pressed=\"true\"" : "";
      return `
        <article class="quote-card">
          <button type="button" data-select-code="${quote.code}"${active}>
            <div class="quote-name">
              <strong>${quote.name}</strong>
              <span class="quote-code">${quote.displayCode}</span>
            </div>
            <p class="quote-price ${tone}">${formatPrice(quote.price)}</p>
            <div class="quote-line">
              <span class="${tone}">${formatChange(quote.change, quote.changePct)}</span>
              <span>${formatTime(quote.time)}</span>
            </div>
          </button>
        </article>
      `;
    })
    .join("");

  els.indexCards.querySelectorAll("[data-select-code]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedQuoteCode = button.dataset.selectCode;
      const quote = state.quotes.get(state.selectedQuoteCode);
      updateSelectedStats(quote);
      drawQuoteChart(quote);
    });
  });
}

function emptyQuoteCard(code) {
  return `
    <article class="quote-card">
      <div class="quote-name">
        <strong>未读取</strong>
        <span class="quote-code">${code}</span>
      </div>
      <p class="quote-price neutral">--</p>
      <div class="quote-line">
        <span>等待刷新</span>
        <span>--</span>
      </div>
    </article>
  `;
}

function renderWatchRows() {
  const rows = state.watchlists[state.activeMarket].map((code) => {
    const quote = state.quotes.get(code);
    if (!quote) {
      return `
        <tr>
          <td>未读取</td>
          <td>${code}</td>
          <td>--</td>
          <td>--</td>
          <td>--</td>
          <td>${removeButton(code)}</td>
        </tr>
      `;
    }

    const tone = toneClass(quote.changePct);
    return `
      <tr>
        <td>${quote.name}</td>
        <td>${quote.displayCode}</td>
        <td class="${tone}">${formatPrice(quote.price)}</td>
        <td class="${tone}">${formatPct(quote.changePct)}</td>
        <td>${formatMoney(quote.amount, quote.currency)}</td>
        <td>${removeButton(code)}</td>
      </tr>
    `;
  });

  els.watchRows.innerHTML =
    rows.join("") ||
    `<tr><td colspan="6">当前市场没有关注标的</td></tr>`;
}

function removeButton(code) {
  return `
    <button class="remove-button" type="button" data-remove-code="${code}" title="移除" aria-label="移除${code}">
      <i data-lucide="trash-2"></i>
    </button>
  `;
}

function handleWatchAction(event) {
  const button = event.target.closest("[data-remove-code]");
  if (!button) return;

  const code = button.dataset.removeCode;
  state.watchlists[state.activeMarket] = state.watchlists[state.activeMarket].filter((item) => item !== code);
  saveWatchlist(state.activeMarket);
  refreshQuotes();
}

function handleAddCode(event) {
  event.preventDefault();
  const code = normalizeCode(els.codeInput.value, state.activeMarket);
  if (!code) return;

  const list = state.watchlists[state.activeMarket];
  if (!list.includes(code)) {
    list.unshift(code);
    state.watchlists[state.activeMarket] = list.slice(0, 12);
    saveWatchlist(state.activeMarket);
  }
  els.codeInput.value = "";
  refreshQuotes();
}

function updateSelectedStats(quote) {
  if (!quote) {
    els.statPrice.textContent = "--";
    els.statPct.textContent = "--";
    els.statAmount.textContent = "--";
    return;
  }

  const tone = toneClass(quote.changePct);
  els.statPrice.textContent = `${formatPrice(quote.price)} ${quote.currency}`;
  els.statPct.textContent = formatPct(quote.changePct);
  els.statAmount.textContent = formatMoney(quote.amount, quote.currency);
  els.statPct.className = tone;
}

function drawQuoteChart(quote) {
  const canvas = els.marketCanvas;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const width = rect.width;
  const height = rect.height;
  const styles = getComputedStyle(document.documentElement);
  const panelSoft = styles.getPropertyValue("--panel-soft").trim();
  const line = styles.getPropertyValue("--line").trim();
  const muted = styles.getPropertyValue("--muted").trim();
  const ink = styles.getPropertyValue("--ink").trim();
  const red = styles.getPropertyValue("--red").trim();
  const green = styles.getPropertyValue("--green").trim();
  const blue = styles.getPropertyValue("--blue").trim();

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = panelSoft;
  ctx.fillRect(0, 0, width, height);

  if (!quote || !Number.isFinite(quote.price)) {
    ctx.fillStyle = muted;
    ctx.font = "600 15px 'Microsoft YaHei', Arial";
    ctx.fillText("等待行情数据", 24, 44);
    return;
  }

  const values = [quote.low, quote.high, quote.open, quote.previousClose, quote.price].filter(Number.isFinite);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const pad = Math.max((maxValue - minValue) * 0.16, quote.price * 0.002, 0.01);
  const min = minValue - pad;
  const max = maxValue + pad;
  const plot = {
    left: 54,
    right: width - 24,
    top: 28,
    bottom: height - 42,
  };

  const y = (value) => plot.bottom - ((value - min) / (max - min || 1)) * (plot.bottom - plot.top);
  const x = (index, total) => plot.left + (index / Math.max(total - 1, 1)) * (plot.right - plot.left);

  ctx.strokeStyle = line;
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const yy = plot.top + (i / 3) * (plot.bottom - plot.top);
    ctx.beginPath();
    ctx.moveTo(plot.left, yy);
    ctx.lineTo(plot.right, yy);
    ctx.stroke();
  }

  const prevY = y(quote.previousClose);
  ctx.setLineDash([5, 5]);
  ctx.strokeStyle = muted;
  ctx.beginPath();
  ctx.moveTo(plot.left, prevY);
  ctx.lineTo(plot.right, prevY);
  ctx.stroke();
  ctx.setLineDash([]);

  const pseudoPath = buildPseudoPath(quote);
  ctx.strokeStyle = quote.changePct >= 0 ? red : green;
  ctx.lineWidth = 3;
  ctx.beginPath();
  pseudoPath.forEach((value, index) => {
    const px = x(index, pseudoPath.length);
    const py = y(value);
    if (index === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();

  const markers = [
    ["昨收", quote.previousClose, muted],
    ["开", quote.open, blue],
    ["高", quote.high, red],
    ["低", quote.low, green],
    ["现", quote.price, quote.changePct >= 0 ? red : green],
  ];

  markers.forEach(([label, value, color], index) => {
    if (!Number.isFinite(value)) return;
    const px = plot.left + 10 + index * Math.min(82, (plot.right - plot.left - 20) / 4);
    const py = y(value);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = ink;
    ctx.font = "700 12px 'Microsoft YaHei', Arial";
    ctx.fillText(`${label} ${formatPrice(value)}`, px - 22, Math.min(height - 16, py + 22));
  });

  ctx.fillStyle = muted;
  ctx.font = "600 12px 'Microsoft YaHei', Arial";
  ctx.fillText(`${quote.name} ${quote.displayCode}`, 18, 20);
  ctx.fillText(`最高 ${formatPrice(quote.high)} / 最低 ${formatPrice(quote.low)}`, 18, height - 14);
}

function buildPseudoPath(quote) {
  const values = [quote.previousClose, quote.open, quote.low, quote.high, quote.price].filter(Number.isFinite);
  if (values.length < 3) return values;

  if (quote.price >= quote.open) {
    return [quote.previousClose, quote.open, quote.low, midpoint(quote.open, quote.high), quote.high, midpoint(quote.high, quote.price), quote.price];
  }
  return [quote.previousClose, quote.open, quote.high, midpoint(quote.open, quote.low), quote.low, midpoint(quote.low, quote.price), quote.price];
}

function midpoint(a, b) {
  return (a + b) / 2;
}

function updateCalculator() {
  const account = toNumber(els.accountInput.value);
  const riskPct = toNumber(els.riskInput.value);
  const entry = toNumber(els.entryInput.value);
  const stop = toNumber(els.stopInput.value);

  if (![account, riskPct, entry, stop].every(Number.isFinite) || account <= 0 || riskPct <= 0 || entry <= 0) {
    els.calcResult.textContent = "输入完整后显示练习结果";
    return;
  }

  const perShareRisk = entry - stop;
  if (perShareRisk <= 0) {
    els.calcResult.textContent = "止损价需要低于买入价，才有可计算的下行风险";
    return;
  }

  const riskBudget = account * (riskPct / 100);
  const rawShares = Math.floor(riskBudget / perShareRisk);
  const lotShares = Math.max(0, Math.floor(rawShares / 100) * 100);
  const capital = lotShares * entry;

  els.calcResult.innerHTML = `
    单笔最多亏损约 ${formatMoney(riskBudget, "CNY")}。
    按100股一手估算，可买 ${lotShares.toLocaleString("zh-CN")} 股，
    占用资金约 ${formatMoney(capital, "CNY")}。
  `;
}

function updateClock() {
  const now = new Date();
  els.localClock.textContent = now.toLocaleTimeString("zh-CN", { hour12: false });

  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const isWeekday = day >= 1 && day <= 5;
  const isCnOpen = isWeekday && ((minutes >= 9 * 60 + 30 && minutes < 11 * 60 + 30) || (minutes >= 13 * 60 && minutes < 15 * 60));

  els.sessionStatus.textContent = isCnOpen ? "A股连续竞价中" : "A股非连续竞价";
  els.sessionStatus.classList.toggle("closed", !isCnOpen);
}

function loadWatchlists() {
  Object.keys(MARKET_CONFIG).forEach((market) => {
    state.watchlists[market] = readJSON(`${STORAGE_KEYS.watchPrefix}${market}`, MARKET_CONFIG[market].defaults);
  });
}

function saveWatchlist(market) {
  writeJSON(`${STORAGE_KEYS.watchPrefix}${market}`, state.watchlists[market]);
}

function loadAiMonitors() {
  Object.keys(MARKET_CONFIG).forEach((market) => {
    const saved = readJSON(`${STORAGE_KEYS.aiMonitorPrefix}${market}`, defaultAiMonitors(market));
    state.aiMonitors[market] = normalizeAiMonitors(market, saved);
  });
}

function saveAiMonitors(market) {
  writeJSON(`${STORAGE_KEYS.aiMonitorPrefix}${market}`, state.aiMonitors[market]);
}

function loadAiHistory() {
  Object.keys(MARKET_CONFIG).forEach((market) => {
    const history = readJSON(`${STORAGE_KEYS.aiHistoryPrefix}${market}`, { dateKey: todayKey(), codes: {} });
    state.aiHistory[market] = history.dateKey === todayKey() ? history : { dateKey: todayKey(), codes: {} };
  });
}

function saveAiHistory(market) {
  writeJSON(`${STORAGE_KEYS.aiHistoryPrefix}${market}`, ensureAiHistory(market));
}

function defaultAiMonitors(market) {
  const defaults = getAiUniverse(market)
    .filter((entry) => entry.level === "core")
    .slice(0, 6)
    .map((entry) => entry.code);
  return normalizeAiMonitors(market, defaults);
}

function normalizeAiMonitors(market, codes) {
  const validCodes = new Set(getAiUniverse(market).map((entry) => entry.code));
  return unique(codes ?? []).filter((code) => validCodes.has(code));
}

function normalizeCode(value, market) {
  const raw = value.trim();
  if (!raw) return "";

  const compact = raw.replace(/\s+/g, "");
  if (/^(sh|sz)\d{6}$/i.test(compact)) return compact.toLowerCase();
  if (/^hk/i.test(compact)) return `hk${compact.replace(/^hk/i, "").padStart(5, "0")}`;
  if (/^us/i.test(compact)) return `us${compact.replace(/^us/i, "").toUpperCase()}`;

  if (market === "cn") {
    if (/^\d{6}$/.test(compact)) {
      if (/^(5|6|9)/.test(compact)) return `sh${compact}`;
      return `sz${compact}`;
    }
  }

  if (market === "hk") {
    if (/^\d{1,5}$/.test(compact)) return `hk${compact.padStart(5, "0")}`;
  }

  if (market === "us" && /^[a-z.]{1,8}$/i.test(compact)) {
    return `us${compact.toUpperCase()}`;
  }

  if (market === "global") {
    const direct = Object.entries(GLOBAL_QUOTE_SYMBOLS).find(([, item]) =>
      item.yahoo.toLowerCase() === compact.toLowerCase() ||
      item.displayCode.toLowerCase() === compact.toLowerCase() ||
      item.name.toLowerCase() === compact.toLowerCase(),
    );
    if (direct) return direct[0];
  }

  return "";
}

function marketFromCode(code) {
  if (GLOBAL_QUOTE_SYMBOLS[code]) return "global";
  if (/^hk/i.test(code)) return "hk";
  if (/^us/i.test(code)) return "us";
  return "cn";
}

function parseQuoteTime(value) {
  if (!value) return null;
  if (/^\d{14}$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    const hour = Number(value.slice(8, 10));
    const minute = Number(value.slice(10, 12));
    const second = Number(value.slice(12, 14));
    return new Date(year, month, day, hour, minute, second);
  }
  const parsed = new Date(value.replace(/\//g, "-"));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatPrice(value) {
  if (!Number.isFinite(value)) return "--";
  const digits = Math.abs(value) >= 100 ? 2 : 3;
  return value.toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: digits,
  });
}

function formatPct(value) {
  if (!Number.isFinite(value)) return "--";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatDeltaPct(value) {
  if (!Number.isFinite(value)) return "--";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatChange(change, pct) {
  if (!Number.isFinite(change) || !Number.isFinite(pct)) return "--";
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(2)} / ${formatPct(pct)}`;
}

function formatMoney(value, currency) {
  if (!Number.isFinite(value)) return "--";
  const abs = Math.abs(value);
  const suffix = currency ? ` ${currency}` : "";
  if (abs >= 100000000) return `${(value / 100000000).toFixed(2)}亿${suffix}`;
  if (abs >= 10000) return `${(value / 10000).toFixed(2)}万${suffix}`;
  return `${value.toFixed(2)}${suffix}`;
}

function formatVolume(value) {
  if (!Number.isFinite(value)) return "--";
  const abs = Math.abs(value);
  if (abs >= 100000000) return `${(value / 100000000).toFixed(2)}亿`;
  if (abs >= 10000) return `${(value / 10000).toFixed(2)}万`;
  return value.toLocaleString("zh-CN", { maximumFractionDigits: 0 });
}

function formatTime(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "--";
  return date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

function formatQuoteDateTime(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "行情 --";
  const label = date.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `行情 ${label}`;
}

function formatDuration(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return "0分钟";
  const minutes = Math.floor(ms / 60000);
  if (minutes < 1) return "不足1分钟";
  if (minutes < 60) return `${minutes}分钟`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours}小时${rest}分钟` : `${hours}小时`;
}

function formatSampleTime(ts) {
  if (!Number.isFinite(ts)) return "--";
  return new Date(ts).toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function formatDateLabel(value) {
  if (!value) return "--";
  const text = String(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text.slice(5);
  return text;
}

function trendRangeLabel() {
  return state.trendRangeMinutes === 0 ? "全部快照" : `近${state.trendRangeMinutes}分钟`;
}

function readTrendRange() {
  const value = Number(localStorage.getItem(STORAGE_KEYS.aiTrendRange));
  return [0, 5, 15, 30, 60].includes(value) ? value : 30;
}

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function toneClass(value) {
  if (!Number.isFinite(value) || value === 0) return "neutral";
  return value > 0 ? "positive" : "negative";
}

function toNumber(value) {
  if (value === null || value === undefined || value === "") return Number.NaN;
  const number = Number(value);
  return Number.isFinite(number) ? number : Number.NaN;
}

function firstFinite(...values) {
  return values.find((value) => Number.isFinite(value)) ?? Number.NaN;
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

async function loadShareInfo() {
  const fallbackUrl = `${window.location.origin}/`;

  try {
    const response = await fetch("/api/share-info", { cache: "no-store" });
    if (!response.ok) throw new Error("share info unavailable");
    const info = await response.json();
    const urls = Array.isArray(info.urls) ? info.urls.filter(Boolean) : [];
    const isLocalHost = ["127.0.0.1", "localhost"].includes(window.location.hostname);
    state.shareUrl = isLocalHost ? urls[0] || info.primaryUrl || fallbackUrl : fallbackUrl;
  } catch {
    state.shareUrl = fallbackUrl;
  }

  updateSharePanel();
}

function updateSharePanel() {
  if (!els.shareUrl) return;
  els.shareUrl.textContent = state.shareUrl;
  els.shareUrl.href = state.shareUrl;

  const isLocalHost = ["127.0.0.1", "localhost"].includes(window.location.hostname);
  if (els.shareDesc) {
    els.shareDesc.textContent = isLocalHost
      ? "家人和这台电脑连接同一个 Wi-Fi 后，在手机浏览器输入下面地址即可查看。"
      : "把这个公网地址发给家人，手机用 5G 也可以打开。";
  }
}

function openSharePanel() {
  updateSharePanel();
  if (els.shareHint) {
    els.shareHint.textContent = "如果手机打不开，通常是 Windows 防火墙还没有允许 Python 访问局域网。";
  }
  if (els.sharePanel) {
    els.sharePanel.hidden = false;
  }
}

function closeSharePanel() {
  if (els.sharePanel) {
    els.sharePanel.hidden = true;
  }
}

async function copyShareUrl() {
  updateSharePanel();

  try {
    await navigator.clipboard.writeText(state.shareUrl);
    if (els.shareHint) {
      els.shareHint.textContent = "链接已复制，可以发到微信或直接发给家人。";
    }
  } catch {
    if (els.shareHint) {
      els.shareHint.textContent = "复制失败，可以手动选中上面的地址复制。";
    }
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  els.themeToggle.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  refreshIcons();
  drawQuoteChart(state.quotes.get(state.selectedQuoteCode));
}

function loadSavedTheme() {
  const theme = localStorage.getItem(STORAGE_KEYS.theme);
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  els.themeToggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
}

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
