# Decap CMS 使用说明

后台入口：

```text
/admin/
```

后台管理的是 `src/content/posts` 里的 Markdown 文章。普通访客只能浏览网站；只有通过 GitHub OAuth 登录，并且对仓库 `sirius868/personal_blog` 有写入权限的人，才能保存内容。

## 线上登录

线上部署到 Vercel 后，必须完成这三件事：

1. GitHub 新建 OAuth App。
2. Vercel 添加 `OAUTH_CLIENT_ID` 和 `OAUTH_CLIENT_SECRET`。
3. GitHub OAuth App 的 callback URL 必须是 `https://你的-vercel-域名/api/callback`。

完成后访问：

```text
https://你的-vercel-域名/admin/
```

点击登录，会跳到 GitHub 授权页面。这里用的是你的 GitHub 账号，不是 Decap 单独的账号密码。

## 本地编辑

本地编辑不走线上 GitHub OAuth，需要同时运行：

```bash
npm.cmd run dev
```

另开一个终端：

```bash
npm.cmd run cms
```

然后打开：

```text
http://127.0.0.1:4321/admin/
```

如果没有启动 `npm.cmd run cms`，本地后台可能无法保存内容。
