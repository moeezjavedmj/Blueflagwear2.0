import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZiPOU5YYBxAY3Yl7BmVgQtgm1z7Kd8AU",
    authDomain: "haroon-proj.firebaseapp.com",
    projectId: "haroon-proj",
    storageBucket: "haroon-proj.appspot.com",
    messagingSenderId: "826953863321",
    appId: "1:826953863321:web:9536c39c9375f036d06808"
};
const firestoreApiBaseUrl =
    "https://firestore.googleapis.com/v1/projects/haroon-proj/databases/(default)/documents";
const pageSize = 1000;
// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, db, auth, storage };