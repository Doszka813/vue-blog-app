<template>
  <div id="add-blog">
      <h2>Add a new blog post</h2>
      <form>
          <label>Blog title:</label>
          <input type="text" v-model.lazy="blog.title" required/>
          <label>Blog content:</label>
          <textarea v-model.trim.lazy="blog.content"></textarea>
          <div id="checkboxes">
              <label>Lifestyle</label>
              <input type="checkbox" value="lifestyle" v-model="blog.categories"/>

              <label>Technology</label>
              <input type="checkbox" value="technology" v-model="blog.categories"/>

              <label>Crafts</label>
              <input type="checkbox" value="crafts" v-model="blog.categories"/>

              <label>Movies</label>
              <input type="checkbox" value="movies" v-model="blog.categories"/>
          </div>
          <label>Author:</label>
          <select v-model="blog.author">
                <option v-for="(author, index) in authors" v-bind:key="index">{{author}}</option>
          </select>
      </form>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{blog.title}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
          <li v-for="(category, index) in blog.categories" v-bind:key="index">{{category}}</li>
        </ul>
        <p>Author: {{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Dominika", "Vue", "Guest"]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
    label {
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea {
        display: block;
        width: 100%;
        padding: 8px;
    }
    #checkboxes {
        input {
            display: inline-block;
            margin-right: 10px;
        }
        label {
            display: inline-block;
        }
    }
    #preview {
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
        ul {
            list-style: none;
            li {
                position: relative;
                left: -40px;
                display: inline-block;
                padding: 2px 5px;
                border-radius: 2px;
                margin-right: 5px;
                background-color: rgb(129, 103, 223);
            }
        }
    }    
}
</style>
