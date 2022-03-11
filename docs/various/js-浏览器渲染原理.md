---
title: 浏览器渲染核心
---

1. 渲染引擎 （ Firefox 中叫做 Gecko，在 Chrome 和 Safari 中都是基于 WebKit 开发的。）

2. js 引擎

<!-- ![](/86A87EF05D2742D9995708C852259BD7.png) -->

其中蓝色线代表 JavaScript 加载；红色线代表 JavaScript 执行；绿色线代表 HTML 解析。

1）情况 1<script src="script.js"></script>

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。

2）情况 2<script async src="script.js"></script> (异步下载)

async 属性表示异步执行引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行——无论此刻是 HTML 解析阶段还是 DOMContentLoaded 触发之后。需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。

3）情况 3 <script defer src="script.js"></script>(延迟执行)

defer 属性表示延迟执行引入的 JavaScript，即这段 JavaScript 加载时 HTML 并未停止解析，这两个过程是并行的。整个 document 解析完毕且 defer-script 也加载完成之后（这两件事情的顺序无关），会执行所有由 defer-script 加载的 JavaScript 代码，然后触发 DOMContentLoaded 事件。

## 差异：

1.defer 与相比普通 script，有两点区别：\*\*载入 JavaScript 文件时不阻塞 HTML 的解析，执行阶段被放到 HTML 标签解析完成之后。

2.在加载多个 JS 脚

本的时候，async 是无顺序的加载，而 defer 是有顺序的加载。\*\*

问题五：渲染页面时常见哪些不良现象？

由于浏览器的渲染机制不同，在渲染页面时会出现两种常见的不良现象—-白屏问题和 FOUS（无样式内容闪烁）

FOUC：由于浏览器渲染机制（比如 firefox），再 CSS 加载之前，先呈现了 HTML，就会导致展示出无样式内容，然后样式突然呈现的现象；

白屏：有些浏览器渲染机制（比如 chrome）要先构建 DOM 树和 CSSOM 树，构建完成后再进行渲染，如果 CSS 部分放在 HTML 尾部，由于 CSS 未加载完成，浏览器迟迟未渲染，从而导致白屏；也可能是把 js 文件放在头部，脚本会阻塞后面内容的呈现，脚本会阻塞其后组件的下载，出现白屏问题。

## 总结：

- 浏览器工作流程：构建 DOM -> 构建 CSSOM -> 构建渲染树 -> 布局 -> 绘制。

- CSSOM 会阻塞渲染，只有当 CSSOM 构建完毕后才会进入下一个阶段构建渲染树。

- 通常情况下 DOM 和 CSSOM 是并行构建的，但是当浏览器遇到一个 script 标签时，DOM 构建将暂停，直至脚本完成执行。但由于 JavaScript 可以修改 CSSOM，所以需要等 CSSOM 构建完毕后再执行 JS。

- 如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，建议将 script 标签放在 body 标签底部。

怎样减少重绘和重排

1.在 js 中改变元素样式时将可以一起改变的元素样式合并到一起进行修改

如下代码，除了被优化的优化现代浏览器外，其他版本较旧的浏览器会在每一次改变 style 变化的时候，会触发重排现象

const el = document.getElementById('test');
el.style.padding = '5px';
el.style.borderLeft = '1px';
el.style.borderRight = '2px';

解决方案：

- 使用 cssText

const el = document.getElementById('test');
el.style.cssText += 'border-left: 1px; border-right: 2px; padding: 5px;';

- 修改 CSS 的 class

const el = document.getElementById('test');
el.className += ' active';
