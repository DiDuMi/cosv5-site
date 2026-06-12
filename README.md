# COSV5 社群展示站

Telegram Cosplay 资源社群先锋 — 官方展示网站。

## 技术栈

- 纯静态 HTML + CSS + JS
- 部署：Cloudflare Pages
- 字体：Google Fonts（Orbitron / Noto Sans SC / JetBrains Mono）

## 本地预览

```bash
# 任意 HTTP 服务器
python3 -m http.server 8080
# 或
npx serve .
```

## Cloudflare Pages 部署

1. Fork 或推送此仓库到 GitHub
2. 在 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → 创建 → Pages
3. 连接 GitHub 仓库
4. 构建配置：
   - 构建命令：`（留空）`
   - 构建输出目录：`/`
5. 部署完成

## 自定义域名（可选）

在 Pages 项目的「自定义域」中绑定你的域名（CNAME 到 pages.dev 地址）。
# force redeploy Fri Jun 12 23:11:57 CST 2026
