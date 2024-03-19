import { Layout } from "antd";
import QuestionsHeader from "../components/QuestionsHeader";
import QuetionsContent from "../components/QuetionsContent";
import QuestionsSider from "../components/QuestionsSider";
import { useState } from "react";
const {
    Header,
    Content,
    Sider
} = Layout;



function Questions(props) {
    const [typeId, setTypeId] = useState('')
    const handleClickTag = id => {
        setTypeId(id);
    }
    return (
        <>
            <Header style={{
                background: "linear-gradient(rgb(238, 237, 237), white)",
                height: '100px',
                padding: '20px 50px'
            }}>
                <QuestionsHeader handleClickTag={handleClickTag} />
            </Header>
            <Content style={{
                display: 'flex',
                padding: '0 60px',
                columnGap: '30px'
            }}>
                <QuetionsContent typeId={typeId}></QuetionsContent>
                <Sider width='300px'>
                    <QuestionsSider></QuestionsSider>
                </Sider>
            </Content>
        </>
    );
}

export default Questions;
