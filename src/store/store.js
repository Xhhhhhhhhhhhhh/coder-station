import { configureStore } from "@reduxjs/toolkit";
import userInfo from './userInfo'
import typeList  from "./typeList";
import interviewType from "./interviewType";

export default configureStore({
    reducer: {
        userInfo,
        typeList,
        interviewType
    }
})
