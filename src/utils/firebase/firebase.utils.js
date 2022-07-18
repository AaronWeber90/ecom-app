import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF0rXsajb8E8Eb-a51-bp87BWMwHRsG34",
  authDomain: "udemy-ecom-app.firebaseapp.com",
  projectId: "udemy-ecom-app",
  storageBucket: "udemy-ecom-app.appspot.com",
  messagingSenderId: "707801324581",
  appId: "1:707801324581:web:ec57998bc5658a24f373cc",
};

const firebasApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(); // there are different provider like fb, github etc
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {} //if some values are missing like displayName
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  console.log("user exists?", userSnapshot.exists()); //check if document exists

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //create doc if not existing
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {

      console.log("error creating the user", error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
