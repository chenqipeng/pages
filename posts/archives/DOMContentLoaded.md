---
title: DOMContentLoaded
date: 2018-04-19 00:32:13
categories:
- stuff
tags:
- DOM
---

`DOMContentLoaded`事件常用于注册那些需要DOM加载完成后执行的回调函数，和`window.onload`类似，但两者的触发时机是不同的。简单来说：`DOMContentLoaded`无需等待样式表、图像和子框架的完成加载，而`window.onload`需要等待一切加载完成才触发。

- [MDN相关文档](https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded)
- 相关博客：[1](http://www.cnblogs.com/hh54188/archive/2013/03/01/2939426.html)、[2](http://www.alloyteam.com/2014/03/effect-js-css-and-img-event-of-domcontentloaded/)
- jQuery v3.3.1 相关源码：
```javascript
// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}
```