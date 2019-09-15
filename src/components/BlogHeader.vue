<template>
    <nav>
      <div class="logo">Allen-wu</div>
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
    name:'BlogHeader'
}
</script>

<style scoped>
  nav {
    height: 60px;
    width: 100%;
    background: rgb(3, 155, 229);
    padding: 5px 0;
    margin-bottom: 20px;
    position: fixed;
    top: 0;
  }
  nav .logo{
    float: left;
    line-height: 60px;
    color: white;
    font-size: 20px;
    margin-left: 20px;
  }
  ul{
    margin-right: 60px;
  text-align: center;
  list-style-type: none;
  line-height: 60px;
  box-sizing: border-box;
}
li{
    display: inline-block;
}
a{
    color: #fff;
    text-decoration: none;
    padding:7px 10px;
    border-radius: 5px;

}
.router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
}

</style>
