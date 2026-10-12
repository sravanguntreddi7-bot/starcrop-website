import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLoqD-pRW0paYWFaW_0S00-9iFPizTOos",
  authDomain: "starcrop-agro.firebaseapp.com",
  projectId: "starcrop-agro",
  storageBucket: "starcrop-agro.firebasestorage.app",
  messagingSenderId: "817975803331",
  appId: "1:817975803331:web:07a0a07b9a39ab24401176",
  measurementId: "G-F5J7J858LZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);