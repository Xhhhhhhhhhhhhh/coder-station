import { Avatar, Layout } from "antd";
import HeaderTitle from "../components/HeaderTitle";
import { useEffect, useState } from "react";
import { formatDate, submitAutoMessage } from "../util";
import { getQuestionById } from "../api/quetionsApi";
import { useLocation, useParams } from "react-router-dom";
import styles from '../style/IssueDetail.module.css'
import Recommend from "../components/Recommend";

const {
    Header,
    Content,
    Sider
} = Layout;

function QuestionsDetail(props) {
    const params = useParams();
    const [detail, setDetail] = useState({})
    useEffect(() => {
        return () => {
            submitAutoMessage(getQuestionById.bind(null, params.id), null, null, '加载失败请重试' , resp => {
                setDetail(resp.data);
            })
        }
    }, []);
    return (
        <>
           <Header style={{
               background: "linear-gradient(rgb(238, 237, 237), white)",
               height: '100px',
               padding: '20px 50px'
           }}>
               <HeaderTitle title='问题详情'></HeaderTitle>
           </Header>
            <Content style={{
                display: 'flex',
                padding: '0 60px',
                columnGap: '30px'
            }}>
                <div className={styles.leftSide}>
                    {/* 左上方：问答详情 */}
                    <div className={styles.question}>
                        {/* 标题 */}
                        <h1>{detail?.issueTitle}</h1>
                        {/* 提问人信息：头像、昵称、提问时间 */}
                        <div className={styles.questioner}>
                            <Avatar size="small" src={detail?.avatar}/>
                            <span className={styles.user}>{detail?.nickname}</span>
                            <span>发布于：{formatDate(detail?.issueDate)}</span>
                        </div>
                        {/* 问题详情 */}
                        <div className={styles.content}>
                            <div dangerouslySetInnerHTML={{__html: detail?.issueContent}}></div>
                        </div>
                    </div>
                    {/* 左下方：评论 */}
                    {/*<Discuss*/}
                    {/*    commentType={1}*/}
                    {/*    targetId={detail?._id}*/}
                    {/*    issueInfo={detail}*/}
                    {/*/>*/}
                </div>
                <Sider width='300px'>
                    <Recommend></Recommend>
                </Sider>
            </Content>
        </>
    );
}

export default QuestionsDetail;
