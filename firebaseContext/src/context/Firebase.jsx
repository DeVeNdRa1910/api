import React, { useContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAgzU0xtL3b49PlujHgb97Z3Wggq4DZL2k",
    authDomain: "app-333f5.firebaseapp.com",
    databaseURL: "https://app-333f5-default-rtdb.firebaseio.com",
    projectId: "app-333f5",
    storageBucket: "app-333f5.appspot.com",
    messagingSenderId: "1026342858608",
    appId: "1:1026342858608:web:6c2d20fe3a213f2ef969b5",
    databaseURL: "https://app-333f5-default-rtdb.firebaseio.com/"
  };

const firebaseApp = initializeApp(firebaseConfig)

const firebaseAuth = getAuth(firebaseApp)

const database = getDatabase(firebaseApp)

//creating custom hook
export const useFirebase = () => {
    return useContext(FirebaseContext)
}

const FirebaseContext = React.createContext(null)

export const FirebaseProvider = (props) => {

    const signUpUserWithEmailAndPassword = (email, password) => {
        
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const putData = (key, data) => {
        set(ref(database, key), data);
    }

    return (
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword , putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

