<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
    <div v-theme:column="'narrow'" id="showBlogs">
       <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h2 v-titleColor>{{blog.title | to-uppercase}}</h2>
          </router-link>
        <article>{{blog.body | to-snippet}}</article>
      </div>
    </div>
</template>

<script>
    export default {
        name: "showBlogs",
      data(){
        return{
          blogs:[],
          search:''
        }
      },
      created() {
          this.$http.get('./../static/posts.json')
            .then(function (data) {
              //console.log(data);
              this.blogs = data.body.slice(0,10);
              console.log(this.blogs);
            })
      },
      computed:{
        filteredBlogs:function () {
          return this.blogs.filter((blog)=>{
            return blog.title.match(this.search);  //boolean
          })
        }
      }
    }
</script>

<style scoped>
#showBlogs{
  max-width: 800px;
  margin: 0 auto;

}

  .single-blog{
    padding: 20px;
    margin:20px 0 ;
    box-sizing: border-box;
    background:#eee ;
    border: 1px dotted #aaa;

  }
  #showBlogs a{
    text-decoration: none;

  }
  input[type="text"]{
       padding:10px;
       width: 100%;
       box-sizing: border-box;
  }

</style>
