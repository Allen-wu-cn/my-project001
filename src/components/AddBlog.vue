<template>
  <div id="addBlog">
    <h2>添加博客</h2>
    <form v-if="!subSuccess">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required >
      <label >博客内容</label>
      <textarea name="" v-model="blog.content" required></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>微信小程序</label>
        <input type="checkbox" value="微信小程序" v-model="blog.categories">

      </div>
      <label >作者</label>
      <select v-model="blog.author">
        <option  v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click="post">提交</button>
    </form>
    <div v-if="subSuccess">
       <h3>您的博客发布成功</h3>
    </div>
    <div id="preview" class="preview" >
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <article>{{blog.content}}</article>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'AddBlog',
    data() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: ''
        },
        authors: ['kebo', 'james', 'curry', 'allen-wu'],
        subSuccess: false
      }
    },
    methods: {
      post: function () {
        if(this.blog.title !== "") {
          axios.post('https://vue-blog-e72a8.firebaseio.com/posts.json', this.blog)
            .then((data) => {
              this.subSuccess = true;
            });
        }else {
          return false;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addBlog *{
  box-sizing: border-box;
}
  #addBlog{
    margin: 80px auto;
    max-width: 720px;
    padding: 5px 25px;
    background-color: #f3f4f4;
  }
  #addBlog h2{
    font-size: 30px;
  }
  label{
    display: block;
    margin: 20px 0px 10px;
  }
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
    border: none;
  }
/*input:invalid {*/
/*  box-shadow: 0 0 2px 1px red;*/
/*}*/
  textarea{
    height: 250px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
    margin-left: 10px;
  }
#checkboxes label:nth-child(1){
  margin-left: 0;
}
  button{
    display: block;
    margin: 20px 0;
    background: #1197fe;
    color: white;
    border: 0;
    padding:7px 15px;
    border-radius:5px ;
    font-size: 18px;
    cursor: pointer;
  }

  .preview{
    padding: 10px 20px;
    border: none;
    margin: 30px 0;
    background-color: #fdfdfe;
  }
  .preview>h3,p,ul{
    margin: 10px 0;
  }
  h3 {
    font-size: 25px;
  }
  .preview>article{
    white-space:pre-wrap;
  }
</style>
