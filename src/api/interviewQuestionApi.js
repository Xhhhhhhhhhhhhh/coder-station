import request from "./request";

const getInterviewTitles = () => {
    return request({
        method: 'GET',
        url: '/api/interview/interviewTitle'
    })
}

const getInterviewTitle = id => {
    return request({
        method: 'GET',
        url: `/api/interview/${id}`,
    })
}




export {
    getInterviewTitles,
    getInterviewTitle
}
