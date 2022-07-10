import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot);
  console.log(userSnapshot.exists()); //check if document exists

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //create doc if not existing
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userDocRef;
};
