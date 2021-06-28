import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIhXElDC_90K_WfuN_71YgfCJ3_gb7NRw",
    authDomain: "crowndb-9b313.firebaseapp.com",
    projectId: "crowndb-9b313",
    storageBucket: "crowndb-9b313.appspot.com",
    messagingSenderId: "257519395660",
    appId: "1:257519395660:web:a5aaecbd5dd888687ba5e9",
    measurementId: "G-3M10EWLJB7"
  };


  export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(err){
        console.log('error creating user',err.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;