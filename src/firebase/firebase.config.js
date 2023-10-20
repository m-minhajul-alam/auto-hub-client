// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAl9C86WOADc2VVUAHlB9fffRDPkPHz03M",
  authDomain: "auto-hub-003.firebaseapp.com",
  projectId: "auto-hub-003",
  storageBucket: "auto-hub-003.appspot.com",
  messagingSenderId: "540047461525",
  appId: "1:540047461525:web:921f6aaeff6ac5783e9f9c"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;