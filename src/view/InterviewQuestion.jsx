import { Layout, FloatButton } from "antd";
import HeaderTitle from "../components/HeaderTitle";
import InterviewQuestionSider from "../components/InterviewQuestionSider";
import InterviewQuestionContent from "../components/InterviewQuestionContent";
import '../style/InterviewQuestion.css'


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
                <HeaderTitle title='面试题大全'></HeaderTitle>
            </Header>
            <Content style={{
                display: 'flex',
                padding: '0 10px',
                columnGap: '30px'
            }}>
                <Sider width='230px' >
                    <InterviewQuestionSider></InterviewQuestionSider>
                </Sider>
                <InterviewQuestionContent></InterviewQuestionContent>
            </Content>
            <FloatButton.BackTop type='primary' />
        </>
    );
}

export default InterviewQuestion;
