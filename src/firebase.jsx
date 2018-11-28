import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCPXvGX0L550APU9I7RlX0fwnpV1bXmrDQ",
    authDomain: "insta-clone-f0da7.firebaseapp.com",
    databaseURL: "https://insta-clone-f0da7.firebaseio.com",
    projectId: "insta-clone-f0da7",
    storageBucket: "",
    messagingSenderId: "435416146437"
  };
  firebase.initializeApp(config);

export default firebase;