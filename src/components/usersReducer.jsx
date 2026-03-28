import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('allUsers', async () => {
    const res = await axios.get('https://dummyjson.com/users')
    console.log("response::", res);
    
    return res.data.users;
});

const usersReducer = createSlice({
  name: "users",
  initialState: {
    list:[],
    loading:false,
    error:null
  },
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getData.fulfilled, (state, action) => {
        state.loading =false
        state.list = action.payload
    })
    builder.addCase(getData.rejected, (state) => {
        state.loading = true
        // console.log('error');
        state.error = "Failed to load users"
    })
  }
})

export default usersReducer.reducer