# Vercel 部署说明

这个博客是 Astro 静态站点，推荐部署到 Vercel。后台编辑使用 Decap CMS + GitHub OAuth，普通访客只能浏览网站，只有能通过你的 GitHub 授权并拥有仓库写入权限的人才能保存内容。

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
