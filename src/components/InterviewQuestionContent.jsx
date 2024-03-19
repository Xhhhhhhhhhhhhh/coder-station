import style from '../style/Interview.module.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { submitAutoMessage } from "../util";
import { getInterviewTitle } from "../api/interviewQuestionApi";

function InterviewQuestionContent(props) {
    const interviewType = useSelector(state => state.interviewType);
    const [isClick, setIsClick] = useState(false);
    const [interview, setInterview] = useState({})
    useEffect(() => {
        interviewType.currentType && submitAutoMessage(
            getInterviewTitle.bind(null, interviewType.currentType),
            null,
            null,
            null,
            resp => {
                if (resp.data) {
                    setIsClick(true);
                    setInterview(resp.data)
                } else {
                    setIsClick(false);
                }
            }
        )
    }, [interviewType.currentType]);
    return (
        <div style={{
            flex: '1',
            width: '100%'
        }}>
            {
                isClick  ?
                    <div className={style.content}>
                        <h1 className={style.interviewRightTitle}>{interview?.interviewTitle}</h1>
                        <div className={style.contentContainer}>
                            <div dangerouslySetInnerHTML={{__html: interview?.interviewContent}}></div>
                        </div>
                    </div>
                    :
                    <div style={{
                        fontSize: "40px",
                        fontWeight: "100",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        请在左侧选择面试题
                    </div>
            }
        </div>

    );
}

export default InterviewQuestionContent;
