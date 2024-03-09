import { message } from "antd";


/*
* 通过组件库的静态方法调用弹窗
* fn: 调用的接口
* setLoading: 控制加载样式的函数
* successMsg: 调用成功输出信息 默认输出null
* errorMsg: 调用失败输出信息 默认输出接口返回的错误信息
* successCallback: 成功时需要执行的回调函数
* errorCallback: 失败需要执行的回调
* */
const submitAutoMessage = (fn, setLoading, successMsg, errorMsg, successCallback = () => {}, errorCallback = () => {}) => {
    setLoading(true);
    return fn().then(resp => {
        setLoading(false);
        successMsg && message.success(successMsg || '请求成功');
        successCallback(resp);
    }).catch(error => {
        message.error( errorMsg || error.data.msg);
        errorCallback();
        setLoading(false);
    });
}

export default submitAutoMessage;
