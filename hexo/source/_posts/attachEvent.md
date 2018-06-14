---
title: attachEvent
date: 2018-04-19 00:09:15
categories:
- stuff
tags:
- Javascript
- DOM
- Event
---

```javascript
// 兼容FF和IE和Opera
var theEvent = e || window.event; 
```

以上代码是在同事写的`addEventListener`里发现的，根据注释，我想大概是IE的兼容性处理代码，但具体详情不明所以。一番查询，得出一些事件的知识点：

+ 早期IE浏览器（IE8及早期版本）是不支持[addEventListener](https://caniuse.com/#search=addEventListener)语法的，这些IE的早期版本使用的是微软一个专有的替代性标准[attachEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/attachEvent)

+ 根据[网友回答](https://stackoverflow.com/questions/3493033/what-is-the-meaning-of-this-var-evt-eventwindow-event)：在IE中（所有版本？），event对象是一个全局变量，由于历史原因，所有全局变量都是window对象的成员变量。所以有以上代码写法。

+ 根据[网友博客](http://www.cnblogs.com/huajs/archive/2011/11/10/2244793.html)和我自己的实测，其实这一写法是多余的。原因在于，无论是`addEventListener`还是`attachEvent`函数，其listener参数接收到的传入参数，都是event对象。即使是`attachEvent`，其listener的传入参数也是event对象，这个对象是window.event的一个**复制的对象**(两个并不全等)。所以无需以上写法来判断event对象是否存在。


