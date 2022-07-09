import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2j4emhQhlgGMg6ft7_SoY18D6kVKkiJY",
  authDomain: "olx-project-d606b.firebaseapp.com",
  projectId: "olx-project-d606b",
  storageBucket: "olx-project-d606b.appspot.com",
  messagingSenderId: "1080427572755",
  appId: "1:1080427572755:web:321205c191fca0445159e6",
  measurementId: "G-E6MCGRKFFN"
};

export default firebase.initializeApp(firebaseConfig)
