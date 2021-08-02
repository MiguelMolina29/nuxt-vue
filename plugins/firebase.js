import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyCxzQIYZiCrOIgkeh-iqjey2c8nKbYNddY",
  authDomain: "nuxt-d5989.firebaseapp.com",
  projectId: "nuxt-d5989",
  storageBucket: "nuxt-d5989.appspot.com",
  messagingSenderId: "256215049361",
  appId: "1:256215049361:web:6959f5d09605faf53d8b30"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}
