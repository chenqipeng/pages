<template>
  <header class="header-container">

    <div class="nav-item">
      <a href="/#/" class="nav-btn">Home</a>
    </div>

    <div class="nav-item">
      <span class="nav-btn">Tags</span>
      <ul class="nav-expand-list">
        <li v-for="(tag, index) in tags" :key="index">
          <a :href="'/#/tag/' + tag">{{tag}}</a>
        </li>
      </ul>
    </div>

    <div class="nav-item">
      <span class="nav-btn">Categories</span>
      <ul class="nav-expand-list">
        <li v-for="(category, index) in categories" :key="index">
          <a :href="'/#/category/' + category">{{category}}</a>
        </li>
      </ul>
    </div>

    <div class="nav-item">
      <a href="/#/about" class="nav-btn">About</a>
    </div>

  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',

  computed: {
    ...mapGetters({
      tags: 'getTags',
      categories: 'getCategories'
    })
  }

}
</script>

<style lang="stylus" scoped>
header-bgc = #04202c
link-color = #ddd
link-hover-color = #fff

a
a:visited
  color link-color
  text-decoration none

.header-container
  height 100%
  background-color header-bgc

.nav-item
  float left
  height 100%
  padding 0 10px
  &:hover
    cursor pointer
    .nav-expand-list
      display block

.nav-btn
  display flex
  align-items center
  height 100%
  color link-color

.nav-expand-list
  display none
  position absolute
  width 200px
  margin 0
  padding 0
  list-style none
  background-color header-bgc
  li
    padding 0 10px
    height 38px
    line-height 38px
    a
      display block
      &:hover
        color link-hover-color
</style>
