import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAgzU0xtL3b49PlujHgb97Z3Wggq4DZL2k",
    authDomain: "app-333f5.firebaseapp.com",
    projectId: "app-333f5",
    storageBucket: "app-333f5.appspot.com",
    messagingSenderId: "1026342858608",
    appId: "1:1026342858608:web:6baa9d55410a55d1f969b5",
    databaseURL: 'https://app-333f5-default-rtdb.firebaseio.com'
  };

  export const app = initializeApp(firebaseConfig)