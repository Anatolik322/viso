
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtRCIIVuSXKyZOktvQMoBLA6E2hzEtrwM",
  authDomain: "viso-2cff3.firebaseapp.com",
  projectId: "viso-2cff3",
  storageBucket: "viso-2cff3.appspot.com",
  messagingSenderId: "871891019829",
  appId: "1:871891019829:web:006667aff7d587edc9297c",
  measurementId: "G-VPLMH7T8Z3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);