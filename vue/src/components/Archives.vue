<template>
  <ul class="posts-list">
    <li
      v-for="post in archivesData"
      :key="post.title">
      <a :href="'/#/post/' + post.id" :title="post.title">{{post.title}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Archives',

  data () {
    return {
      archivesData: []
    }
  },

  watch: {
    '$store.state.archives' () {
      this.updateArchivesData()
    },
    '$route' () {
      this.updateArchivesData()
    }
  },

  created () {
    this.updateArchivesData()
  },

  methods: {
    updateArchivesData () {
      switch (this.$route.name) {
        case 'home':
          this.archivesData = this.$store.state.archives
          break
        case 'tag':
          this.archivesData = this.$store.getters.getArchivesByTag(this.$route.params.tag) || []
          break
        case 'category':
          this.archivesData = this.$store.getters.getArchivesByCategory(this.$route.params.category) || []
          break
        default:
          if (!this.archivesData.length) {
            this.archivesData = this.$store.state.archives
          }
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.posts-list
  margin 0
  padding 0
  list-style none
  li
    height 30px
    line-height 30px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    a
      color #0366d6
      text-decoration none
</style>
