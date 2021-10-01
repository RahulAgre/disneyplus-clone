import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMSwNEU3ZCLK8mVp8hwqcoDwV7nCOaobk",
  authDomain: "disneyplus-clone-21597.firebaseapp.com",
  projectId: "disneyplus-clone-21597",
  storageBucket: "disneyplus-clone-21597.appspot.com",
  messagingSenderId: "17249525247",
  appId: "1:17249525247:web:88955ce091874ee3321bca",
  measurementId: "G-FND3T12PQ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
