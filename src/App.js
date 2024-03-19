import { Layout, message } from "antd";
import './style/app.css'
import NavHeader from "./components/NavHeader";
import Routers from "./router/Routers";
import AppFooter from "./components/AppFooter";
import { submitAutoMessage } from "./util";
import { getType } from "./api/typeApi";
import { setIsLoading, setTypes } from "./store/typeList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { whoAmI } from "./api/userApi";
import { setInfo, setIsLogin } from "./store/userInfo";


const {
    Header,
    Content,
    Footer
} = Layout;
const colorArr = ["#108ee9", "#2db7f5", "#f50", "green", "#87d068", "blue", "red", "purple"];



function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            submitAutoMessage(getType, null, null, null, resp => {
                const handleResp = resp.data.map((item,index) => ({
                    ...item,
                    color: colorArr[index] ? colorArr[index] : null
                }))
                dispatch(setTypes(handleResp));
                dispatch(setIsLoading(false))
            })
            /*
            * 恢复登录状态
            * */
            localStorage.getItem('token') && submitAutoMessage(whoAmI, null, null,null, resp => {
                const { loginId, nickname = '', _id } = resp.data;
                message.success(`欢迎回来, ${nickname || loginId}`); // 有些用户有可能没有nickname
                dispatch(setInfo({loginId, nickname, id: _id}));
                dispatch(setIsLogin(true));
            })
        };
    }, []);
  return (
    <>
        <Header>
            <NavHeader />
        </Header>
        <Content className='content'>
            <Routers />
        </Content>
        <Footer className='footer'>
            <AppFooter />
        </Footer>
    </>
  );
}

export default App;
