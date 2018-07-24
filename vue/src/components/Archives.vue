<template>
  <div>
    <ul>
      <li
        v-for="post in archivesData"
        :key="post.oid">
        <a :href="'/post/'+post.name">{{post.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { GraphQLClient } from 'graphql-request'

export default {
  name: 'Archives',

  data () {
    return {
      archivesData: [],
      client: new GraphQLClient('https://api.github.com/graphql', {
        headers: {
          Authorization: 'bearer 1fcd6d38878f79c0f92203d5369d9efcece042be'
        }
      })
    }
  },

  created () {
    this.queryArchives()
  },

  methods: {
    queryArchives () {
      const queryTree = `
        query($object_expression:String!) {
          repository(owner: "chenqipeng", name: "pages") {
            object(expression: $object_expression) {
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

      let variables = {
        object_expression: 'master:hexo/source/_posts/'
      }

      this.client
        .request(queryTree, variables)
        .then(data => {
          this.archivesData = data.repository.object.entries
        })
        .catch(error => {
          console.log(error)
          debugger
        })
    }
  }

}
</script>

<style>

</style>
