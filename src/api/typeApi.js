import request from "./request";

/*
* 获取全部类型
* */
const getType = () => {
    return request({
        method: 'GET',
        url: '/api/type'
    })
}

export {
    getType
}
