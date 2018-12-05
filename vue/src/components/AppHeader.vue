<template>
  <header class="header-container">

    <a href="/#/" class="nav-item">
      <span class="nav-btn">Home</span>
    </a>

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

    <a href="/#/about" class="nav-item">
      <span class="nav-btn">About</span>
    </a>

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

.header-container
  display flex
  justify-content flex-start
  background-color header-bgc

a
a:visited
  color link-color
  text-decoration none

.nav-item
  color link-color
  padding 0 10px
  height 100%
  &:hover
    .nav-btn
      cursor pointer
    .nav-expand-list
      display block

.nav-btn
  display: flex;
  height: 100%;
  align-items: center;
  font-size 16px

.nav-expand-list
  display none
  position absolute
  width 200px
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
