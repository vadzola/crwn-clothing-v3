import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../../utils/firbase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user)
};
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
