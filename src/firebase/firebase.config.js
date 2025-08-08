import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpziFPD0hFwUTOhzid1BkmokQ-zqxOmbI",
  authDomain: "plantcaretracker-a10.firebaseapp.com",
  projectId: "plantcaretracker-a10",
  storageBucket: "plantcaretracker-a10.firebasestorage.app",
  messagingSenderId: "93748155147",
  appId: "1:93748155147:web:379d63750379e4978d480e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
