// vuex状态管理
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

// 全局注册
Vue.use(Vuex);

// 创建Store对象
const store = new Vuex.Store({
    state:{
        // 登录状态
        isLogined: false,
        //登录用户名
        loginName:'',
        //登录密码
        password:'',
        count:0
    },
    getters:{
        
    },
    mutations,
    actions
})

// 对外输出模块
export default store;