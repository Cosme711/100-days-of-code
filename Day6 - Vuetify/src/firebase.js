import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzOs8fguA1tUsboIywVIILg4FnfL8VF-Y",
    authDomain: "chat-app-cf2b5.firebaseapp.com",
    databaseURL: "https://chat-app-cf2b5.firebaseio.com",
    projectId: "chat-app-cf2b5",
    storageBucket: "chat-app-cf2b5.appspot.com",
    messagingSenderId: "294690307109",
    appId: "1:294690307109:web:0c59e3b450a1b0a144d3cc"
})

const db = firebaseApp.firestore()
// collection reference
const messages = db.collection('messages')

// exports collection reference to use it in the Vuex Store
export { messages }


export default firebase;