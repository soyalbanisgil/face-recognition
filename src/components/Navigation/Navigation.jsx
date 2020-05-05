import React from 'react'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

const Navigation = ({ currentUser }) => {
    return (
        <nav className="navbar navbar-dark container">
      {/*Logo*/}
      <a className="navbar-brand" href="/">
        <Logo />
      </a>
      {/*Menu*/}
        <ul className="navbar-nav d-flex flex-row justify-content-end w-25">
          {
            currentUser ?
            <li className="nav-item"
              onClick={() => auth.signOut()}
            > <div className="nav-link">Sign Out</div></li>
            :
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
          }
        </ul>
    </nav>
    )
};

export default Navigation;
