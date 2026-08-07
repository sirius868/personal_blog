# Decap CMS 使用说明

这个博客已经加入 Decap CMS 后台入口：

```text
/admin/
```

后台目前管理 `src/content/posts` 里的 Markdown 文章。普通访客只能浏览网站；只有能通过 GitHub 授权并拥有 `sirius868/personal_blog` 写入权限的人，才能保存编辑。

## 你还需要在部署平台配置登录

Decap CMS 的 GitHub 后端需要一个 GitHub OAuth 登录通道。最省心的做法是把网站部署到 Netlify，然后启用 Netlify Identity + Git Gateway。

如果继续用 Vercel 或 GitHub Pages，也可以用 GitHub OAuth provider，但需要额外部署一个 OAuth 代理服务。

## 本地预览后台

```bash
npm.cmd run dev
```

本地编辑还需要另开一个终端启动 Decap 本地后端：

```bash
npm.cmd run cms
```

然后访问：

```text
http://127.0.0.1:4321/admin/
```

如果没有启动本地后端，点击 GitHub 登录会跳到 Netlify OAuth，并可能显示 `Not Found`。线上编辑需要 Netlify Identity + Git Gateway，或者额外配置 GitHub OAuth 代理。
