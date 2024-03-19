import { Button } from "antd";
import Recommend from "./Recommend";

function QuestionsSider(props) {
    return (
        <div style={{
            display: "flex",
            rowGap: '20px',
            width: '100%',
            flexDirection: 'column'
        }}>
            <Button block type='primary' size='large'>我要发问</Button>
            <Recommend></Recommend>
        </div>
    );
}

export default QuestionsSider;
