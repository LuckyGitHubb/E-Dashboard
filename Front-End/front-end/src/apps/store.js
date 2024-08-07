import { configureStore } from "@reduxjs/toolkit";
import usersSignUpSlice from "../features/usersSignUpSlice";
import loginSlice from "../features/loginSlice";

const store = configureStore({
    reducer:{
        userSignUp:usersSignUpSlice.reducer,
        userLogin:loginSlice.reducer
    }
})
export default store;