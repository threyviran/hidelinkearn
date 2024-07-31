// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCthPas-AnMWyk9hFKT4qzCS-uQoLUDRLU",
    authDomain: "hidelinkearn2.firebaseapp.com",
    projectId: "hidelinkearn2",
    storageBucket: "hidelinkearn2.appspot.com",
    messagingSenderId: "200872150069",
    appId: "1:200872150069:web:6028d58c93d2664bd59d7c",
    measurementId: "G-XC7XR7BCQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
