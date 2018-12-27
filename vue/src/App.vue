<template>
  <div id="app" class="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',

  created () {
    this.initData()
  },

  methods: {

    initData () {
      this.$store.dispatch('setDigestRemote')
    }

  }
}
</script>

<style lang="stylus">
body
  margin 0
</style>
