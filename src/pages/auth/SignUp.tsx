import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { Link, Navigate } from "react-router-dom"
import { BiUser } from "react-icons/bi"
import { FiLock, FiMail } from "react-icons/fi"
import { auth, db } from '../../firebase'
import { useStateContext } from '../../components/StoreContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore/lite'
import AuthSignins from '../../components/AuthSignins'

function SignUp() {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { state, dispatch } = useStateContext()

    const registerUser = (e: React.FormEvent) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const modalContent = {
                    title: "Account created",
                    text: "Account created successfully"
                }
                window.navigator.vibrate(1000)
                dispatch({ type: "OPEN_MODAL", payload: modalContent })
                const createdUser = userCredential.user;
                setDoc(doc(db, "users", createdUser.uid), {
                    Name: name
                })
                dispatch({type:"LOGGED_IN", payload:createdUser})
            })
            .catch((error) => {
                const modalContent = {
                    title: `${error.code}`,
                    text: `${error.message}`
                }
                dispatch({ type: "OPEN_MODAL", payload: modalContent })
            });


    }

if (!state.isAuthenticated) {
    return (
        <div>
            <Banner pageName="Sign up page" page="Sign up" />
            <div className="auth">
                <form onSubmit={registerUser}>
                    <h2>Sign Up</h2>
                    <div className="inputfield">
                        <BiUser />
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' name="name" id="name" />
                    </div>
                    <div className="inputfield">
                        <FiMail />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Email' id="email" />
                    </div>
                    <div className="inputfield">
                        <FiLock />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Password' id="password" />
                    </div>
                    <button type="submit" className='bg-[#FF9F0D] border-none text-white'>Sign Up</button>
                    <p><Link to="/">Forgot password ?</Link></p>

                    <div className="break">
                        <hr />
                        <h3>OR</h3>
                        <hr />
                    </div>
                    <AuthSignins />
                    <p className="create-account">Have an account ? <Link to="/login">Sign in</Link></p>

                </form>
            </div>
        </div>
    )
} else {
    return (
        <Navigate to="/profile" />
    )
}
}

export default SignUp