import * as firebase from 'firebase';
require('@firebase/firestore');

// When ever you are working with firestore you need to require and export firebase.firestore.
console.log(firebase.firestore);
const firebaseConfig = {
  apiKey: "AIzaSyCMrKHI0OsqSI9IT0clhpBDNTPUNmm0y9s",
  authDomain: "story-hub-3-1f194.firebaseapp.com",
  projectId: "story-hub-3-1f194",
  storageBucket: "story-hub-3-1f194.appspot.com",
  messagingSenderId: "109103205287",
  appId: "1:109103205287:web:0857c51e31cf441710c482"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
