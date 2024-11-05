// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa o Firestore

const firebaseConfig = {
    apiKey: "AIzaSyADEDLfH0F95qVDWCgcAeJe8-MZjRH2Tz4",
    authDomain: "pro-player-site.firebaseapp.com",
    projectId: "pro-player-site",
    storageBucket: "pro-player-site.appspot.com",
    messagingSenderId: "1058593893377",
    appId: "1:1058593893377:web:37a272747477965c00e400",
    measurementId: "G-9LM85G0WW4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firebase Authentication
const auth = getAuth(app);

// Inicializa o Firestore
const db = getFirestore(app);

// Exporta auth e db para serem utilizados no app
export { auth, db }