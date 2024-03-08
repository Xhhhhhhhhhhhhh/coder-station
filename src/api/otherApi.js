import request from "./request";

const getCaptcha = () => {
    return request({
        method: 'GET',
        url: '/res/captcha'
    })
}

export {
    getCaptcha
}
