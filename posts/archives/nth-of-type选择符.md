---
title: nth-of-type选择符
date: 2018-04-19 00:20:04
id: 2018041908
categories:
- stuff
tags:
- CSS
---

```html
<div>
  <span>span-1</span>
  <i>i-1</i>
  <span class="boo">span-boo-1</span>
  <i>i-2</i>
  <span class="boo">span-boo-2</span>
  <i>i-3</i>
  <span>span-2</span>
  <span>span-3</span>
  <span class="boo">span-boo-3</span>
  <i>i-4</i>
  <i>i-5</i>
  <span>span-4</span>
  <span class="boo">span-boo-4</span>
  <span class="boo">span-boo-5</span>
  <span>span-5</span>
</div>
```

```css
span, i {
  display: block;
}

div .boo:nth-of-type(2n) {
  color: red;
}
```

以上代码，本意原是想每偶数个`class="boo"`的元素设置`color: red;`，然而，最终生效的元素只有：`span-boo-1`,`span-boo-3`,`span-boo-4`。

这个例子说明了：伪类选择符`E:nth-of-type(n)`总是以`E`标签为基础计算列表，算法在寻找符合`(n)`条件的元素时，总是在同父级的`E`标签列表里寻找。如果没有设置，则为`*`。

解析`.boo:nth-of-type(2n)`，就是`*:nth-of-type(2n).boo`，先寻找符合`*:nth-of-type(2n)`的，再寻找**与**`.boo`，所以最终结果就是`span-boo-1`,`span-boo-3`,`span-boo-4`。

所以回到本例，想要设置每偶数个`class="boo"`的元素样式，除了把`class="boo"`的元素标签换成其他标签，暂时没想到其他的方法。