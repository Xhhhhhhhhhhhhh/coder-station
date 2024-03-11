import { Layout } from "antd";
import QuestionsHeader from "../components/QuestionsHeader";
import QuetionsContent from "../components/QuetionsContent";
const {
    Header,
    Content,
    Sider
} = Layout;



function Questions(props) {
    return (
        <>
            <Header style={{
                background: "linear-gradient(rgb(238, 237, 237), white)",
                height: '100px',
                padding: '20px 50px'
            }}>
                <QuestionsHeader />
            </Header>
            <Content>
                <QuetionsContent></QuetionsContent>
                <Sider>

                </Sider>
            </Content>
        </>
    );
}

export default Questions;
