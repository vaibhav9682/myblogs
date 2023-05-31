

// options 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr8RhpMJBuYpVIzqm-F4V4o1DIVw5TbWU",
  authDomain: "blog-react-hooks-5fa44.firebaseapp.com",
  projectId: "blog-react-hooks-5fa44",
  storageBucket: "blog-react-hooks-5fa44.appspot.com",
  messagingSenderId: "342988368703",
  appId: "1:342988368703:web:d4134779754fb556e3018a"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);