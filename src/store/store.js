import { configureStore } from "@reduxjs/toolkit";
import userInfo from './userInfo'

export default configureStore({
    reducer: {
        userInfo
    }
})
