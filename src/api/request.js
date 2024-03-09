import axios from "axios";

const request = axios.create({
    timeout: 5000
})

request.interceptors.request.use(config => {
    // 如果有token就带过去
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer' + token;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

request.interceptors.response.use(resp => {
    if (resp.data.code){
        return resp.data.code === 200 ? Promise.resolve(resp.data) : Promise.reject(resp);
    } else {
        /*
        * 防止接口没有返回code接口 导致报错
        * */
        return Promise.resolve(resp.data)
    }

}, error => {
    return Promise.reject(error);
})

export default request;
