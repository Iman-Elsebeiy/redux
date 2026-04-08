import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";  
export const getProducts = createAsyncThunk('Allproducts', async()=>{
    const res = await axios.get('./p.json')
    // console.log(res);
    return res.data.products; // return 
})
const ProductSlicer = createSlice({
    name:'products',
    initialState:{
        list:[],
        laoding: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getProducts.pending, (state) =>{
            state.laoding =true
        } )
        builder.addCase(getProducts.fulfilled, (state, action) =>{
            state.laoding =false
            state.list = action.payload
        } )
        builder.addCase(getProducts.rejected, (state) =>{
            state.laoding = true
            state.error = "error cant load data"
        } )
    }
})

export default ProductSlicer.reducer
