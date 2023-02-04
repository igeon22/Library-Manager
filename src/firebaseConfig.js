// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBau9iYOMvNp6O7bQHH8WsowH1VnXz2MJo",
  authDomain: "library-data-fb1cc.firebaseapp.com",
  projectId: "library-data-fb1cc",
  storageBucket: "library-data-fb1cc.appspot.com",
  messagingSenderId: "903254165829",
  appId: "1:903254165829:web:b5a9bd71a3295f3c9c962c",
  measurementId: "G-R26B9792JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)


export {app,database}