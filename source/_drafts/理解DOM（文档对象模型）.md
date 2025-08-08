---
title: 理解DOM（文档对象模型）
tags:
---

DOM，文档对象模型（Document Object Model），是构成 Web 上文档结构和内容的对象的数据表示形式。

加载网页时，浏览器会创建该页面的文档对象模型。

HTML DOM 模型被构造为对象树：

![DOM HTML tree](https://www.w3schools.com/js/pic_htmltree.gif)
<center>DOM HTML tree</center>

DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。

浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。

DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。

https://javascript.ruanyifeng.com/dom/node.html

https://www.w3schools.com/js/js_htmldom.asp

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
