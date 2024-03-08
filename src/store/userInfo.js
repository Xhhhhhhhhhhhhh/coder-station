import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name: 'userInfo',
    initialState: {
        info: {
            loginId: '',
            nickname: ''
        },
        isLogin: false
    },
    reducers: {
        /*
        * 设置用户信息
        * */
        setInfo: (state, {payload}) => {
            state.info = payload;
        },
        /*
        * 设置登录状态
        * */
        setIsLogin: (state, { payload }) => {
            state.isLogin = payload;
        },
    }
})

export const {
    setInfo,
    setIsLogin
} = userInfo.actions;

export default userInfo.reducer;
