import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2yFlU4Cf5qjMtz3JV-vcutV37viC7XYs",
    authDomain: "face-recognition-web-app.firebaseapp.com",
    databaseURL: "https://face-recognition-web-app.firebaseio.com",
    projectId: "face-recognition-web-app",
    storageBucket: "face-recognition-web-app.appspot.com",
    messagingSenderId: "939662649616",
    appId: "1:939662649616:web:c43fb030876e623a271d95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google authrntication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;