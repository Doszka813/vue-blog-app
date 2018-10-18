<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search in blogs..." />
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" v-bind:key="index">
      <h2 v-rainbow>{{blog.title | toUpper}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
      this.blogs = data.body.slice(0, 10);
    })
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    },
    'snippet': function (value) {
      return value.slice(0, 100) + '...';
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [ searchMixin]
}
</script>

<style lang="scss">
@import './src/styles/variables';

#show-blogs {
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  box-sizing: border-box;

  .single-blog {
    color: white;
    display: block;
    margin: 15px 0;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;
    border-bottom: 1px solid $violet;

    article {
      margin: 0 auto;
    }

    h2 {
      font-weight: 700
    }
  }
}
</style>
