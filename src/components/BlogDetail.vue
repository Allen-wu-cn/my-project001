<template >
  <div class="BlogBody">
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <P>作者：{{blog.author}}</P>
      <el-button type="primary" icon="el-icon-delete" class="DeleteBtn" v-on:click="onRemove"></el-button>
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
    created() {
      axios.get('https://vue-blog-e72a8.firebaseio.com/posts/' + this.id + ".json")
        .then((data) => {
          //data.console.log(data)
          this.blog = data.data;
        })
    },
  methods:{
      onRemove:function () {
          axios.delete('https://vue-blog-e72a8.firebaseio.com/posts/' + this.id + ".json")
            .then((res)=>{
            //console.log(res)
              this.$router.go(-1);
        })
      }
  }
}
</script>

<style>
  .BlogBody{
    max-width: 720px;
    margin: 80px auto;
    margin-bottom: 50px;
    background-color: #f2f3f3;
    padding: 15px 25px;
    box-sizing: border-box;
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
  .DeleteBtn{
    margin-top: 10px;
    margin-left: 580px;
    background-color: #1988f9;
    color: #ffffff;
  }
</style>
