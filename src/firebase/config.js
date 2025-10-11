import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCopo_Z17CIfM-lr7QLMlK8kH3sl8aRQ2M",
    authDomain: "proyectofinalgarciapaez.firebaseapp.com",
    projectId: "proyectofinalgarciapaez",
    storageBucket: "proyectofinalgarciapaez.firebasestorage.app",
    messagingSenderId: "46488667",
    appId: "1:46488667:web:c7bc0930cd7b8624e7737e",
    measurementId: "G-BS6S0VJL2K"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export const db = getFirestore(app);