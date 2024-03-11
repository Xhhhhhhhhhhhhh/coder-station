import { Flex, Tag, Skeleton } from "antd";
import { getType } from "../api/typeApi";
import { submitAutoMessage } from "../util";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypes, setIsLoading } from "../store/typeList";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '100px',
    color: 'rgb(102, 102, 102)',
    fontWeight: 200,
    fontSize: '26px'
}


function QuestionsHeader(props) {
    const [typeList, setTypeList] = useState([]);
    const [isLoading, setSkeletonIsLoading] = useState(true)
    const colorArr = ["#108ee9", "#2db7f5", "#f50", "green", "#87d068", "blue", "red", "purple"];
    const dispatch = useDispatch();
    const typeStore = useSelector(state => state.typeList)
    useEffect(() => {
        if (typeStore.isLoading) {
            // 模拟一下请求接口的延迟
            setTimeout(() => submitAutoMessage(getType, setSkeletonIsLoading, null, null, resp => {
                const handleResp = resp.data.map((item,index) => ({
                    ...item,
                    color: colorArr[index] ? colorArr[index] : null
                }))
                console.log(handleResp)
                setTypeList(handleResp);
                dispatch(setTypes(handleResp));
                dispatch(setIsLoading(false))
            }), 1000)
        } else {
            setTypeList(typeStore.types);
            setSkeletonIsLoading(false)
        }
    }, []);

    return (
        <div style={divStyle}>
            <span>问答列表</span>
            <Skeleton
                paragraph={{
                    rows: 0
                }}
                title={{
                    width: '100%'
                }}
                style={{
                    width: '80%',
                    display: 'flex',
                    height: '20px'
                }}
                active
                loading={isLoading}
            >
                <Flex gap='4px 0' wrap='wrap'>
                    {
                        typeList.map(item => (
                            <Tag
                                color={item.color}
                                style={{ borderRadius: '3px', cursor: 'pointer' }}
                                value={item._id}
                                key={item._id}
                            >
                                { item.typeName }
                            </Tag>
                        ))
                    }
                </Flex>
            </Skeleton>

        </div>
    );
}

export default QuestionsHeader;
