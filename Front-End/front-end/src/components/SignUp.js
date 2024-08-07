import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addUser } from '../features/usersSignUpSlice';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    function submitUserData(){
        const result=dispatch(addUser({name,email,password}));
        localStorage.setItem("user",JSON.stringify(result));
        if(name,email,password!==null){
            navigate('/');
        }
    }
    const userData = useSelector((state)=>{
        return state;
    })
    console.log(userData);
    return (
        <div className='register-form'>
            <h1>Register</h1>
            <div>
                <label htmlFor="name">Name </label>
                <input onChange={(e) => { setName(e.target.value) }} type="text" value={name} id="name" placeholder='Enter Your Name' />
            </div>
            <div>
                <label htmlFor="email">Email </label>
                <input onChange={(e) => { setEmail(e.target.value) }} type="text" value={email} id="email" placeholder='Enter Your Email' />
            </div>
            <div>
                <label htmlFor="password">Password </label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" value={password} id="password" placeholder='Enter Your Password' />
            </div>
            <button onClick={submitUserData}>Sign Up</button>
        </div>
    )
}

export default SignUp;