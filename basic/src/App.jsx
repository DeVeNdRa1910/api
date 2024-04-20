import './App.css'
import { getDatabase, ref, set } from "firebase/database";
import {app} from './firebase.jsx'

const db = getDatabase(app);

function App() {
  const putData = () =>{
    set(ref(db, 'users/Devendra'), {
      id: 1 ,
      name: 'Devendra',
      age: 21,
    });
  };

  return (
    <>
      <h1>Hello Firebase React App</h1>
      <button onClick={putData}> Put DB</button>
    </>
  )
}

export default App
