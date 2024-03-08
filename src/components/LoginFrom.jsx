import { Input, Form, Checkbox, Button, Row, Col } from "antd";
import { useState } from "react";
import { submitAutoMessage } from '../util'
import { useImmer } from "use-immer";
import { login, register } from "../api/userApi";
import { useDispatch } from "react-redux";
import { setInfo, setIsLogin } from "../store/userInfo";

function LoginFrom(props) {
    const { captchaSvg, changeCaptchaSvg, handleRL, isLogin } = props;
    const [form] = Form.useForm();
    const [userInfo, setUserInfo] = useImmer({
        loginId: '',
        loginPwd: '',
        remember: 7,
        captcha: '',
        nickname: ''
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();
    const handleChangeInput = (key, payload) => {
        setUserInfo(draft => {
            draft[key] = payload
        });
    }

    const handleSubmit = () => {
        const {loginId, nickname} = userInfo
        submitAutoMessage(
            isLogin ? login.bind(null, userInfo) : register.bind(null, userInfo) ,
            setIsSubmit,
            isLogin ? '登录成功' : '注册成功',
            null,
            () => {
                dispatch(setInfo({loginId, nickname}));
                dispatch(setIsLogin(true));
                handleRL();
            },
            changeCaptchaSvg);
    }
    return (
        <>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                labelCol={{span:4}}
                form={form}
                autoComplete="off"
                style={{
                    padding: '0 5px'
                }}
            >
                <Form.Item
                    label="账号"
                    name="loginId"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的账号',
                        },
                    ]}
                >
                    <Input value={userInfo.loginId} onChange={e => handleChangeInput('loginId', e.target.value)} />
                </Form.Item>
                {
                    isLogin ? (
                        <Form.Item
                        label="密码"
                        name="loginPwd"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码',
                            },
                        ]}
                    >
                        <Input.Password value={userInfo.loginPwd} onChange={e => handleChangeInput('loginPwd', e.target.value)}/>
                    </Form.Item>
                    ) : (
                        <Form.Item
                            label="用户名称"
                            name="nickname"
                        >
                            <Input.Password value={userInfo.loginPwd} onChange={e => handleChangeInput('nickname', e.target.value)}/>
                        </Form.Item>
                    )
                }


                <Form.Item
                    name="captcha"
                    label="验证码"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的验证码',
                        },
                    ]}
                >
                    <Row>
                        <Col span={16}>
                            <Input value={userInfo.captcha} onChange={e => handleChangeInput('captcha', e.target.value)}  />
                        </Col>
                        <Col span={6}>
                            <div className='captcha-svg' dangerouslySetInnerHTML={{ __html: captchaSvg }} onClick={changeCaptchaSvg} />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 3,
                        span: 16,
                    }}
                >
                    <Checkbox onChange={e => handleChangeInput('remember', e.target.checked ? 7 : 0)} >记住我</Checkbox>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 16,
                    }}
                >
                    <Row>
                        <Col>
                            <Button onClick={handleRL}>取消</Button>
                        </Col>
                        <Col offset={2}>
                            <Button type="primary" onClick={handleSubmit} loading={isSubmit}>提交</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginFrom;
