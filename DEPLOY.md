# 部署说明

这个博客是 Astro 静态站点，推荐部署到 Vercel。

## 本地检查

```bash
npm.cmd install
npm.cmd run build
```

构建产物会输出到 `dist`。

## Vercel 配置

在 Vercel 导入 GitHub 仓库后，使用以下配置：

```text
Framework Preset: Astro
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

## 部署后修改站点地址

拿到 Vercel 地址后，修改 `astro.config.mjs`：

```js
site: 'https://your-site.vercel.app'
```

如果绑定了自定义域名，就改成你的正式域名。

## 更新文章

新增或修改 `src/content/posts` 里的 Markdown 文章后：

```bash
git add .
git commit -m "update posts"
git push
```

Vercel 会自动重新部署。
