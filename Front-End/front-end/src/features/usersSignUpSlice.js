import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const addUser = createAsyncThunk(('/register'),async(value)=>{
    fetch("http://localhost:5000/register",{method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            name:value.name,
            email:value.email,
            password:value.password
        })
    }).then((res)=>res.json());
});

const usersSignUpSlice = createSlice({
    name:"users",
    initialState:{
        loading:false,
        user:[],
        error:'',
    },
    extraReducers:builder=>{
        builder.addCase(addUser.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload;
        })
        builder.addCase(addUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default usersSignUpSlice;