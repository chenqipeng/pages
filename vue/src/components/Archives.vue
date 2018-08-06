<template>
  <ul class="posts-list">
    <li
      v-for="post in archivesData"
      :key="post.oid">
      <span @click="checkPost(post.name)">{{post.name}}</span>
      <!-- <a :href="'/post/'+post.name">{{post.name}}</a> -->
    </li>
  </ul>
</template>

<script>
import {
  RepositoryOwner,
  RepositoryName,
  RepositoryBranch,
  RepositoryPath
} from '@/GraphQLConfig'

export default {
  name: 'Archives',

  data () {
    return {
      archivesData: []
    }
  },

  created () {
    this.queryArchives()
  },

  methods: {

    checkPost (name) {
      this.$router.push('/post/' + name)
      this.$emit('checkPost', name)
    },

    queryArchives () {
      const query = `
        query {
          repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
            object(expression: "${RepositoryBranch + RepositoryPath}") {
              ... on Tree {
                entries {
                  name
                  type
                  oid
                }
              }
            }
          }
        }
      `

      this.client
        .request(query)
        .then(data => {
          this.archivesData = data.repository.object.entries
        })
        .catch(error => {
          console.log(error)
        })
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
    span
      color #0366d6
      &:hover
        cursor pointer
</style>
