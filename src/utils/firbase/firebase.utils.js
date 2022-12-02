// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDZJYRe4CtTGIGzdKmp76aBBgo4JqxaKo",
  authDomain: "crwn-clothing-v3-84651.firebaseapp.com",
  projectId: "crwn-clothing-v3-84651",
  storageBucket: "crwn-clothing-v3-84651.appspot.com",
  messagingSenderId: "1076044373619",
  appId: "1:1076044373619:web:8950a8733c5ee350619406",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        })
    } catch (error) {
        console.log('error creating the user', error.message)
    }
  }

  return userDocRef;

};
