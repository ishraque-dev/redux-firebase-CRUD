// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJqHesubNdAZuCObE2FBQZw42MEo31jig',
  authDomain: 'react-firebase-crud-20c93.firebaseapp.com',
  projectId: 'react-firebase-crud-20c93',
  storageBucket: 'react-firebase-crud-20c93.appspot.com',
  messagingSenderId: '567981589158',
  appId: '1:567981589158:web:a5319892ec344c5cf9aa67',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
