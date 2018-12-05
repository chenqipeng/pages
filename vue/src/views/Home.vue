<template>
  <div class="app-container">

    <AppHeader class="app-header"/>

    <router-view class="archives" name="archives"/>

    <router-view class="post" name="post"/>

  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'home',

  components: {
    AppHeader
  }
}
</script>

<style lang="stylus">
app-header-height = 55px
app-side-width = 240px
app-side-offset = 10px

.app-container
  // position relative

.app-header
  position fixed
  top 0
  left 0
  right 0
  height app-header-height
  z-index 2

.archives
  position fixed
  top app-header-height + app-side-offset
  left app-side-offset
  width app-side-width

.post
  margin-left app-side-width + app-side-offset * 2
  margin-top app-header-height

</style>
