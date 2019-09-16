<template >
    <div  id="showBlog" class="showBlogs">
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
              return data.data;
            }).then((data)=>{
              var blogsArray = [];
              for(let key in data){
                //console.log(key);
                data[key].id = key;
                blogsArray.push(data[key]);
              }
              this.blogs = blogsArray.reverse();
              //console.log(this.blogs)
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
.showBlogs{
  max-width: 720px;
  margin: 80px auto;
  margin-bottom: 10px;
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
  white-space:pre-wrap;
}
.back-top{
  position: fixed;
  bottom: 130px;
  right: 330px;
  width: 50px;
  height: 50px;
}
.back-top i{
  font-size: 50px;
  color: #e4e4e4;
  background-color: #1197fe;
  box-shadow: 0px 1px 5px rgba(7, 10, 51, 0.92);
  border-radius: 50px;
}
</style>
