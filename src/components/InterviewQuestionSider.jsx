import { Tree } from 'antd'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAutoMessage } from "../util";
import { getInterviewTitles } from "../api/interviewQuestionApi";
import { setCurrentType, setIsLoading, setList } from "../store/interviewType";

const divStyle = {
    position: 'sticky',
    top: '80px',
    boxShadow: '0 0 1px #ccc',
    height: '400px',
    borderRadius: '10px',
    overflowY: 'auto',
    padding: '10px'
}


function InterviewQuestionSider(props) {
    const interviewType = useSelector(state => state.interviewType);
    const typeStore = useSelector(state => state.typeList)
    const dispatch = useDispatch();
    useEffect(() => {
        typeStore.isLoading || submitAutoMessage(
            getInterviewTitles,
            bool => dispatch(setIsLoading(bool)),
            null,
            null,
            resp => {
                const treeData = typeStore.types.map((item, index) => ({
                    title: item.typeName,
                    key: item._id,
                    children: resp.data[index].map(item => ({
                        title: item.interviewTitle,
                        key: item._id
                    }))
                }))
                dispatch(setList(treeData));
            }
        )
    }, [typeStore]);
    const handleTreeSelect = key => {
        dispatch(setCurrentType(key[0]))
    }





    return (
        <div style={divStyle}>
            <Tree
                treeData={interviewType.list}
                onSelect={handleTreeSelect}
            />
        </div>
    );
}

export default InterviewQuestionSider;
