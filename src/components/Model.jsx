import { Modal, notification } from 'antd'
import { useState } from "react";


/*
* Model: 这是一个集成的弹出框组件
* children: jsx
* controller: 显示弹窗bool
* cancel: 弹窗控制器
* submitFunc: 返回promise的函数
*
* */
function Model(props) {
    const [api, contextHolder] = notification.useNotification();
    const openMessage = (type, message, description) => {
        api[type]({
            message,
            description
        })
    }
    const { controller, cancel, submitFunc } = props;
    const [ loading, setLoading ] = useState(false);
    const handleSubmit = () => {
        setLoading(true);
        submitFunc().then(resp => {
            setLoading(false);
            openMessage('success', '提交成功', '');
            cancel();
        }).catch(error => {
            openMessage('error', '请求出错，请稍后再试', error);
            setLoading(false);
        });
    }
    return (
        <>
            {contextHolder}
            { props.handel }
            <Modal
                title="注册/登录"
                open={controller}
                onCancel={cancel}
                confirmLoading={ loading }
                onOk={ handleSubmit }
                okText='提交'
                cancelText='取消'
            >
                { props.children }
            </Modal>
        </>
    );
}

export default Model;
