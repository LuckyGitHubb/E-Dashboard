import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginApiData = createAsyncThunk('/login',async(value)=>{
    const url = 'http://localhost:5000/login';
    const data = await fetch(url,{method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:value.email,
            password:value.password
        })
    })
    if(!data.ok){
        throw new Error('Login failed');
    }
    const response = await data.json();
    return response;
})
const loginSlice = createSlice({
    name:'login',
    initialState:{
        loading:false,
        login:[],
        error:''
    },
    extraReducers:builder=>{
        builder.addCase(loginApiData.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(loginApiData.fulfilled,(state,action)=>{
            state.loading=false;
            state.login=action.payload;
        })
        builder.addCase(loginApiData.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
});
export default loginSlice;
