<template>
  <div>
    <h1>{{postData.attributes.title}}</h1>

    <div id="md" class="md markdown-body" v-html="postData.body"/>

    <div class="post-attributes-container">
      <a
        v-for="category in postData.attributes.categories"
        :key="category"
        :href="'/#/category/' + category">
        /{{category}}
      </a>
      <a
        v-for="tag in postData.attributes.tags"
        :key="tag"
        :href="'/#/tag/' + tag">
        #{{tag}}
      </a>
    </div>

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
      },
      markdownIt: new MarkdownIt({
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
    }
  },

  watch: {
    '$store.state.archives' () {
      console.log(111)
      this.queryPostData()
    },
    '$route' () {
      console.log(222)
      this.queryPostData()
    }
  },

  created () {
    this.queryPostData()
  },

  methods: {

    queryPostData () {
      console.log(this.$route.params.id)
      let post = this.$store.getters.getPostById(this.$route.params.id)
      console.log(post)
      if (post) {
        const Query = PresetQuery.queryPost(post.title)
        this.httpClient
          .request(Query)
          .then(data => {
            if (data.repository.object) {
              let dataObj = FrontMatter(data.repository.object.text)
              dataObj.body = this.markdownIt.render(dataObj.body)
              this.postData = dataObj
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

  }
}
</script>

<style lang="stylus" scoped>
.post-attributes-container
  margin-top 10px
  a
    color #0366d6
    text-decoration none
</style>
