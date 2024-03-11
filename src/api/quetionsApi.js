import request from "./request";

const getQuetions = (data) => {
    return request({
        method: 'GET',
        url: '/api/issue',
        params: data
    })
}

export {
    getQuetions
}
