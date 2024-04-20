import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email , password).then(value => {
            setEmail("")
            setPassword("")
            alert("User Created Successfully")
            console.log(value);
        })
    }

   return (
    <div>
      <label htmlFor="">Email</label>
      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required placeholder='Enter your email'/>
      <label htmlFor="">Password</label>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required placeholder='Enter your Password'/>
      <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default Signup;
