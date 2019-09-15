<template >
    <div  id="showBlogs">
       <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="输入题目搜索...">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h2 v-titleColor>{{blog.title | to-uppercase}}</h2>
          </router-link>
        <article class="articleContent">{{blog.content | to-snippet}}</article>
      </div>
      <div class="back-top"><a href="#"><i class="el-icon-caret-top"></i></a></div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "ShowBlogs",
      data(){
        return{
          blogs:[],
          search:''
        }
      },
      created() {
          axios.get('https://vue-blog-e72a8.firebaseio.com/posts.json')
            .then(function (data) {
              //console.log(data);
              return  data.data ;
            }).then((data)=>{
              var blogsArray = [];
              for(let key in data){
                //console.log(key);
                data[key].id = key;
                blogsArray.push(data[key]);
              }
              this.blogs = blogsArray;
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
  max-width: 720px;
  margin: 80px auto;
  background-color: #f3f4f4;
  padding:5px 25px;
  box-sizing: border-box;
}
h1{
  font-size: 30px;
}
  .single-blog{
    padding: 20px;
    margin:20px 0 ;
    box-sizing: border-box;
    background: #fdfdfe;
  }
  #showBlogs a{
    text-decoration: none;
  }
  h2{
    margin-bottom: 10px;
    font-size: 20px;
  }
  input[type="text"] {
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border: none;
  }
.articleContent{

}
.back-top{
  position: fixed;
  top: 600px;
  right: 330px;
  width: 50px;
  height: 50px;
  border: 1px solid #e4e4e4;
  border-radius: 25px;
}
.back-top i{
  font-size: 50px;
  color: #444444;
}
</style>
