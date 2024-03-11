import { createSlice } from "@reduxjs/toolkit";

export const typeList = createSlice({
    name: 'typeList',
    initialState: {
        types: [],
        isLoading: true
    },
    reducers: {
        /*
        * 设置分类
        * */
        setTypes: (state, {payload}) => {
            state.types = payload;
        },
        /*
        * 设置加载状态
        * */
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
    }
})

export const {
    setTypes,
    setIsLoading
} = typeList.actions;

export default typeList.reducer;
