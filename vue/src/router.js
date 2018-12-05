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
            archives: Archives
          }
        },
        {
          path: 'tag/:tag',
          name: 'tag',
          components: {
            archives: Archives
          },
          props: {
            archives: true
          }
        },
        {
          path: 'category/:category',
          name: 'category',
          components: {
            archives: Archives
          },
          props: {
            archives: true
          }
        },
        {
          path: 'post/:name',
          name: 'post',
          components: {
            archives: Archives,
            post: Post
          },
          props: {
            archives: true,
            post: true
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
