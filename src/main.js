import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import request from './ajax.js';
import store from './store';
import {Message} from "element-ui"
import moment from 'moment'


Vue.prototype.$message = Message;
Vue.prototype.$moment = moment;
// 为Vue对象添加一个继承属性
Vue.prototype.$http = request;
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
