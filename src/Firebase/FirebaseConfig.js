import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBofhtmHvvldffiq9BNt2G3RQ0wa7Xd_KM",
    authDomain: "fir-recipe-7631b.firebaseapp.com",
    databaseURL: "https://fir-recipe-7631b-default-rtdb.firebaseio.com",
    projectId: "fir-recipe-7631b",
    storageBucket: "fir-recipe-7631b.appspot.com",
    messagingSenderId: "289487740363",
    appId: "1:289487740363:web:303059ed77a5264b40aa4e",
    measurementId: "G-H971QGG0FR"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;