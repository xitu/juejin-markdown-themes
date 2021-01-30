# 掘金 Markdown 主题

[![npm](https://badgen.net/npm/v/juejin-markdown-themes)](https://npm.im/juejin-markdown-themes) [![downloads](https://badgen.net/npm/dt/juejin-markdown-themes)](https://npm.im/juejin-markdown-themes)

[主题预览地址](https://juejin-markdown-themes.netlify.app/)

## 使用方法

在文章内容前加上 [front matter](https://jekyllrb.com/docs/front-matter/) 格式的元信息：

```yaml
---
theme: juejin # Markdown 主题，默认值：juejin
highlight: juejin # 代码高亮主题，默认值：theme 中指定，没有则默认为 juejin
---

```

### Markdown 主题

使用 `theme` 指定主题

#### 内置主题

| 主题                                                            | License |
| --------------------------------------------------------------- | ------- |
| [juejin](https://github.com/xitu/juejin-markdown-theme-default) | MIT     |
| [github](https://github.com/sindresorhus/github-markdown-css)   | MIT     |

#### 社区主题

| 主题 | 作者 | License |
| --- | --- | --- |
| [smartblue](https://github.com/cumt-robin/juejin-markdown-theme-smart-blue) | [Tusi](https://juejin.cn/user/2752832847753085) | MIT |
| [cyanosis](https://github.com/linxsbox/juejin-markdown-theme-cyanosis) | [林小帅](https://juejin.cn/user/3175045313873943) | MIT |
| [channing-cyan](https://github.com/ChanningHan/juejin-markdown-theme-channing-cyan) | [ChanningHyl🙌](https://juejin.cn/user/2101921963839678) | MIT |
| [fancy](https://github.com/xrr2016/juejin-markdown-theme-fancy) | [冷石 Boy](https://juejin.cn/user/835284564445415) | MIT |
| [hydrogen](https://github.com/DawnLck/juejin-markdown-theme-hydrogen) | [DawnLck 在掘金](https://juejin.cn/user/1028798614345032) | MIT |
| [condensed-night-purple](https://github.com/Geekhyt/condensed-night-purple) | [童欧巴](https://juejin.cn/user/3491704662669469) | MIT |
| [greenwillow](https://github.com/wangly19/juejin-markdown-theme-greenwillow) | [wangly19](https://juejin.cn/user/4248168660735310) | MIT |
| [v-green](https://github.com/DawnLck/juejin-markdown-theme-v-green) | [DawnLck 在掘金](https://juejin.cn/user/1028798614345032) | MIT |
| [vue-pro](https://github.com/dunizb/juejin-markdown-themes) | [杭州程序员张张](https://juejin.cn/user/289926798645575) | MIT |
| [healer-readable](https://github.com/dunizb/juejin-markdown-theme-healer-readable) | [healer](https://juejin.cn/user/1415826709689208) | MIT |
| [mk-cute](https://github.com/Jacky-Summer/juejin-markdown-theme-mk-cute) | [JackySummer](https://juejin.cn/user/1257497033714477) | MIT |
| [jzman](https://github.com/jzmanu/juejin-markdown-theme-jzman) | [躬行之](https://juejin.cn/user/3526889030301325) | MIT |
| [geek-black](https://github.com/MageeLin/juejin-markdown-theme-geek-black) | [林景宜](https://juejin.cn/user/404232342875966) | MIT |
| [awesome-green](https://github.com/luffyZh/juejin-markdown-theme-awesome-green) | [luffyZh](https://juejin.cn/user/96412752681079) | MIT |
| [rude-crab](https://github.com/RudeCrab/juejin-markdown-theme-rude-crab) | [RudeCrab](https://juejin.cn/user/2541726616796878) | MIT |

### 代码高亮

使用 `highlight` 指定主题，可以使用 [highlight.js](https://github.com/highlightjs/highlight.js) 中的所有样式：

- [样式列表](https://github.com/highlightjs/highlight.js/tree/master/src/styles)
- [样式预览](https://highlightjs.org/static/demo/)

## 如何贡献 Markdown 主题

1. 使用[默认模板](https://github.com/xitu/juejin-markdown-theme-default)创建一个公开的仓库（点击绿色的 Use this template 按钮）
2. 将其中的 `juejin.scss` 替换为自己创作的样式，目前支持 Sass，Less 和 CSS
3. Fork 此仓库并克隆到本地，在 `themes.js` 文件中指明样式文件的路径，`ref` 为 commit hash，`highlight` 为默认的代码高亮主题（可选）
4. 在 `README.md` 中「社区主题」章节中添加你的主题和作者信息
5. 提交 pull request

## License

MIT
