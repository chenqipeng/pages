---
title: compare-null-with-zero
date: 2018-04-18 23:51:27
categories:
- stuff
tags:
- Javascript
---
# null 与 0 的比较判断

```javascript
//val值得可能为数字类型或null
return val >= 0
```

以上代码原本期望当`val`为`null`时，会返回`false`，结果并不是，而是返回了`true`
然后我尝试了以下代码：

```javascript
const A = null > 0
const B = null == 0
const C = null >= 0

console.log(A, B, C) //false,false,true
```

> `null`不大于0，不等于0，反而大于等于0？

查阅标准文档，关于关系运算符的算法规则有以下：[The Abstract Relational Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.5)

- 两边在算其数字值时参照[ToNumber](http://www.ecma-international.org/ecma-262/5.1/#sec-9.3)。注意，这里`null`算出+0。
- 以`<`运算符为基础，`>`运算为其右运算结果，`<=`运算为`>`运算结果的反值，`>=`运算为`<`运算结果的反值
 > If r is true or undefined, return false. Otherwise, return true.

根据以上两点，可以得出结论：
1. 求`null >= 0`，即求`null < 0`结果的反值
2. `null < 0`结果为false，则`null >= 0`结果为true

至于`null == 0`，这个是等值运算符的算法规则计算，有别于关系运算符