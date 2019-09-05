<template>
    <nav>
        <ul>
            <li> 
                <!-- 使用exact来让active进行切换 -->
                <router-link to='/' exact>博客</router-link>
                <router-link to='/add' exact>写博客</router-link>
            </li>
            
        </ul>
    </nav>
</template>

<script>
export default {
    name:'blog-header'
}
</script>

<style scoped>
ul{
  text-align: center;
  list-style-type: none;
   margin: 0;
}
li{
   
    display: inline-block;
    margin:0 20px;
    
}
a{
    color: #fff;
    text-decoration: none;
    padding: 15px;
    border-radius: 5px;
    
}
nav{
    background: rgb(86, 240, 111);
    padding: 30px 0;
    margin-bottom: 20px;
}
.router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
}

</style>
