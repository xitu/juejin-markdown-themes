// @ts-check

/**
 * @type {Record<string, {owner:string,repo:string,path:string,ref:string,highlight?:string}>}
 */
const themes = {
  juejin: {
    owner: 'xitu',
    repo: 'juejin-markdown-theme-default',
    path: 'juejin.scss',
    ref: '195cbb0',
    highlight: 'juejin',
  },
  github: {
    owner: 'sindresorhus',
    repo: 'github-markdown-css',
    path: 'github-markdown.css',
    ref: '888d5a0',
    highlight: 'github',
  },
  smartblue: {
    owner: 'cumt-robin',
    repo: 'juejin-markdown-theme-smart-blue',
    path: 'smart-blue.css',
    ref: 'f266ca5',
  },
  cyanosis: {
    owner: 'linxsbox',
    repo: 'juejin-markdown-theme-cyanosis',
    path: 'cyanosis.scss',
    ref: '6b814ea',
    highlight: 'atom-one-dark',
  },
  'channing-cyan': {
    owner: 'ChanningHan',
    repo: 'juejin-markdown-theme-channing-cyan',
    path: 'channing-cyan.scss',
    ref: 'c843c2f',
  },
  fancy: {
    owner: 'xrr2016',
    repo: 'juejin-markdown-theme-fancy',
    path: 'fancy.scss',
    ref: 'eeeb566',
  },
  hydrogen: {
    owner: 'DawnLck',
    repo: 'juejin-markdown-theme-hydrogen',
    path: 'hydrogen.scss',
    ref: 'b3f86fb',
  },
  'condensed-night-purple': {
    owner: 'Geekhyt',
    repo: 'condensed-night-purple',
    path: 'condensed-night-purple.scss',
    ref: 'a232641',
    highlight: 'github-gist',
  },
  greenwillow: {
    owner: 'wangly19',
    repo: 'juejin-markdown-theme-greenwillow',
    path: 'greenwillow.scss',
    ref: 'aca95ed',
  },
  'v-green': {
    owner: 'DawnLck',
    repo: 'juejin-markdown-theme-v-green',
    path: 'v-green.scss',
    ref: '015f88b',
  },
  'vue-pro': {
    owner: 'dunizb',
    repo: 'juejin-markdown-theme-vue-pro',
    path: 'vue-pro.scss',
    ref: '720e7a9',
    highlight: 'monokai',
  },
  'healer-readable': {
    owner: 'healerLZH',
    repo: 'juejin-markdown-theme-healer-readable',
    path: 'healer-readable.scss',
    ref: '3f2ef56',
    highlight: 'srcery',
  },
  'mk-cute': {
    owner: 'Jacky-Summer',
    repo: 'juejin-markdown-theme-mk-cute',
    path: 'mk-cute.scss',
    ref: '50d6414',
  },
  jzman: {
    owner: 'jzmanu',
    repo: 'juejin-markdown-theme-jzman',
    path: 'jzman.scss',
    ref: 'b8cf058',
    highlight: 'monokai',
  },
  'geek-black': {
    owner: 'MageeLin',
    repo: 'juejin-markdown-theme-geek-black',
    path: 'geek-black.scss',
    ref: '888136c',
    highlight: 'monokai',
  },
  'awesome-green': {
    owner: 'luffyZh',
    repo: 'juejin-markdown-theme-awesome-green',
    path: 'awesome-green.scss',
    ref: '5e8259b',
  },
  'qklhk-chocolate': {
    owner: 'QiaokeliHenku',
    repo: 'juejin-markdown-theme-qkl',
    path: 'chocolate.scss',
    ref: '8bbb87d',
  },
  'scrolls-light': {
    owner: 'daodaolee',
    repo: 'juejin-markdown-theme-scrolls',
    path: 'scrolls.scss',
    ref: 'cebc694',
  },
  'simplicity-green': {
    owner: 'GuoJikun',
    repo: 'juejin-markdown-theme-simplicity-green',
    path: 'simplicity-green.scss',
    ref: 'b9c06ed',
  },
  arknights: {
    owner: 'viewweiwu',
    repo: 'juejin-markdown-theme-arknights',
    highlight: 'atom-one-light',
    path: 'arknights.scss',
    ref: 'c7285a1',
  },
  vuepress: {
    owner: 'promise96319',
    repo: 'juejin-markdown-theme-vuepress',
    path: 'vuepress.scss',
    ref: 'af6f62a',
    highlight: 'base16/tomorrow-night',
  },
  'Chinese-red': {
    owner: 'Mancuoj',
    repo: 'juejin-markdown-theme-Chinese-red',
    path: 'Chinese-red.scss',
    ref: '21003ae',
  }
};

export default themes;
