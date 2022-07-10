import { cloneElement } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>SIGN IN BUTTON</button>
    </div>
  );
};

export default SignIn;
