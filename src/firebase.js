// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-disney-plus-app-10092.firebaseapp.com",
  projectId: "react-disney-plus-app-10092",
  storageBucket: "react-disney-plus-app-10092.appspot.com",
  messagingSenderId: "500465458403",
  appId: "1:500465458403:web:e5b9ca4863cabb4d16b9d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;