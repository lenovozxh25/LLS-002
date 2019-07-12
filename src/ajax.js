import axios from 'axios';

// 创建Ajax请求对象
const request = axios.create({
    baseURL: 'http://10.119.167.182:9090'
});

// 对外输出模块
export default request;