import { getQuetions } from "../api/quetionsApi";
import { formatDate, submitAutoMessage } from "../util";
import style from '../style/typelist.module.css'
import { useEffect, useState } from "react";
import { List, Tag, Skeleton } from "antd";
import { useSelector } from "react-redux";



function QuetionsContent(props) {
    const types = useSelector(state => state.typeList);
    const [isLoading, setIsLoading] = useState(true);
    const [issues, setIssues] = useState([]);
    const [sorter, setSorter] = useState({ //分页器
        current: 1,
        pageSize: 5,
    });
    const [total, setTotal] = useState(0)
    // 找到对应的类型数据
    const findType = id => {
        return types.types.find(item => item._id === id)
    }

    const handleChangePage = page => {
        setSorter({
            ...sorter,
            current: page
        });
        setIsLoading(true);
    }

    useEffect(() => {
        // 获取问答列表
        setTimeout(() =>
            submitAutoMessage(getQuetions.bind(null, sorter), setIsLoading, null, null, resp => {
            setIssues(resp.data.data);
            setTotal(resp.data.count);
        }), 1000)

    }, [sorter]);


    return (
        <div style={{
            flex: '1 0 auto'
        }}>
            <Skeleton
            paragraph={true}
            active
            loading={types.isLoading || isLoading}
            >
                <List
                    itemLayout='horizontal'
                    dataSource={issues}
                    pagination={{
                        position: 'bottom',
                        align: 'center',
                        total: total,
                        defaultCurrent: sorter.current,
                        pageSize: sorter.pageSize,
                        onChange: handleChangePage
                    }}
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
                                            { findType(item.typeId).typeName }
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

        </div>
    );
}

export default QuetionsContent;
