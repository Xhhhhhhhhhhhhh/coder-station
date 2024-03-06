import request from "./request";


/*
* 用户登录
* */
const login = async (data) => {
    return request({
        method: 'POST',
        url: '/api/user/login',
        data
    });
}

/*
* 用户注册
* */
const register = data => request({
    method: 'POST',
    url: '/api/user',
    data
})

export {
    login,
    register
}
