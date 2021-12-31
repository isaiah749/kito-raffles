// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRsr_Aaqi3SrkCNsmS40PXamtiIhfrMl4",
  authDomain: "afterlife-raffle.firebaseapp.com",
  projectId: "afterlife-raffle",
  storageBucket: "afterlife-raffle.appspot.com",
  messagingSenderId: "598761197855",
  appId: "1:598761197855:web:4260be5439f12c4d4ea02a",
  measurementId: "G-K2STLXQ5PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);