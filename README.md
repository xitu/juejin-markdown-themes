# 掘金 Markdown 主题

## 使用方法

在文章内容前加上 [front matter](https://jekyllrb.com/docs/front-matter/) 格式的元信息：

```
---
theme: juejin
highlight: juejin
---
```

### Markdown 主题

使用 `theme` 指定主题

#### 内置主题

- [juejin](https://github.com/xitu/juejin-markdown-theme-default)
- [github](https://github.com/sindresorhus/github-markdown-css)

#### 社区主题

- [smartblue](https://github.com/cumt-robin/juejin-markdown-theme-smart-blue)
- [cyanosis](https://github.com/linxsbox/juejin-markdown-theme-cyanosis)
- [channing-cyan](https://github.com/ChanningHan/juejin-markdown-theme-channing-cyan)

### 代码高亮

使用 `highlight` 指定主题，可以使用 [highlight.js](https://github.com/highlightjs/highlight.js) 中的所有样式：

- [样式列表](https://github.com/highlightjs/highlight.js/tree/master/src/styles)
- [样式预览](https://highlightjs.org/static/demo/)

## 如何贡献 Markdown 主题

1. 创建一个 Git 仓库（可公开访问），添加主题样式文件（目前支持 Sass，Less 和 CSS），并添加 license（需要兼容 MIT）后提交
2. Fork 此仓库并克隆到本地，执行 `git submodule init` 初始化 submodule
3. 添加第 1 步中创建的仓库为 submodule：`git submodule add [仓库地址] themes/[主题名字]`
4. 在 `themes.js` 文件中指明样式文件路径
5. 在 `README.md` 中「社区主题」章节中添加你的主题链接
6. 提交 pull request

## 疑难杂症

- [git submodule 删除/修改](https://stackoverflow.com/a/36593218)

## License

MIT
