import React from 'react'
import {Link} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
   
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Restaurants</Link>
                </li>
                <li className="nav-item">
                    <Link to='/'  className="nav-link" >Reviews</Link>
                </li>
                <li className="nav-item">
                    <Link to='/'  className="nav-link" >Sign Up</Link>
                </li>
            </ul>
   
        )
              
}

export default SignedOutLinks
