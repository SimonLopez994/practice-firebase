import { Fragment, useEffect } from "react";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
const SignIn = () => {
    useEffect(() => {
        const fetchRedirectUser = async () => {
            const response = await getRedirectResult(auth);
            console.log(response)
        }
        fetchRedirectUser()
    }, [])
    const logUserWithPopup = async () => {
     const { user } = await signInWithGooglePopup();
     createUserDocFromAuth(user)
     console.log(user);
    }
    return(
        <Fragment>
            <h1>Sign In your account</h1>
            <button onClick={logUserWithPopup}>Sign In with Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button>
        </Fragment>
    )
}
export default SignIn;