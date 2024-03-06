import axios from "axios";

const request = axios.create({
    timeout: 5000
})

request.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})

request.interceptors.response.use(resp => {
    console.log(resp.data);
    return resp.data.code === 200 ? Promise.resolve(resp.data) : Promise.reject(resp);
}, error => {
    return Promise.reject(error);
})

export default request;
