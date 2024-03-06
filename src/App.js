import { Layout } from "antd";
import './style/app.css'
import NavHeader from "./components/NavHeader";
import Routers from "./router/Routers";
import AppFooter from "./components/AppFooter";


const {
    Header,
    Content,
    Footer
} = Layout;



function App() {

  return (
    <>
        <Header>
            <NavHeader />
        </Header>
        <Content>
            <Routers />
        </Content>
        <Footer className='footer'>
            <AppFooter />
        </Footer>
    </>
  );
}

export default App;
