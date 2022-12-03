import React from 'react'
import {Link} from "react-router-dom"
import Banner from '../components/Banner'

function Error() {
  return (
    <div>
        <Banner pageName="404 Error" page="404"/>
        <div className="errorpage">
            <h1>404!</h1>
            <h2>Oops! Looks like something went wrong</h2>
            <p>Page Cannot be found! we’ll have it figured out in no time. Meanwhile, cheek out these fresh ideas:</p>
            <Link to="/">Go to home</Link>
        </div>
       
    </div>
  )
}

export default Error