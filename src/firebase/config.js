// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRjXBryF_7uxqbzY3ztSzzw3UvYaQZ1dQ",
  authDomain: "wind-sculpture-cfc81.firebaseapp.com",
  projectId: "wind-sculpture-cfc81",
  storageBucket: "wind-sculpture-cfc81.appspot.com",
  messagingSenderId: "531131087690",
  appId: "1:531131087690:web:27f1209dee4506e029dfb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const projectStorage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };