import { configureStore } from "@reduxjs/toolkit";
import userInfo from './userInfo'
import typeList  from "./typeList";

export default configureStore({
    reducer: {
        userInfo,
        typeList
    }
})
