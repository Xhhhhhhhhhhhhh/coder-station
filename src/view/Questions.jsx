import { Layout } from "antd";
import QuestionsHeader from "../components/QuestionsHeader";
import QuetionsContent from "../components/QuetionsContent";
import QuestionsSider from "../components/QuestionsSider";
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
            <Content style={{
                display: 'flex',
                padding: '0 60px',
                columnGap: '30px'
            }}>
                <QuetionsContent></QuetionsContent>
                <Sider width='300px'>
                    <QuestionsSider></QuestionsSider>
                </Sider>
            </Content>
        </>
    );
}

export default Questions;
