import { Button, Input, Menu, Select } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Model from "../components/Model";


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


    useEffect(() => { // 监听location 实时改变选中样式
        setCurrent(location.pathname.replaceAll('/', ''));
    }, [location])

    const handleClick = e => { //导航栏点击事件
        navigate(`/${e.key}`); // 通过key 跳转url
        setCurrent(e.key);
    }

    const handleRL = () => {
        setController(!controller);
    }
    const test = () => {
        return new Promise((resolve, reject) => setTimeout(() => resolve('ces'), 1000))
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
                    handel={
                        <Button
                            type="primary"
                            onClick={handleRL}
                        >
                            注册/登录
                        </Button>
                    }
                    controller={controller}
                    cancel={handleRL}
                    submitFunc={() => test()}
                >
                    1221
                </Model>
            </div>
        </>
    );
}

export default NavHeader;
