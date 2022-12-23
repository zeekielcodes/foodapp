import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { Link, Navigate } from "react-router-dom"
import { FiLock, FiMail } from "react-icons/fi"
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useStateContext } from '../../components/StoreContext'
import AuthSignins from '../../components/AuthSignins'

function Login() {
    const {state, dispatch} = useStateContext()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const signIn = (e:React.FormEvent) => {
        e.preventDefault()
        const user = {email, password}
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then(userCredential => {
            const user = userCredential.user
            window.navigator.vibrate(1000)
            const modalContent = {
                title: "Logged in",
                text: "Account logged in successfully"
              }
            dispatch({type:"OPEN_MODAL", payload:modalContent})
            dispatch({type:"LOGGED_IN", payload:user})
        })
        .catch(error => {
            const modalContent = {
                title: `${error.code}`,
                text: `${error.message}`
              }
            dispatch({type:"OPEN_MODAL", payload:modalContent})
        })
    }
if (!state.isAuthenticated) {
  return (
    <div>
        <Banner pageName="Sign in" page="Sign in"/>
        <div className="auth">
            <form onSubmit={signIn}>
                <h2>Sign In</h2>
                <div className="inputfield">
                    <FiMail />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Email' id="email" />
                </div>
                <div className="inputfield">
                    <FiLock />
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' id="password" />
                </div>
                <input type="checkbox" name="remember" id="remember" /> &nbsp;Rememeber me ?
                <button type="submit" className='bg-[#FF9F0D] border-none text-white'>Sign in</button>
                <p><Link to="/">Forgot password ?</Link></p>

                <div className="break">
                    <hr />
                    <h3>OR</h3>
                    <hr />
                </div>
                <AuthSignins />
                <p className="create-account"><Link to="/signup">Create an account</Link></p>
                
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

export default Login