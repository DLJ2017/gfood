// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由，就是引入配置好的路由表
import router from './router'

import FastClick from 'fastclick'
FastClick.attach(document.body);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  // 为根组件加入路由
  router
})
