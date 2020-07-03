import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyDHY59Qj_wR4ENlGPJlC48_iBU_GctRxuc",
    authDomain: "kids-wish.firebaseapp.com",
    databaseURL: "https://kids-wish.firebaseio.com",
    projectId: "kids-wish",
    storageBucket: "kids-wish.appspot.com",
    messagingSenderId: "473734406755",
    appId: "1:473734406755:web:885e4a7a233a3e6db74e56",
    measurementId: "G-5P2TQ2WX47"
};
// Initialize Firebase
firebase.initializeApp(config);
export const db  = firebase.database();

export const auth = firebase.auth;
// firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
