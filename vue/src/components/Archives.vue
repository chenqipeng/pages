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

<style>

</style>
