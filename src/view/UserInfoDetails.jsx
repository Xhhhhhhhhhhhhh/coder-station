import { Card } from "antd";
import HeaderTitle from "../components/HeaderTitle";
import '../style/HeaderTitle.css'
import { useEffect } from "react";
import { getUserById } from "../api/userApi";
import { submitAutoMessage } from "../util";
import { useSelector } from "react-redux";

function UserInfoDetails(props) {
    const userInfo = useSelector(state => state.userInfo);
    useEffect(() => {
        submitAutoMessage(
            getUserById.bind(null, userInfo.info.id),
            null,
            null,
            null,
            resp => {
                console.log(resp)
            }
        )
    }, [])



    return (
        <>
            <header style={{
                background: "linear-gradient(rgb(238, 237, 237), white)",
                height: '100px',
                padding: '20px 50px'
            }}>
                <HeaderTitle title='用户信息'></HeaderTitle>
            </header>
            <main style={{
                padding: '10px 60px',
                display: 'flex',
                rowGap: '30px',
                flexDirection: 'column'
            }}>
                <Card
                    title="基本信息"
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card
                    title="社交账号"
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card
                    title="个人简介"
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </main>
        </>
    );
}

export default UserInfoDetails;
