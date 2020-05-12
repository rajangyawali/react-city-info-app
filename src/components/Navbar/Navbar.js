import React from 'react'
import './Navbar.scss'
import logo from '../../logo.png'

const Navbar = (props) => {
  return (
    <nav className="navbar">
        <img src={logo} alt="City Tours Logo"/>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    about
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                    tours
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
