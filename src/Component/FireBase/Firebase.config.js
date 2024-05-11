// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEY90qKEIoSwXClgtDJGNnNhiLz2RrU20",
  authDomain: "careerbuilder-97259.firebaseapp.com",
  projectId: "careerbuilder-97259",
  storageBucket: "careerbuilder-97259.appspot.com",
  messagingSenderId: "179871800789",
  appId: "1:179871800789:web:919b79c8d8c04c5c27b15c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// export default auth;