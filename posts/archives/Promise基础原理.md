---
title: Promise基础原理
date: 2018-04-19 00:25:02
id: 2018041910
categories:
- stuff
tags:
- Javascript
---

```javascript
class P {
  constructor (fn) {
    this.resoleveCbs = []
    this.resoleveFn = () => this.resoleveCbs.forEach(cb => cb())
    fn(this.resoleveFn)
  }
  
  then (cb) {
    this.resoleveCbs.push(cb)
  }
}

console.log('start')

let p = new P(resolve => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

p.then(() => {
  console.log('resolve')
})
```
