import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDz6cApNct7t7ecEJzfROzK3_3HH4jCukA",
    authDomain: "disney-plus-clone-1654b.firebaseapp.com",
    projectId: "disney-plus-clone-1654b",
    storageBucket: "disney-plus-clone-1654b.appspot.com",
    messagingSenderId: "164564154514",
    appId: "1:164564154514:web:0ffddbff0eabf7eb490e4b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;