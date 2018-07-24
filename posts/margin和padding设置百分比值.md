---
title: margin和padding设置百分比值
date: 2018-04-19 00:23:07
categories:
- stuff
tags:
- CSS
---

margin和padding设置百分比值，是基于父元素contain-box的宽度计算的。

> margin: The percentage is calculated with respect to the width of the generated box's containing block. Note that this is true for 'margin-top' and 'margin-bottom' as well. If the containing block's width depends on this element, then the resulting layout is undefined in CSS 2.1.

> padding: The percentage is calculated with respect to the width of the generated box's containing block, even for 'padding-top' and 'padding-bottom'. If the containing block's width depends on this element, then the resulting layout is undefined in CSS 2.1.

* 基于这个设置，可以做到很多效果，如等比盒子，圣杯布局等
* [为什么基于父元素计算？为什么基于宽度计算？](https://www.hongkiat.com/blog/calculate-css-percentage-margins/)大致来说，基于父元素是为了实现布局，基于宽度是为了水平垂直设置的一致性和避免计算循环依赖
  > If I set a div to be 50% of the width of its container, and then I want its left and right margins to fill the rest of the space, I’d naturally set them to 25% each (so the percentages add up to 100%). For that to work, percentage margins must be based on the dimensions of the container.

  > 1.Horizontal and Vertical Consistency 2.Avoiding Circular Dependency