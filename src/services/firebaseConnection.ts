import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8iigu9W8cJxV_JTSBogvCMtY1tu26ix0",
  authDomain: "reactlinks-9045a.firebaseapp.com",
  projectId: "reactlinks-9045a",
  storageBucket: "reactlinks-9045a.appspot.com",
  messagingSenderId: "375644389382",
  appId: "1:375644389382:web:366a312e5e9af27d5ec387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};



