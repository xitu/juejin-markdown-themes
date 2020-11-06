<<<<<<< Updated upstream
---
# themes:
theme: juejin
---

## Markdown Basic Syntax

I just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type `nano`.

My favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).

1. First item
2. Second item
3. Third item

> Dorothy followed her through many of the beautiful rooms in her castle.

```js
import { Editor, Viewer } from 'bytemd';
import gfm from '@bytemd/plugin-gfm';

const plugins = [
  gfm(),
  // Add more plugins here
];

const editor = new Editor({
  target: document.body, // DOM to render
  props: {
    value: '',
    plugins,
  },
});

editor.on('change', (e) => {
  editor.$set({ value: e.detail.value });
});
```

## GFM Extended Syntax

~~The world is flat.~~ We now know that the world is round.

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
=======
---
theme: juejin
---

## Markdown 文本示例

### 标题

- 段落
- 标题：`# h1`、`## h2`
- 文字变形：`**粗体**`、`*斜体*`、`代码块`
- 链接：`[]()`
- 图片：`![]()`
- 列表：`- ` `1. `
- 引言：`> `

### 表格

| 等级 | 掘力值下限 | 掘力值上限 |
| ---- | ---------- | ---------- |
| Lv1  | 0          | 99         |
| Lv2  | 100        | 999        |
| Lv3  | 1000       | 4999       |

### 代码块

```javascript
var x = 5;
var y = function (n) {
  return console.log('Number is:', n);
};
```
>>>>>>> Stashed changes
