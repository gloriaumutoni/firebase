// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBpx_lpKfHylUnTFzH4vR-sYxPOzAwJvfg",
  authDomain: "firabase-course-7f83f.firebaseapp.com",
  projectId: "firabase-course-7f83f",
  storageBucket: "firabase-course-7f83f.appspot.com",
  messagingSenderId: "411103316137",
  appId: "1:411103316137:web:b566bcceeac5c3cac8c1b8",
  measurementId: "G-SQ28V0MZZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)