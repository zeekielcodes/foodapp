import React from 'react'
import Banner from '../../components/Banner'
import { useStateContext } from '../../components/StoreContext'
import { getAuth, signOut } from "firebase/auth";

function Profile() {
    const {state, dispatch} = useStateContext()
    

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
  return (
    <div>
        <Banner pageName="My Account" page="Profile"/>
        <div className="profile">
            {state.user.email}
        </div>
    </div>
  )
}

export default Profile