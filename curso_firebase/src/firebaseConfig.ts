import firebase from 'firebase/app';
import 'firebase/firestore'; // Certifique-se de importar o Firestore

const firebaseConfig = {
    apiKey: "AIzaSyC3IUQiSM49EW1lBjBZQpGFN0uwW6aawhY",
    authDomain: "curso-fb-5c725.firebaseapp.com",
    projectId: "curso-fb-5c725",
    storageBucket: "curso-fb-5c725.appspot.com",
    messagingSenderId: "448054036312",
    appId: "1:448054036312:web:946cc7ecc39512dacc872d",
    measurementId: "G-G83D17WNYF"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = firebase.firestore(); // Correto, aqui criamos a instância

// Exporta a instância de Firestore
export { db };
