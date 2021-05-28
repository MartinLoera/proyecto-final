import firebase from 'firebase/app';
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyC2N6SGZSeVjIirmmQ-argu-k57bNa_AQ4",
    authDomain: "parcial2-pp.firebaseapp.com",
    projectId: "parcial2-pp",
    storageBucket: "parcial2-pp.appspot.com",
    messagingSenderId: "1095673132961",
    appId: "1:1095673132961:web:0bda361037bf1eb6663de0"
  };
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()