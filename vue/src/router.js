import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Post from '@/components/Post.vue'
import Archives from '@/components/Archives.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      name: 'not_found',
      component: NotFound
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          components: {
            side: Archives
          }
        },
        {
          path: 'tag/:tag',
          name: 'tag',
          components: {
            side: Archives
          }
        },
        {
          path: 'category/:category',
          name: 'category',
          components: {
            side: Archives
          }
        },
        {
          path: 'post/:id',
          name: 'post',
          components: {
            side: Archives,
            main: Post
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
