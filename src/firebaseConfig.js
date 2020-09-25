import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_-HywgpMnCARqSO9cI0kGDiSESpJsFUY",
    authDomain: "instagram-clone-2f03e.firebaseapp.com",
    databaseURL: "https://instagram-clone-2f03e.firebaseio.com",
    projectId: "instagram-clone-2f03e",
    storageBucket: "instagram-clone-2f03e.appspot.com",
    messagingSenderId: "166432704896",
    appId: "1:166432704896:web:65c640df776c879fb75965"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };