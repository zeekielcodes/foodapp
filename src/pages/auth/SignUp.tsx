import React, { useState} from 'react'
import Banner from '../../components/Banner'
import { Link } from "react-router-dom"
import { BiUser } from "react-icons/bi"
import { FcGoogle} from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import { FiLock, FiMail } from "react-icons/fi"
import { createUser } from '../../firebase'

function SignUp() {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

// useEffect(() => {
//     const coll = createUser()
//     console.log(coll);
    
// },[])

const registerUser = (e:React.FormEvent) => {
    e.preventDefault()
    const user = {name, email, password}
    createUser(user)
}

  return (
    <div>
        <Banner pageName="Sign up page" page="Sign up"/>
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

                <div className="auths">
                  <FcGoogle />
                  <button>Sign in with Google</button>
                </div>
                <div className="auths">
                    <BsApple />
                    <button>Sign in with Apple</button>
                </div>
                <p className="create-account">Have an account ? <Link to="/login">Sign in</Link></p>
                
            </form>
        </div>
    </div>
  )
}

export default SignUp