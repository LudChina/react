import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCK5D2yCEGP55LiCOCsaa3YY9FjUVKfpT8",  
    authDomain: "prueba-c83dc.firebaseapp.com",
    projectId: "prueba-c83dc",
    storageBucket: "prueba-c83dc.appspot.com",
    messagingSenderId: "577003650460",
    appId: "1:577003650460:web:41e39a55abf90b0cc6dc59",
    measurementId: "G-2276VM88Q5"
  };

  firebase.initializeApp(firebaseConfig)
  

export default firebase