import { Input, Form, Checkbox, Button, Row, Col, message } from "antd";
import { useState } from "react";
import { submitAutoMessage } from '../util'
import { login, register } from "../api/userApi";
import { useDispatch } from "react-redux";
import { setInfo, setIsLogin } from "../store/userInfo";

function LoginFrom(props) {
    const { captchaSvg, changeCaptchaSvg, handleRL, isLogin } = props;
    const [form] = Form.useForm();
    const [userInfo, setUserInfo] = useState({
        loginId: '',
        loginPwd: '',
        remember: 7,
        captcha: '',
        nickname: ''
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();
    const handleChangeInput = (key, payload) => {
        const obj = { ...userInfo };
        obj[key] = payload;
        setUserInfo(obj);
    }
    const handleSubmit = e => {
        const {loginId, nickname} = userInfo;
        form.validateFields({ // 验证表单校验是否通过
            validateOnly: true
        }).then(() => {
            submitAutoMessage(
                isLogin ? login.bind(null, userInfo) : register.bind(null, userInfo) ,
                setIsSubmit,
                null,
                null,
                (resp) => {
                    if (!resp.data.data && isLogin) {
                        message.error('账号或密码错误');
                        changeCaptchaSvg();
                    } else if (!resp.data.data.enabled) {
                        message.warning('用户被冻结');
                        changeCaptchaSvg();
                    } else {
                        message.success(isLogin ? '登录成功' : '注册成功');
                        dispatch(setInfo({loginId, nickname, id: resp.data.data._id}));
                        dispatch(setIsLogin(true));
                        isLogin && localStorage.setItem('token', resp.data.token);
                        handleRL();
                        // 请求成功时清空input中的值
                        setUserInfo({
                            loginId: '',
                            loginPwd: '',
                            remember: 7,
                            captcha: '',
                            nickname: ''
                        });
                        form.setFieldsValue({
                            loginId: '',
                            loginPwd: '',
                            remember: 7,
                            captcha: '',
                            nickname: ''
                        });
                    }
                },
                changeCaptchaSvg);
        }).catch(error => {})
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
                    <Input value={ userInfo.loginId } onChange={e => handleChangeInput('loginId', e.target.value)} />
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
                            <Input value={userInfo.nickname} onChange={e => handleChangeInput('nickname', e.target.value)}/>
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
                            <Button type="primary" onClick={handleSubmit} loading={isSubmit} htmlType='submit' >提交</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginFrom;
