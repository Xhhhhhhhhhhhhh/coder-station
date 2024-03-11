import { getQuetions } from "../api/quetionsApi";
import { formatDate, submitAutoMessage } from "../util";
import style from '../style/typelist.module.css'
import { useEffect, useState } from "react";
import { List, Tag, Skeleton } from "antd";
import { useSelector } from "react-redux";


const mock = {
    "code": 0,
    "msg": "",
    "data": {
        "currentPage": 1,
        "eachPage": 5,
        "count": 20,
        "totalPage": 4,
        "data": [
            {
                "_id": "6363b8d65d1a8c89f786112a",
                "issueTitle": "123123",
                "issueContent": "<p>1231231</p>",
                "scanNumber": 2,
                "commentNumber": 0,
                "issueStatus": true,
                "issueDate": "1667479766270",
                "userId": "634e56402fac4881713db3e8",
                "typeId": "634d804d7797638ec96fe2fd"
            },
            {
                "_id": "6359e31fa5f3673044ad9521",
                "issueTitle": "springboot整合rabbitmq无法声明队列和交换机?",
                "issueContent": "<p>springboot整合rabbitmq无法声明队列和交换机</p><p><br></p><p><img src=\"https://segmentfault.com/img/bVc3jFe\" alt=\"image.png\" contenteditable=\"false\"><br></p>",
                "scanNumber": 16,
                "commentNumber": 1,
                "issueStatus": true,
                "issueDate": "1666835231367",
                "userId": "6359e24fa5f3673044ad94ba",
                "typeId": "634e1b17386eea42f85fad04"
            },
            {
                "_id": "6359e2efa5f3673044ad950a",
                "issueTitle": "事件对象和this关键字有什么共同点和不同点？",
                "issueContent": "<p>请问一下，事件对象和this关键字有什么共同点和不同点了。</p>",
                "scanNumber": 7,
                "commentNumber": 2,
                "issueStatus": true,
                "issueDate": "1666835183782",
                "userId": "6359e24fa5f3673044ad94ba",
                "typeId": "634d7fcc7797638ec96fe2f1"
            },
            {
                "_id": "6359e2d2a5f3673044ad94f7",
                "issueTitle": "询问一个echarts缩略图的问题？",
                "issueContent": "<p><img src=\"https://segmentfault.com/img/bVc3jJW\" alt=\"image.png\" contenteditable=\"false\"><br></p><p><br></p><p>请问一下，我在vue中使用datazoom组件实现缩略，但是其位置一直是在折现图里，我如果想让其显示在折线图下方，该怎么做呢？（我试了很多次，其一直只能显示在折线图的范围里）</p>",
                "scanNumber": 3,
                "commentNumber": 1,
                "issueStatus": true,
                "issueDate": "1666835154939",
                "userId": "6359e24fa5f3673044ad94ba",
                "typeId": "634d7fcc7797638ec96fe2f1"
            },
            {
                "_id": "6359e2b8a5f3673044ad94e4",
                "issueTitle": "flutter 接入融云做消息推送，有没有例子啊？",
                "issueContent": "<p>最近公司要用flutter接入融云做消息推送，文档太少，各位大佬有没有例子给一个参考一下？</p>",
                "scanNumber": 3,
                "commentNumber": 0,
                "issueStatus": true,
                "issueDate": "1666835128442",
                "userId": "6359e24fa5f3673044ad94ba",
                "typeId": "634d7fcc7797638ec96fe2f1"
            }
        ]
    }
}


function QuetionsContent(props) {
    const types = useSelector(state => state.typeList);
    const findType = id => {
        return types.types.find(item => item._id === id)
    }
    return (
        <>
            <Skeleton
            paragraph={true}
            active
            loading={types.isLoading}
            >
                <List
                    itemLayout='horizontal'
                    dataSource={mock.data.data}
                    renderItem={item => (
                        <List.Item className={style.item} style={{ padding: '12px 30px', justifyContent: 'flex-start' }} >
                            <div className={style['left-item']}>
                                <div>
                            <span>
                                {item.commentNumber}
                            </span>
                                    <span>
                                回答
                                </span>
                                </div>
                                <div>
                            <span>
                                {item.scanNumber}
                            </span>
                                    <span>
                                浏览
                            </span>
                                </div>
                            </div>
                            <main className={style.main}>
                                { item.issueTitle}
                                <div className={style.bottom}>
                                    <div>
                                        <Tag color={findType(item.typeId).color} style={{ borderRadius: '3px' }}>
                                            test
                                        </Tag>
                                    </div>
                                    <div className={style.footer} style={{ borderRadius: '3px' }}>
                                        <div>
                                            <Tag color='#ffbb96'>
                                                作者
                                            </Tag>
                                        </div>
                                        <span>
                                            {
                                                formatDate(item.issueDate, 'year')
                                            }
                                        </span>
                                    </div>
                                </div>
                            </main>

                        </List.Item>
                    )}
                />
            </Skeleton>

        </>
    );
}

export default QuetionsContent;
