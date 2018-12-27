<template>
  <div class="app-container">

    <AppHeader class="app-header"/>

    <router-view class="app-side" name="side"/>

    <router-view class="app-main" name="main"/>

  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'home',

  components: {
    AppHeader
  },

  computed: {

  }
}
</script>

<style lang="stylus" scoped>
app-header-height = 55px
app-side-width = 240px
app-side-offset = 10px

.app-container
  margin-top app-header-height

.app-header
  position fixed
  top 0
  left 0
  right 0
  height app-header-height
  z-index 2

.app-side
  position fixed
  top app-header-height + app-side-offset
  left app-side-offset
  bottom app-side-offset
  width app-side-width
  overflow auto

.app-main
  margin-left app-side-width + app-side-offset * 2

</style>
