import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import request from './ajax.js';
import { Message } from "element-ui"
import moment from 'moment'
import 'video.js/dist/video-js.css'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.prototype.$message = Message;
Vue.prototype.$moment = moment;
// 为Vue对象添加一个继承属性
Vue.prototype.$http = request;
Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {  //路由切换时触发（！）
  // debugger
  if (to.meta.requiresAuth) {
    //这里判断用户是否登录
    request.get(`/permit/isSessionEffective`).then(res => {
      if (!res.data) {
        Vue.prototype.$alert('登录状态已失效,请重新登录！', {   //Vue.prototype 调用组件alert方法
          confirmButtonText: '知道啦',
          type: 'warning',
          callback: () => {
            window.localStorage.clear();
            next({
              path: '/logined',
              query: { redirect: to.fullPath }
            })
          }
        });
      } else {
        next()
      }
    })

  } else {
    next() // 确保一定要调用 next()
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
