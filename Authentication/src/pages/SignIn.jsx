import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { app } from '../firebase';

const auth = getAuth(app)

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = () => {
      signInWithEmailAndPassword(auth, email , password).then(value => {
        setEmail("")
        setPassword("")
        alert("User SignIn Successfully")
        console.log(value);
      }).catch(err => console.log(err))
    }

  return (
    <div>
      <label htmlFor="">Enter your email</label>
      <input 
        type="email" 
        onChange={(e)=>{setEmail(e.target.value)}} 
        value={email} 
        required 
        placeholder='Enter your email'
      />
      <label htmlFor="">Enter your password</label>
      <input 
        type="password" 
        onChange={(e)=>{setPassword(e.target.value)}} 
        value={password} 
        required 
        placeholder='Enter your Password'
      />
      <button onClick={SignInUser}>Sign In</button>
    </div>
  )
}

export default SignIn
