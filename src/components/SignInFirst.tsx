import React from 'react'
import { Link } from 'react-router-dom'
import noroad from "../assets/images/noroad.jpg"

function SignInFirst() {
  return (
    <div className='px-4 md:px-12 lg:px-40 py-8 lg:py-20 flex justify-center flex-col items-center text-center'>
        <img src={noroad} alt="" className='h-[40vh] lg:h-[50vh]' />
        <h2 className='text-[24px] font-BoldHelvetica mb-2'>You need to sign in to proceed..</h2>
        <Link to="/login" className='px-4 py-2 rounded bg-[#FF9F0D] text-white'>Sign in</Link>
    </div>
  )
}

export default SignInFirst