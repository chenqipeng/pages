<template>
  <div>
    <h1>{{postData.attributes.title}}</h1>
    <div id="md" class="md markdown-body" v-html="postData.body"/>
  </div>
</template>

<script>
import { GraphQLClient } from 'graphql-request'
import MarkdownIt from 'markdown-it'
import FrontMatter from 'front-matter'
import hljs from 'highlight.js'

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
      },
      client: new GraphQLClient('https://api.github.com/graphql', {
        headers: {
          Authorization: 'bearer 1fcd6d38878f79c0f92203d5369d9efcece042be'
        }
      })
    }
  },

  created () {
    this.queryPostData()
  },

  methods: {
    queryPostData () {
      const queryBlob = `
        query($object_expression:String!) {
          repository(owner: "chenqipeng", name: "pages") {
            object(expression: $object_expression) {
              ... on Blob {
                text
              }
            }
          }
        }
      `

      let variables = {
        object_expression: 'master:hexo/source/_posts/' + this.$route.params.name
      }

      this.client
        .request(queryBlob, variables)
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
          debugger
        })
    }
  }
}
</script>

<style>

</style>
