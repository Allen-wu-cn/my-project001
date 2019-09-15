<template >
  <div class="BlogBody">
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <P>作者：{{blog.author}}</P>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
    name:'BlogDetail',
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        axios.get('https://vue-blog-e72a8.firebaseio.com/posts/' + this.id + ".json")
        .then((data)=>{
            //data.console.log(data)
          this.blog = data.data;
        })
    }
}
</script>

<style>
  .BlogBody{
    max-width: 720px;
    margin: 80px auto;
    background-color: #f2f3f3;
    padding: 10px 25px;
  }
#single-blog{
  background-color: #fbfcfd;
  padding: 5px 15px;
}
h1{
  font-size: 20px;
}
  #single-blog article{
    white-space:pre-wrap;
  }
</style>
