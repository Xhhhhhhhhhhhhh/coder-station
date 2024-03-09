import { Popover, List } from "antd";

function UserInfo(props) {
    const { avatar, userInfo } = props;
    const content = (
        <List
            dataSource={['个人中心', '退出登录']}
            size='large'
            renderItem={item => (<List.Item style={{ cursor: 'pointer' }} >{ item }</ List.Item>)}
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
