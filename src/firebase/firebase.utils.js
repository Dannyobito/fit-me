import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyA7DWocV7fwt1BYHAYX1aOaIFF2nbcUv18",
    authDomain: "fit-mee.firebaseapp.com",
    projectId: "fit-mee",
    storageBucket: "fit-mee.appspot.com",
    messagingSenderId: "822255138090",
    appId: "1:822255138090:web:a68922f6fcbc2d1dffda53",
    measurementId: "G-G6QFJVNCH4"
  };
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
      return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);
 export default firebase;