import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCLfBGcUVC2_nkEiKLucS3BY_dC34Sl_A4",
    authDomain: "financetracker-d23ea.firebaseapp.com",
    projectId: "financetracker-d23ea",
    storageBucket: "financetracker-d23ea.firebasestorage.app",
    messagingSenderId: "473606975839",
    appId: "1:473606975839:web:06bf5107c1416ed1f9c6ea",
    measurementId: "G-F80JFB69HN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };