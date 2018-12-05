<template>
  <ul class="posts-list">
    <li
      v-for="post in archivesData"
      :key="post.name">
      <span :title="post.name" @click="checkPost(post.name)">{{post.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Archives',

  props: {
    tag: {
      type: String,
      default: ''
    },

    category: {
      type: String,
      default: ''
    }
  },

  computed: {
    archivesData () {
      if (this.tag) {
        return (this.$store.getters.getArchivesByTag(this.tag) || []).map(el => ({name: el}))
      } else if (this.category) {
        return (this.$store.getters.getArchivesBycategory(this.category) || []).map(el => ({name: el}))
      } else {
        return this.$store.state.archives
      }
    }
  },

  methods: {

    checkPost (name) {
      this.$router.push('/post/' + name)
      // this.$emit('checkPost', name)
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
    span
      color #0366d6
      &:hover
        cursor pointer
</style>
