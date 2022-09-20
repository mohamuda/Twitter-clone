import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDshZ-ixVRXaEpDLm0ZQ7N-x1wxJGxh67Q",
  authDomain: "twitter-clone-6445d.firebaseapp.com",
  projectId: "twitter-clone-6445d",
  storageBucket: "twitter-clone-6445d.appspot.com",
  messagingSenderId: "1056926323986",
  appId: "1:1056926323986:web:516bd8f41bc0f313fd8fcb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;