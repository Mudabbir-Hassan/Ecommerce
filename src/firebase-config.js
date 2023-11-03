import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSl9GtUcOTJyneMqgTmI7ufH_9P8r_zrU",
  authDomain: "e-commerce-f39a5.firebaseapp.com",
  projectId: "e-commerce-f39a5",
  storageBucket: "e-commerce-f39a5.appspot.com",
  messagingSenderId: "434824962010",
  appId: "1:434824962010:web:2636a2846de15e6adeaae3",
  measurementId: "G-ZN65VBC60S"
};

const app= initializeApp(firebaseConfig);
export const auth = getAuth(app);