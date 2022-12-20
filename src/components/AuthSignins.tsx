import React from 'react'
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useStateContext } from './StoreContext';


function AuthSignins() {
    const { state, dispatch } = useStateContext()

    const googleSignin = () => {

        // const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(result);
                const modalContent = {
                    title: "Authorized",
                    text: `${user.email}'s Google sign-in authorization successful`
                }
                dispatch({ type: "OPEN_MODAL", payload: modalContent })
                dispatch({ type: "LOGGED_IN", payload: user })
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // ...
            }).catch((error) => {
                const modalContent = {
                    title: `${error.code}`,
                    text: `${error.message}`
                }
                dispatch({ type: "OPEN_MODAL", payload: modalContent })

                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <>
            <div className="auths">
                <FcGoogle />
                <button type='button' onClick={googleSignin}>Sign in with Google</button>
            </div>
            <div className="auths">
                <BsApple />
                <button type='button'>Sign in with Apple</button>
            </div></>
    )
}

export default AuthSignins