import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up.component";

const SignIn = () => {
  useEffect(() => {
    (async function () {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE POPUP</button>
      <button onClick={signInWithGoogleRedirect}>
        SIGN IN WITH GOOGLE REDIRECT
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
