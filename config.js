import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD4x_fKyjCX52J0wfpLZXXJ2BcwSdRtqoA",
  authDomain: "test1-c6ff4.firebaseapp.com",
  databaseURL: "https://test1-c6ff4.firebaseio.com",
  projectId: "test1-c6ff4",
  storageBucket: "test1-c6ff4.appspot.com",
  messagingSenderId: "965442927368",
  appId: "1:965442927368:web:3f8faa23c320af839b0abd"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

