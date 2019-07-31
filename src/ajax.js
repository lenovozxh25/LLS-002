import axios from 'axios';

// 创建Ajax请求对象
const request = axios.create({
     baseURL: 'http://10.119.167.182:9090/v2.0/lls',  //高龙接口地址
      // baseURL: 'http://10.119.129.135:9090/v2.0/lls',   //廉泽接口地址
    withCredentials:true
});

// 对外输出模块
export default request;