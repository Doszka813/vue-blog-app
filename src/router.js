import Vue from 'vue'
import Router from 'vue-router'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import addBlog from './components/addBlog.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'addBlog',
      component: addBlog
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: showBlogs
    },
    {
      path: '/list',
      name: 'list',
      component: listBlogs
    }
  ]
})