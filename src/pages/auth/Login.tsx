import React from 'react'
import Banner from '../../components/Banner'
import { Link } from "react-router-dom"
import { FcGoogle} from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import { FiLock, FiMail } from "react-icons/fi"

function Login() {
  return (
    <div>
        <Banner pageName="Sign in" page="Sign in"/>
        <div className="auth">
            <form>
                <h2>Sign In</h2>
                <div className="inputfield">
                    <FiMail />
                    <input type="email" name="email" placeholder='Email' id="email" />
                </div>
                <div className="inputfield">
                    <FiLock />
                    <input type="password" name="password" placeholder='Password' id="password" />
                </div>
                <input type="checkbox" name="remember" id="remember" /> &nbsp;Rememeber me ?
                <button type="submit" className='bg-[#FF9F0D] border-none text-white'>Sign in</button>
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
                <p className="create-account"><Link to="/signup">Create an account</Link></p>
                
            </form>
        </div>
    </div>
  )
}

export default Login