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

然后访问：

```text
http://127.0.0.1:4321/admin/
```

本地保存内容需要另开一个 Decap 本地后端服务；线上编辑以前台 GitHub 登录为准。
