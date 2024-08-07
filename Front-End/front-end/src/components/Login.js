import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginApiData } from '../features/loginSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState();
const [password,setPassword] = useState();
const dispatch = useDispatch();
const navigate = useNavigate();
const login = useSelector((state)=>state.userLogin.login);
// console.log(login);
function click_ToSubmitUserData(){
    dispatch(loginApiData({ email,password }));
}
useEffect(()=>{
  if(login===email,password){
    localStorage.setItem('user',JSON.stringify(login));
    navigate('/');
  }
  else{
    alert('user not found');
  }
},[login,navigate]);
  return (
    <div>
            <div>
                <label htmlFor="email">Email </label>
                <input onChange={(e) => { setEmail(e.target.value) }} type="text" value={email} id="email" placeholder='Enter Your Email' />
            </div>
            <div>
                <label htmlFor="password">Password </label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" value={password} id="password" placeholder='Enter Your Password' />
            </div>
            <button onClick={click_ToSubmitUserData}>Sign Up</button>
    </div>
  )
}

export default Login