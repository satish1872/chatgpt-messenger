// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3HzqYtnaKUsTBXlxNnHF0QElciFfWzkc",
  authDomain: "chatgpt-messenger-406207.firebaseapp.com",
  projectId: "chatgpt-messenger-406207",
  storageBucket: "chatgpt-messenger-406207.appspot.com",
  messagingSenderId: "442428607504",
  appId: "1:442428607504:web:c82191ccfa9831499b4e95"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);// singleTon pattern
const db = getFirestore(app);

export { db };
