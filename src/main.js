// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from  'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from  './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);


//自定义指令
Vue.directive("titleColor",{
  bind(el,binding,vnode){
    //el.style.color = 'red'
    //下面是拼接一个随机数字与#组成随机颜色
    el.style.color = '#' + Math.random().toString(16).slice(2,8)
  }
});

Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value == 'wide'){
        el.style.maxWidth = '1200px';
    }else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }

    if (binding.arg == 'column') {
      el.style.background = '#6677cc';
      el.style.padding = '20px'
    }
  }
});

//自定义过滤器
Vue.filter("to-uppercase",function (value) {
    return value.toUpperCase();
});

Vue.filter("to-snippet",function (value) {
    return value.slice(0,100) + "...";
});

//创建路由
const router = new VueRouter({
      routes: Routes,
      mode:"history"  //解决路由带#的情况
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router : router,
  render: h => h(App)

})
