
import { Fragment } from "react"
import { GoogleSignWithPopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logUser = async () => {
        const response = await GoogleSignWithPopup();
        console.log(response)
    }
    return(
        <Fragment>
            <h1>Sign In</h1>
            <button onClick={logUser}>Sign In with Google</button>
        </Fragment>
    )
}
export default SignIn