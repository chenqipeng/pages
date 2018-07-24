---
title: Array的forEach与splice
date: 2018-04-19 00:15:11
categories:
- stuff
tags:
- Javascript
---

```javascript
this.multipleSelection.forEach(function (item, index) {
    if (selectRow.waresId == item.waresId) {
        this.multipleSelection.splice(index, 1);
        exist = true;
        return false;
    }
}, this);
```

以上一段代码在实际运行中，由于`waresId`是唯一标识，所以不会产生预料之外的异常。但在`forEach`中使用`splice`，在某些情况下是会发生一些预料之外的异常的。如下：

```javascript
let ary = [1,2,3,3,5,6,7,8,9]

ary.forEach((item, index) => {
  if(item % 3 === 0) {
    ary.splice(index, 1)
  }
})

//ary:[1, 2, 3, 5, 7, 8]
```

业务逻辑本意是删除3的倍数，然而最后结果却是`[1, 2, 3, 5, 7, 8]`，结果中依然包含一个3。
本例中，由于`splice`函数修改了数组，导致第二个3没有如期待的那样进入循环迭代，所以没有被删除掉。

1. 在《JS函数式编程指南》中，曾批评过`splice`，原因是`splice`不是一个*纯函数*，调用`splice`可能会发生一些无法观察到变化，致使程序异常。
2. 抛开`splice`函数来说，也应尽量不在数组的循环中做修改数组长度的操作，避免出现异常。