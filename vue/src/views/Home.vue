<template>
  <div class="home">
    <div class="side-bar">
      <Archives/>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Archives from '@/components/Archives.vue'

export default {
  name: 'home',
  components: {
    Archives
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding-left 350px

.side-bar
  position fixed
  top 30px
  left 0
  width 350px
</style>
