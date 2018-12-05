<template>
  <div id="app">

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
      this.$store.dispatch('setArchivesRemote')
      this.$store.dispatch('setAttrRemote')
    }

  }
}
</script>

<style lang="stylus">
// #04202c
// #304040
// #5b7065
// #c9d1c8

body
  margin 0

ul
  list-style none
  margin 0
  padding 0
</style>
