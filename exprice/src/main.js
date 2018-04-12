import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'; //引入store
Vue.config.productionTip = false   //生产环境提示，这里设置成了false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //挂载store
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})