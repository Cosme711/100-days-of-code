import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBzOs8fguA1tUsboIywVIILg4FnfL8VF-Y",
    authDomain: "chat-app-cf2b5.firebaseapp.com",
    databaseURL: "https://chat-app-cf2b5.firebaseio.com",
    projectId: "chat-app-cf2b5",
    storageBucket: "chat-app-cf2b5.appspot.com",
    messagingSenderId: "294690307109",
    appId: "1:294690307109:web:0c59e3b450a1b0a144d3cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;