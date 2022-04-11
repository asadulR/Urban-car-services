import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPxhq6WOLmavZryRMQAWWCQsLbIgT3X20",
  authDomain: "genius-car-services-78fb0.firebaseapp.com",
  projectId: "genius-car-services-78fb0",
  storageBucket: "genius-car-services-78fb0.appspot.com",
  messagingSenderId: "317634314693",
  appId: "1:317634314693:web:c8137817794caa9f900bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;