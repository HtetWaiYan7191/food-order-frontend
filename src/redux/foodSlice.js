/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    values: [],
    loading: false,
    error: ''
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default foodSlice.reducer