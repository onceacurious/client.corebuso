import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='navbar-brand'>
                <Link to='/' className='gradient-text'>
                    COREBUSO
                </Link>
            </h1>
            <ul className='nav-item'>
                <li className='nav-list'>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-list'>
                    <Link className='nav-link' to="/about-us">About</Link>
                </li>
                <li className='nav-list'>
                    <Link className='nav-link' to="/admin">Admin</Link>
                </li>
            </ul>

            <ul className='nav-contact'>
                <li className='nav-contact-list'>
                    <p>@corebuso</p>
                </li>
                <li className='nav-contact-list'>
                    <p>corebuso.ph@gmail.com</p>
                </li>
                <li className='nav-contact-list'>
                    <p>+63 0926 655 4047</p>
                </li>
            </ul>
            <button className='btn btn-icon'>
                +
            </button>
        </div>
    )
}

export default Navbar