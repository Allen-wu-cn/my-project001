<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <P>作者：{{blog.author}}</P>
    </div>
</template>

<script>
export default {
    name:'single-blog',
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://vue-blog-e72a8.firebaseio.com/posts/' + this.id + ".json")
        .then(function(data){
            //data.console.log(data);
            //this.blog = data.body;
            return data.json();
        })
        .then(function(data){
            this.blog = data;
        })
    }
}
</script>

<style>
#single-blog{
    max-width: 720px;
    margin: 0 auto;
    padding: 10px;
    background: #eee;
    border: 1px solid #aaa;
}

</style>
