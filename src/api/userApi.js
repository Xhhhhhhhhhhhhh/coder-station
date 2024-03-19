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

/*
* 恢复登录
* */
const whoAmI = () => request({
    method: 'GET',
    url: '/api/user/whoami'
})

/*
* 通过id得到用户详细详细
* */
const getUserById = id => request({
    method: 'GET',
    url: `/api/user/${id}`
})

export {
    login,
    register,
    whoAmI,
    getUserById
}
