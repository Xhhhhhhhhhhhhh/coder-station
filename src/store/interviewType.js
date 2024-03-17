import { createSlice } from "@reduxjs/toolkit";

export const interviewType = createSlice({
    name: 'userInfo',
    initialState: {
        list: [],
        isLoading: true,
        currentType: ''
    },
    reducers: {
        /*
        * 设置用户信息
        * */
        setList: (state, {payload}) => {
            state.list = payload;
        },
        /*
        * 设置登录状态
        * */
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setCurrentType: (state, { payload }) => {
            state.currentType = payload;
        }
    }
})

export const {
    setList,
    setIsLoading,
    setCurrentType
} = interviewType.actions;

export default interviewType.reducer;
