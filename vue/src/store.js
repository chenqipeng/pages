import Vue from 'vue'
import Vuex from 'vuex'
import { HttpClient } from './http/HttpClient'
import { PresetQuery } from './http/GraphQLConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagMap: {},
    categoryMap: {},
    archives: []
  },

  getters: {
    getPostById (state) {
      return id => state.archives.find(el => el.id == id)
    },

    getTags (state) {
      return Object.keys(state.tagMap)
    },

    getCategories (state) {
      return Object.keys(state.categoryMap)
    },

    getArchivesByTag (state) {
      return tag => state.tagMap[tag]
    },

    getArchivesByCategory (state) {
      return category => state.categoryMap[category]
    }
  },

  mutations: {
    setTagMap (state, val) {
      state.tagMap = val
    },
    setCategoryMap (state, val) {
      state.categoryMap = val
    },
    setArchives (state, val) {
      state.archives = val
    }
  },

  actions: {

    setDigestRemote ({ commit }) {
      const Query = PresetQuery.queryDigest()
      HttpClient.request(Query)
        .then(data => {
          let dataList = JSON.parse(data.repository.object.text)
          let tagMap = {}
          let categoryMap = {}

          dataList.forEach(item => {
            item.tags.forEach(tag => {
              if (!tagMap[tag]) {
                tagMap[tag] = []
              }
              tagMap[tag].push(item)
            })

            item.categories.forEach(categorie => {
              if (!categoryMap[categorie]) {
                categoryMap[categorie] = []
              }
              categoryMap[categorie].push(item)
            })
          })

          commit('setArchives', dataList)
          commit('setTagMap', tagMap)
          commit('setCategoryMap', categoryMap)
        })
        .catch(error => {
          console.log(error)
        })
    }

  }
})
