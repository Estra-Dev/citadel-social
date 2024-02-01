// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ctm-social.firebaseapp.com",
  projectId: "ctm-social",
  storageBucket: "ctm-social.appspot.com",
  messagingSenderId: "749289753019",
  appId: "1:749289753019:web:541a3346aa14e94ffa1c9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
