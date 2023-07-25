import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //* for Cloud Firestore
import firebase from 'react-native-firebase';

// Adicione aqui as suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAaiSnGLcVzbRQ1S53nTyNJH82q2RBs3eU",
  authDomain: "task-b637b.firebaseapp.com",
  projectId: "task-b637b",
  storageBucket: "task-b637b.appspot.com",
  messagingSenderId: "1076039995798",
  appId: "1:1076039995798:web:bf841842be465256c5cdb7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);