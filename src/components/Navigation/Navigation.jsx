import React from 'react'
import Logo from '../Logo/Logo';

const Navigation = () => {
    return (
        <nav className="navbar navbar-dark container">
      {/*Logo*/}
      <a className="navbar-brand" href="/">
        <Logo />
      </a>
      {/*Menu*/}
        <ul className="navbar-nav d-flex flex-row justify-content-end w-25">
          <li className="nav-item">
            <a className="nav-link" href="/">Sign Out</a>
          </li>
        </ul>
    </nav>
    )
};

export default Navigation;
