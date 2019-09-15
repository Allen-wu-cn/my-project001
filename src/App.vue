<template>
  <div id="app">
<!--     <addBlog></AddBlog>-->
<!--    <showBlogs></showBlogs>-->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
//import addBlog from  './components/addBlog'
//import showBlogs from  './components/showBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
   // addBlog,
    //showBlogs,
    BlogHeader
  }
}
</script>

<style>
#app{
  font-family: 微软雅黑;
}
</style>
