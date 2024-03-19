import request from "./request";

const getQuetions = (data) => {
    return request({
        method: 'GET',
        url: '/api/issue',
        params: data
    })
}
/*
* 通过id获取问题详情
* */
const getQuestionById = id => request({
    method: 'GET',
    url: `/api/issue/${id}`
})

export {
    getQuetions,
    getQuestionById
}
