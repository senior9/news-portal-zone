// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeaBZVLYj8_ZcFQAF7OGe6j79b2ddUlrc",
  authDomain: "news-portal-service.firebaseapp.com",
  projectId: "news-portal-service",
  storageBucket: "news-portal-service.appspot.com",
  messagingSenderId: "175612176125",
  appId: "1:175612176125:web:ea07611a2c519f05218094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;