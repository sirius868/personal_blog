# 部署说明

这个博客是 Astro 静态站点，支持部署到 Vercel 或 GitHub Pages。后台编辑使用 Decap CMS + GitHub OAuth，普通访客只能浏览网站，只有能通过你的 GitHub 授权并拥有仓库写入权限的人才能保存内容。

## 部署到 GitHub Pages

站点地址为 `https://sirius868.github.io/personal_blog/`。

### 1. 推送代码

```bash
git push origin main
```

仓库已包含 `.github/workflows/deploy-gh-pages.yml`，推送后会自动构建并部署。工作流会自动设置构建环境变量：

```text
SITE_URL=https://sirius868.github.io/personal_blog/
BASE_PATH=/personal_blog/
```

### 2. 开启 GitHub Pages

仓库页面：

```text
Settings -> Pages
```

在 "Build and deployment" 里选择：

```text
Source: GitHub Actions
```

首次部署后即可访问：

```text
https://sirius868.github.io/personal_blog/
```

### 3. 后台登录（注意）

GitHub Pages 是纯静态托管，无法运行 OAuth 代理（`api/auth`、`api/callback`），所以 `https://sirius868.github.io/personal_blog/admin/` 上**无法**通过 GitHub 授权登录 CMS。两个替代方案：

1. 本地编辑：`npm run dev` + `npm run cms`，访问 `http://127.0.0.1:4321/admin/`（推荐，无需额外配置）
2. 保留 Vercel 部署（见下文），在 Vercel 域名上继续用线上 CMS 编辑，文章会自动同步到 GitHub Pages

## 部署到 Vercel

## 1. 推送代码到 GitHub

仓库地址：

```text
https://github.com/sirius868/personal_blog
```

本地提交后推送：

```bash
git push origin main
```

## 2. 在 Vercel 导入仓库

在 Vercel 新建项目，选择 GitHub 仓库 `sirius868/personal_blog`。

构建配置使用默认 Astro 配置即可：

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

部署完成后，记下你的线上域名，例如：

```text
https://personal-blog.vercel.app
```

## 3. 创建 GitHub OAuth App

打开 GitHub：

```text
Settings -> Developer settings -> OAuth Apps -> New OAuth App
```

填写：

```text
Application name: Hang Blog CMS
Homepage URL: https://你的-vercel-域名
Authorization callback URL: https://你的-vercel-域名/api/callback
```

创建后复制：

```text
Client ID
Client Secret
```

## 4. 在 Vercel 设置环境变量

进入 Vercel 项目：

```text
Settings -> Environment Variables
```

添加：

```text
OAUTH_CLIENT_ID=你的 GitHub OAuth Client ID
OAUTH_CLIENT_SECRET=你的 GitHub OAuth Client Secret
SITE_URL=https://你的-vercel-域名
```

保存后重新部署一次。

## 5. 登录后台

访问：

```text
https://你的-vercel-域名/admin/
```

点击登录后会跳到 GitHub 授权。授权成功后，就可以在线添加、编辑、删除文章。

## 6. 本地编辑

本地需要同时启动两个服务：

```bash
npm.cmd run dev
```

另开一个终端：

```bash
npm.cmd run cms
```

然后访问：

```text
http://127.0.0.1:4321/admin/
```
