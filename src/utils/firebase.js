import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAG7o1xMh9HgMJDgGo-CGyMo8vtnzDoCdY",
  authDomain: "journalapp-35cf7.firebaseapp.com",
  projectId: "journalapp-35cf7",
  storageBucket: "journalapp-35cf7.appspot.com",
  messagingSenderId: "333633859376",
  appId: "1:333633859376:web:cafa9679daab80059e22f5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db, 
  googleAuthProvider, 
  firebase
}
