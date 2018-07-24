<template>
  <div>
    <h1>{{postData.attributes.title}}</h1>
    <div id="md" class="md markdown-body" v-html="postData.body"/>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import FrontMatter from 'front-matter'
import hljs from 'highlight.js'
import {
  RepositoryOwner,
  RepositoryName,
  RepositoryBranch,
  RepositoryPath
} from '@/GraphQLConfig'

export default {
  name: 'Post',

  data () {
    return {
      postData: {
        attributes: {
          title: '',
          date: '',
          categories: [],
          tags: []
        },
        body: ''
      }
    }
  },

  created () {
    this.queryPostData()
  },

  methods: {

    queryPostData () {
      const query = `
        query {
          repository(owner: "${RepositoryOwner}", name: "${RepositoryName}") {
            object(expression: "${RepositoryBranch + RepositoryPath + this.$route.params.name}") {
              ... on Blob {
                text
              }
            }
          }
        }
      `

      this.client
        .request(query)
        .then(data => {
          let markdownIt = new MarkdownIt({
            highlight (str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value
                } catch (error) {
                  console.error('highlight error :(')
                }
              }
              return ''
            }
          })
          let dataObj = FrontMatter(data.repository.object.text)
          dataObj.body = markdownIt.render(dataObj.body)
          this.postData = dataObj
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
