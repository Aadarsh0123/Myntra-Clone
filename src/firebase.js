import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAfmZZW5oHvWQ28Gea6FZrQ8fVI86sTdE",
  authDomain: "myntraclone-983ef.firebaseapp.com",
  projectId: "myntraclone-983ef",
  storageBucket: "myntraclone-983ef.appspot.com",
  messagingSenderId: "59714769311",
  appId: "1:59714769311:web:302f3e5b2e7f8ee6c4edaa",
  measurementId: "G-KM9KHPFZWR",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };

export default app;
