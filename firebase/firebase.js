// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { data } from 'autoprefixer';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBRsr_Aaqi3SrkCNsmS40PXamtiIhfrMl4',
	authDomain: 'afterlife-raffle.firebaseapp.com',
	projectId: 'afterlife-raffle',
	storageBucket: 'afterlife-raffle.appspot.com',
	messagingSenderId: '598761197855',
	appId: '1:598761197855:web:005afa9389b57bef4ea02a',
	// measurementId: "${config.measurementId}"
	measurementId: `${process.env.GOOGLE_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let allData = [];

// Getting Data From Firebase Based On Collection Name 'CustomerInfo'
const db = getFirestore(app);
const afterlifeCol = collection(db, 'CustomerInfo');
// const afterlifeData = getDocs(afterlifeCol)
//                         .then((snapshot) => {
//                             let users = [];
//                             snapshot.docs.forEach((doc) => {
//                                 users.push({ ...doc.data(), id: doc.id })
//                             })
//                             // console.log(users)
//                         })
//                         .catch(error => {
//                             // console.log(error.message)
//                         })

const subscriptionCol = collection(db, 'CustomerSubscribe');

const passwordOneCol = collection(db, 'password1')

const passwordTwoCol = collection(db, 'password2')

const passwordThreeCol = collection(db, 'password3')

const raeCol = collection(db, 'RAE-raffle');

const pompeiiCol = collection(db, 'pompeii-raffle');

const JagPhoneCol = collection(db, 'JagPhoneCol')

export { db, afterlifeCol, subscriptionCol, pompeiiCol, raeCol, passwordOneCol, JagPhoneCol, passwordTwoCol, passwordThreeCol, addDoc };
