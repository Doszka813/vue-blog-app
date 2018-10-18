<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All articles</h1>
    <input type="text" v-model="search" placeholder="search in blogs..."/>
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" v-bind:key="index">
        <h2 v-rainbow ><span>{{blog.id}}. </span>{{blog.title | toUpper}}</h2>
        <article>{{blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      blogs: [],
      search: ""  
    }
  },
  methods: {
    get: function() {
          
    }
  },
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) { 
        this.blogs = data.body.slice(0, 10);
      })
  },
  computed: {
      filteredBlogs: function() {
          return this.blogs.filter((blog) => {
              return blog.title.includes(this.search); 
          });
      }
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase(); 
    },
    'snippet': function(value) {
      return value.slice(0,100) + '...'; 
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  }   
}
</script>

<style lang="scss">
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
    background-color: rgb(89, 101, 138);
    article {
        margin: 0 auto;
    }
    h2 {
        font-weight: 700
    }
  }

}


</style>
