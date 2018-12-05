<template>
  <div>
    <h1>{{postData.attributes.title}}</h1>
    <p>{{postData.attributes.categories.join(',')}}</p>
    <p>{{postData.attributes.tags.join(',')}}</p>
    <div id="md" class="md markdown-body" v-html="postData.body"/>
  </div>
</template>

<script>
import { PresetQuery } from '../http/GraphQLConfig'
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
      }
    }
  },

  created () {
    this.queryPostData()
  },

  beforeRouteUpdate (to, from, next) {
    next()
    this.queryPostData()
  },

  methods: {

    queryPostData () {
      const Query = PresetQuery.queryPost(this.$route.params.name)
      this.httpClient
        .request(Query)
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
