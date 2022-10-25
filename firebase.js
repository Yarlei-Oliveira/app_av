// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAe54POTmdsXjlp6AR6Phz8FPYFhh31K0",
    authDomain: "trabalhoav1react.firebaseapp.com",
    databaseURL: "https://trabalhoav1react-default-rtdb.firebaseio.com",
    projectId: "trabalhoav1react",
    storageBucket: "trabalhoav1react.appspot.com",
    messagingSenderId: "876060023449",
    appId: "1:876060023449:web:3c6b4fcf61b8a66ea0f608",
    measurementId: "G-QF9ZKS6SEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };