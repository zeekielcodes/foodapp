import React from 'react'
import { useStateContext } from './StoreContext'

function UserProfile() {
  const {state, dispatch} = useStateContext()
  return (
    <div>
      <h3 className='font-BoldHelvetica text-[22px] mb-4'>My Profile</h3>
      <img src={state.user.photoURL ? state.user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCoHLktPNbzYjYcrFoYnlmxX5SfRKCIJQsA&usqp=CAU"} className="mb-4 rounded-full" alt="" />
      <label htmlFor="name">Full Name</label>
      <div className="bg-[#C1C1C1] w-full md: w-3/4 lg:w-1/2 h-[40px] rounded mb-4">
        <input type="text" name="name" id="name" disabled className='bg-none bg-transparent w-full h-full px-2' value={state.user.displayName} />
      </div>
      <label htmlFor="email">Email</label>
      <div className="bg-[#C1C1C1] w-full md: w-3/4 lg:w-1/2 h-[40px] rounded mb-4">
        <input type="text" name="email" id="email" disabled className='bg-none bg-transparent w-full h-full px-2' value={state.user.email} />
      </div>
      <label htmlFor="phone">Phone</label>
      <div className="bg-[#C1C1C1] w-full md: w-3/4 lg:w-1/2 h-[40px] rounded mb-4">
        <input type="text" name="phone" id="phone" disabled className='bg-none bg-transparent w-full h-full px-2' value={state.user.phone} />
      </div>
      <button className='px-4 py-2 rounded bg-[#FF9F0D] text-white' disabled>Edit Profile</button>
    </div>
  )
}

export default UserProfile