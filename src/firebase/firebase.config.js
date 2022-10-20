// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpL6Pq32aEMMmZfEXEngShl0SEh7YGtpk",
  authDomain: "dragon-news-c255a.firebaseapp.com",
  projectId: "dragon-news-c255a",
  storageBucket: "dragon-news-c255a.appspot.com",
  messagingSenderId: "1056415730262",
  appId: "1:1056415730262:web:5cd9b9612dcb7cf036c9f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;