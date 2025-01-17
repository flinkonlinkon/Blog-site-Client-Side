// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7GLOEnDHz4Gq9ImknVKNo3P7UNKeJc3M",
  authDomain: "blog-2da46.firebaseapp.com",
  projectId: "blog-2da46",
  storageBucket: "blog-2da46.firebasestorage.app",
  messagingSenderId: "581722234794",
  appId: "1:581722234794:web:7c6253ab9cce0c7a02d5d3",
  measurementId: "G-1YK4FXEBMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;