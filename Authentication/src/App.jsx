import './App.css'
import {app} from './firebase.jsx'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Signup from './pages/Signup.jsx'
import SignIn from './pages/SignIn.jsx'
/* import { getDatabase, ref, set } from "firebase/database"; */

/* const db = getDatabase(app); */

const auth = getAuth(app)

function App() {
/*   const putData = () =>{
    set(ref(db, 'users/Devendra'), {
      id: 1 ,
      name: 'Devendra',
      age: 21,
    });
  }; */

const signupUser = () => {
  createUserWithEmailAndPassword(
    auth, 
    "devendrav@gmail.com",
    "devendra123"
  ).then(value => console.log(value))
}

  return (
    <>
      {/* <h1>Hello Firebase React App</h1>
      <button onClick={signupUser}> Create User</button> */}
      <h1>Sign Up page</h1>
      <Signup />
      <h1>Sign In page</h1>
      <SignIn />
    </>
  )
}

export default App
