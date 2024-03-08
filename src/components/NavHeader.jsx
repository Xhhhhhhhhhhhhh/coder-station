import { Button, Input, Menu, Select, Segmented } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Model from "../components/Model";
import LoginFrom from "./LoginFrom";
import '../style/NavHeader.css'
import { getCaptcha } from "../api/otherApi";

const { Option } = Select;
const { Search } = Input;

const menuItems = [
    {
        label: '问答',
        key: 'questions',
    },
    {
        label: '书籍',
        key: 'books',
    },
    {
        label: '面试题',
        key: 'interviewquestion',
    },
    {
        label: '视频',
        key: 'video',
    },
]

const selectBefore = (
    <Select defaultValue='0'>
        <Option value='0'>
            Questions
        </Option>
        <Option value='1'>
            Books
        </Option>
    </Select>
)


function NavHeader(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState('');
    const [controller, setController] = useState(false)
    const [modelMap, setModelMap] = useState('登录');
    const [captchaSvg, setCaptchaSvg] = useState('');

    useEffect(() => { // 监听location 实时改变选中样式
        setCurrent(location.pathname.replaceAll('/', ''));
    }, [location])

    const handleClick = e => { //导航栏点击事件
        navigate(`/${e.key}`); // 通过key 跳转url
        setCurrent(e.key);
    }

    const handleRL = () => { // 切换弹窗状态
        setController(!controller);
        captcha();
    }
   const captcha = () => {
       getCaptcha().then(resp => {
           setCaptchaSvg(resp);
       })
   }
    return (
        <>
            <div className='headMenu'>
            <span className='title'>
                <span>
                    coder
                </span>
                <span>
                    station
                </span>
            </span>
                <div className="menu">
                    <Menu
                        onClick={handleClick}
                        items={menuItems}
                        selectedKeys={[current]}
                        theme="dark"
                        mode='horizontal'
                    />
                </div>
                <div className='select'>
                    <Search
                        addonBefore={selectBefore}
                        placeholder="请输入"
                        allowClear
                        enterButton="搜索"
                    />
                </div>
                <Model
                    handel={() => (
                        <Button
                            type="primary"
                            onClick={handleRL}
                        >
                            注册/登录
                        </Button>
                        )
                    }
                    controller={controller}
                    cancel={handleRL}
                >
                    <div className='model-form'>
                        {/* 这个组件的事件参数是直接返回value */}
                        <Segmented options={ ['登录', '注册'] } block value={ modelMap } onChange={ setModelMap } size='large' />
                        <LoginFrom
                            captchaSvg={ captchaSvg }
                            changeCaptchaSvg={ captcha }
                            handleRL={handleRL}
                            isLogin={modelMap === '登录'}
                        />
                    </div>
                </Model>
            </div>
        </>
    );
}

export default NavHeader;
