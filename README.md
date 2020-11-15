# 掘金 Markdown 主题

预览：https://xitu.github.io/juejin-markdown-themes/

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

| 主题 | 作者 | License |
| --- | --- | --- |
| [smartblue](https://github.com/cumt-robin/juejin-markdown-theme-smart-blue) | [Tusi](https://juejin.im/user/2752832847753085) [@cumt-robin](https://github.com/cumt-robin) | MIT |
| [cyanosis](https://github.com/linxsbox/juejin-markdown-theme-cyanosis) | [林小帅](https://juejin.im/user/3175045313873943) [@linxsbox](https://github.com/linxsbox) | MIT |
| [channing-cyan](https://github.com/ChanningHan/juejin-markdown-theme-channing-cyan) | [ChanningHyl🙌](https://juejin.im/user/2101921963839678) [@ChanningHan](https://github.com/ChanningHan) | MIT |
| [fancy](https://github.com/xrr2016/juejin-markdown-theme-fancy) | [冷石 Boy](https://juejin.im/user/835284564445415) [@xrr2016](https://github.com/xrr2016) | MIT |
| [hydrogen](https://github.com/DawnLck/juejin-markdown-theme-hydrogen) | [DawnLck 在掘金](https://juejin.im/user/1028798614345032) [@DawnLck](https://github.com/DawnLck) | MIT |

### 代码高亮

使用 `highlight` 指定主题，可以使用 [highlight.js](https://github.com/highlightjs/highlight.js) 中的所有样式：

- [样式列表](https://github.com/highlightjs/highlight.js/tree/master/src/styles)
- [样式预览](https://highlightjs.org/static/demo/)

## 如何贡献 Markdown 主题

1. 使用[默认模板](https://github.com/xitu/juejin-markdown-theme-default)创建一个公开的仓库（点击绿色的 Use this template 按钮）
2. 将其中的 `juejin.scss` 替换为自己创作的样式，目前支持 Sass，Less 和 CSS
3. Fork 此仓库并克隆到本地，在 `themes.js` 文件中指明样式文件的路径，`ref` 为 commit hash
4. 在 `README.md` 中「社区主题」章节中添加你的主题和作者信息
5. 提交 pull request

## License

MIT
