import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
   apiKey: "AIzaSyCiUDkHBS-zyjMiYiYsYYUnUbCtJAgXvRE",
   authDomain: "la-casetta-68948.firebaseapp.com",
   projectId: "la-casetta-68948",
   storageBucket: "la-casetta-68948.appspot.com",
   messagingSenderId: "940684025874",
   appId: "1:940684025874:web:a76a858184ab9128bb78cb",
}

firebase.initializeApp(firebaseConfig)

export default firebase
