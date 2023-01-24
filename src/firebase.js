import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2lGujAidxGuw0K_V-9CVzl_Fa_zWvstw",
  authDomain: "phone-auth-973e3.firebaseapp.com",
  projectId: "phone-auth-973e3",
  storageBucket: "phone-auth-973e3.appspot.com",
  messagingSenderId: "1012089126325",
  appId: "1:1012089126325:web:d7e93d5b6cde70e56fadfc",
  measurementId: "G-PHRDYGT2E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
