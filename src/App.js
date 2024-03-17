import { Layout } from "antd";
import './style/app.css'
import NavHeader from "./components/NavHeader";
import Routers from "./router/Routers";
import AppFooter from "./components/AppFooter";
import { submitAutoMessage } from "./util";
import { getType } from "./api/typeApi";
import { setIsLoading, setTypes } from "./store/typeList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const {
    Header,
    Content,
    Footer
} = Layout;
const colorArr = ["#108ee9", "#2db7f5", "#f50", "green", "#87d068", "blue", "red", "purple"];



function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        submitAutoMessage(getType, null, null, null, resp => {
            const handleResp = resp.data.map((item,index) => ({
                ...item,
                color: colorArr[index] ? colorArr[index] : null
            }))
            dispatch(setTypes(handleResp));
            dispatch(setIsLoading(false))
        })
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
