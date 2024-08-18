import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARynY7TT8uOlxxr36PUzlUPwlQmc-dDxQ",
    authDomain: "ecommerce-77c91.firebaseapp.com",
    projectId: "ecommerce-77c91",
    storageBucket: "ecommerce-77c91.appspot.com",
    messagingSenderId: "532752219462",
    appId: "1:532752219462:web:e0dcf51da701a7d472f947"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);