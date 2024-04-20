import { useRef, useState } from 'react'
import './App.css'
import { useFirebase } from './context/Firebase'

function App() {

  const emailRef = useRef("")
  const passwordRef = useRef("")

  const firebase = useFirebase();

  console.log(firebase);
  const clickHandler = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    firebase.signUpUserWithEmailAndPassword( email, password)
    firebase.putData("users/"+"devendra", {email,password})
    alert("Sign Up successfull")
    passwordRef.current.value=""
    emailRef.current.value=""
  }

  return (
    <>
      <h1>Firebase</h1>
      <input ref={emailRef} type="email" placeholder='Enter your email' />
      <input ref={passwordRef} type="password" placeholder='Enter your password' />
      <button onClick={clickHandler}>Signup</button>
    </>
  )
}

export default App
