import { Input, Form, Checkbox, Button } from "antd";
import { useEffect, useState } from "react";
import { debounce } from '../util'

function LoginFrom(props) {
    const { setIsSubmit } = props;
    const [userInfo, setUserInfo] = useState({
        loginId: '',
        loginPwd: '',
        remember: '',
        captcha: '',
        nickname: ''
    });
    const [form] = Form.useForm();
    const validate = () => {
        form.validateFields({
            validateOnly: true
        }).then(() => setIsSubmit(true)).catch(() => setIsSubmit(false));
    }

    useEffect(() => {
        validate();
    }, []);
    const handleChange = () => {
        validate();
    }
    return (
        <>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                form={form}
                autoComplete="off"
                onChange={debounce(handleChange)} // 通过函数防抖防止重复请求
            >
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的账号',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的密码',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 3,
                        span: 16,
                    }}
                >
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginFrom;
