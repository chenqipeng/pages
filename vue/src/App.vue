<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

.nav
  position fixed
  top 0
  left 0
  right 0
  height 40px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
