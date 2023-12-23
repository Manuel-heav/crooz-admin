import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd7gGrZFC3pixJ_b7yoa1XuMOsWYQNOPA",
  authDomain: "crooz-a58b5.firebaseapp.com",
  projectId: "crooz-a58b5",
  storageBucket: "crooz-a58b5.appspot.com",
  messagingSenderId: "1053766965216",
  appId: "1:1053766965216:web:ceaa8ca5f9ffdea6ea3d85",
  measurementId: "G-PPRNQ4XSJQ",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage, db, auth };
