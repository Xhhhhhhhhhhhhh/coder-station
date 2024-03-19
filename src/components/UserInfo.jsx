import { Popover, List, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInfo, setIsLogin } from "../store/userInfo";

function UserInfo(props) {
    const { avatar, userInfo } = props;
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleOutLogin = () => {
        dispatch(setInfo({
            loginId: '',
            nickname: '',
            id: ''
        }));
        dispatch(setIsLogin(false));
        message.success('退出登录成功');
        localStorage.removeItem('token');
        navigate('/')
    }
    const content = (
        <List
            dataSource={['个人中心', '退出登录']}
            size='large'
            renderItem={item => (
                <>
                    { item === '个人中心' ?
                        <List.Item style={{ cursor: 'pointer' }} >
                            <Link to='/userInfoDetail'><span style={{ color: '#000' }}> { item }</span></Link>
                        </ List.Item>
                        :
                        <List.Item style={{ cursor: 'pointer' }} >
                            <span style={{ color: '#000' }} onClick={handleOutLogin}>{ item }</span>
                        </ List.Item>
                    }
                </>
            )}
        />
    )
    return (
        <Popover content={content} >
            <div className='user-info'>
                <img src={avatar} alt=""/>
                <span>{userInfo.nickname || userInfo.loginId}</span>
            </div>
        </Popover>
    );
}

export default UserInfo;
