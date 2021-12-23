// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { data } from "autoprefixer";
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
  appId: "1:598761197855:web:005afa9389b57bef4ea02a",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



let allData = [];



// Getting Data From Firebase Based On Collection Name 'CustomerInfo'
const db = getFirestore(app);
const afterlifeCol = collection(db, 'CustomerInfo')
const afterlifeData = getDocs(afterlifeCol)
                        .then((snapshot) => {
                            snapshot.docs.forEach((doc) => {
                                allData.push({ ...doc.data(), id: doc.id })
                            })
                            allData.forEach(function (item) {
                                // const email = item.Email
                                // const phone = item.Phone
                                // const size = item.ShoeSize.shoeSize
                                // console.log('Email:',email, " Phone:", phone, 'ShoeSize:', size)
                            })
                    
                        })
                        .catch(error => {
                            // console.log(error.message)
                        })


export  { db, afterlifeData, afterlifeCol, addDoc };


