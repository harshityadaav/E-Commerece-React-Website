import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_ceMLQx0KLhGLUu6sIO-t5ZlLApQFjDc",
  authDomain: "e-commerce-react-website-35e2d.firebaseapp.com",
  projectId: "e-commerce-react-website-35e2d",
  storageBucket: "e-commerce-react-website-35e2d.appspot.com",
  messagingSenderId: "264120989195",
  appId: "1:264120989195:web:ff760cabadc065deb6f90e",
  measurementId: "G-SFR2S01T2W"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  export {auth,app} ;