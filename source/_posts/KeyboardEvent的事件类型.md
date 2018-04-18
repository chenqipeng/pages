---
title: KeyboardEvent的事件类型
date: 2018-04-19 00:29:57
categories:
- stuff
tags:
- DOM
- Event
---

`KeyboardEvent`对象描述了键盘的交互方式，有三种类型的事件，分别为：·`keydown`（按下按键），`keypress`（非修饰键按下），`keyup`（释放按键）。

- 如果按键长按下不松开，则`keydown`不断重复；如果按键是非修饰键，则`keypress`也不断重复。[详见](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent)

- 根据[文档](https://www.w3.org/TR/uievents/#events-keyboardevents)，应该是尽量避免使用`keypress`事件。文档已经将`keypress`归为legacy，应该使用更为通用的`input`事件，因为`keypress`在非键盘的环境下不可用（例如触屏手机下的输入）。
> Note that the keypress event is specific to key events, and has been	replaced by the more general event sequence of beforeinput and input events. These new input events are not specific to	keyboard actions and can be used to capture user input regardless of the original source.

- `beforeinput`事件浏览器支持覆盖率应该还不高（2018年2月），粗略测试了下，在Chrome 64下已经实现了，但在IE 11还没实现。MDN和Can I use下也没发现相关文档和信息。慎用。