import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { useStateContext } from '../../components/StoreContext'
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import UserProfile from '../../components/UserProfile';
import UserOrders from '../../components/UserOrders';
import { auth } from '../../firebase';

function Profile() {
    const { state, dispatch } = useStateContext()
    const [display, setDisplay] = useState(true)

    const logOut = () => {
        signOut(auth)
            .then(() => {
                const modalContent = {
                    title: "Logged out",
                    text: "Account logged out successfully"
                  }
                dispatch({type:"OPEN_MODAL", payload:modalContent})
                dispatch({type:"LOGGED_OUT"})
            })
            .catch((error) => {
                const modalContent = {
                    title: `${error.code}`,
                    text: `${error.message}`
                  }
                dispatch({type:"OPEN_MODAL", payload:modalContent})
            });

    }

    if (state.isAuthenticated) {
        return (
            <div>
                <Banner pageName="My Account" page="Profile" />
                <div className="profile">
                    <div className="controls">
                        <button onClick={() => setDisplay(true)} className={display ? "text-[#FF9F0D]" : "text-red-400"}>Profile</button>
                        <button onClick={() => setDisplay(false)} className={!display ? "text-[#FF9F0D]" : "text-red-400"}>Orders</button>
                        <button onClick={logOut}>Log out</button>
                    </div>

                    {state.user.email}
                    {display ?
                        <UserProfile /> :
                        <UserOrders />}
                </div>
            </div>
        )
    } else {
        return (
            <Navigate to="/login" />
        )
    }
}

export default Profile