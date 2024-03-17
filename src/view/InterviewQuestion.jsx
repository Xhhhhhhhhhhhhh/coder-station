import { Layout, FloatButton } from "antd";
import InterviewQuestionHeader from "../components/InterviewQuestionHeader";
import InterviewQuestionSider from "../components/InterviewQuestionSider";
import InterviewQuestionContent from "../components/InterviewQuestionContent";


const {
    Header,
    Content,
    Sider
} = Layout;

function InterviewQuestion(props) {
    return (
        <>
            <Header style={{
                background: "linear-gradient(rgb(238, 237, 237), white)",
                height: '100px',
                padding: '20px 50px'
            }}>
                <InterviewQuestionHeader></InterviewQuestionHeader>
            </Header>
            <Content style={{
                display: 'flex',
                padding: '0 10px',
                columnGap: '30px'
            }}>
                <Sider width='230px'>
                    <InterviewQuestionSider></InterviewQuestionSider>
                </Sider>
                <InterviewQuestionContent></InterviewQuestionContent>
            </Content>
            <FloatButton.BackTop type='primary' />
        </>
    );
}

export default InterviewQuestion;
