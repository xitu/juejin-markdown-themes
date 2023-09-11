# 掘金 Markdown 主题

[![npm](https://badgen.net/npm/v/juejin-markdown-themes)](https://npm.im/juejin-markdown-themes) [![downloads](https://badgen.net/npm/dt/juejin-markdown-themes)](https://npm.im/juejin-markdown-themes)

[主题预览地址](https://juejin-theme.netlify.app/)

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
| [orange](https://github.com/RudeCrab/juejin-markdown-theme-rude-crab) | [RudeCrab](https://juejin.cn/user/2541726616796878) | MIT |
| [scrolls](https://github.com/daodaolee/juejin-markdown-theme-scrolls) | [道道里](https://juejin.cn/user/166781497122039) | MIT |
| [simplicity-green](https://github.com/GuoJikun/juejin-markdown-theme-simplicity-green) | [Jason_Guo](https://juejin.cn/user/3878732751188845) | MIT |
| [arknights](https://github.com/viewweiwu/juejin-markdown-theme-arknights) | [viewweiwu](https://juejin.cn/user/712139263452503) | MIT |
| [vuepress](https://github.com/promise96319/juejin-markdown-theme-vuepress) | [qgh](https://juejin.cn/user/3685218708627544) | MIT |
| [Chinese-red](https://github.com/mancuoj/juejin-markdown-theme-Chinese-red) | [Mancuoj](https://juejin.cn/user/3466105460624760) | MIT |
| [nico](https://github.com/blllld/juejin-markdown-theme-nico) | [非思不可](https://juejin.cn/user/553809588523405) | MIT |
| [devui-blue](https://github.com/kagol/juejin-markdown-theme-devui-blue) | [DevUI团队](https://juejin.cn/user/712139267650141) | MIT |
| [qklhk-chocolate](https://github.com/qklhk/juejin-markdown-theme-qklhk/) | [巧克力很苦](https://juejin.cn/user/1011206429358087) | Apache |
| [serene-rose](https://github.com/Krue1/juejin-markdown-theme-serene-rose) | [Krue](https://juejin.cn/user/1143110510329256) | MIT |
| [z-blue](https://github.com/sheng1998/juejin-markdown-theme-z-blue) | [z_](https://juejin.cn/user/4212984289441422) | MIT |

### 代码高亮

使用 `highlight` 指定主题，可以使用 [highlight.js](https://github.com/highlightjs/highlight.js) 中的所有样式：

- [样式列表](https://github.com/highlightjs/highlight.js/tree/master/src/styles)
- [样式预览](https://highlightjs.org/static/demo/)

## 如何贡献 Markdown 主题

1. 使用[默认模板](https://github.com/xitu/juejin-markdown-theme-default)创建一个公开的仓库（点击绿色的 Use this template 按钮）
2. 将其中的 `juejin.scss` 替换为自己创作的样式，目前支持 Sass，Less 和 CSS
3. 使用[主题开发工具](https://github.com/linxsbox/juejin-theme-devtool)在本地预览主题效果
4. Fork 此仓库并克隆到本地，在 `themes.js` 文件中指明样式文件的路径，`ref` 为 commit hash，`highlight` 为默认的代码高亮主题（可选）①
5. 在 `README.md` 中「社区主题」章节中添加你的主题和作者信息
6. 提交 pull request (注意：commit 信息要使用 'feat: ' 和 'fix: ' 形式，否则无法触发自动化发布流程)
7. 提交 PR 前请 rebase，确保 commit 记录的整洁
8. 如果是修复样式 bug，请在 PR 中给出明确的描述信息
9. 注意考虑样式的稳定性和兼容性
10. **并非所有 PR 的主题都会入选，挑选和审核会有一定周期**


### ① themes.js 格式说明

```js
  cyanosis: { // 主题名称
    owner: 'linxsbox', // 作者 github 用户名
    repo: 'juejin-markdown-theme-cyanosis', // 主题仓库名
    path: 'cyanosis.scss', // 主题文件 - 与主题同名
    ref: '6b814ea', // commit hash
    highlight: 'atom-one-dark', // 代码高亮样式名 - 默认 juejin
  }, // 注意格式别忘了逗号
```

## License

## 联系官方
微信：zwcatfly 或者微信： chnyifan

![middle_img_v2_76ee7552-1a63-41df-900d-5fbefe5a69ag](https://user-images.githubusercontent.com/8282645/139875601-f0f3477d-a03a-4acf-ac8d-7204d4f5bc04.jpg)


MIT
