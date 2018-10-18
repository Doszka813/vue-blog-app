<template>
  <div>
    <nav>
      <router-link to="/">Add new</router-link>
      <router-link to="/blogs">Blogs</router-link>
      <router-link to="/list">List</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs

  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import './src/styles/variables';

body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  height: 100vh;
  nav {
    margin: 0 auto;
    padding: 10px;
    font-size: 26px;
    text-align: center;
    background-color: $violet;
    a {
      margin-right: 40px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
