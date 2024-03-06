import { Route, Routes, Navigate } from "react-router-dom";
import Books from "../view/Books";
import InterviewQuestion from "../view/InterviewQuestion";
import Questions from "../view/Questions";
import Video from "../view/Video";

function Routers(props) {
    return (
        <>
            <Routes>
                <Route path='/questions' element={ <Questions /> } />
                <Route path='/books' element={ <Books /> } />
                <Route path='/interviewquestion' element={ <InterviewQuestion /> } />
                <Route path='/video' element={ <Video /> } />
                <Route path='/' element={ <Navigate replace to='/questions' /> } />
            </Routes>
        </>
    );
}

export default Routers;
