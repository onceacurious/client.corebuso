import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookBoxLine } from "react-icons/ri"
import { SiGmail } from "react-icons/si"
import { BsPhone } from 'react-icons/bs'
import { MdLightMode, MdNightlight } from "react-icons/md"

import MainContext from '../../context/MainContext'
import "./navbar.scss"

const Navbar = () => {
    const { setDark, dark } = useContext(MainContext);

    return (
        <div className='navbar gradient-bg-dark container'>
            <h1 className='navbar-brand'>
                <Link to='/' className='gradient-text' tabIndex={-1}>
                    COREBUSO
                </Link>
            </h1>
            <ul className='nav-item flex-grow'>
                <li className='nav-list'>
                    <Link className='nav-link clr-accent fs-medium' to="/">Home</Link>
                </li>
                <li className='nav-list'>
                    <Link className='nav-link clr-accent fs-medium' to="/about-us">About</Link>
                </li>
                <li className='nav-list'>
                    <Link className='nav-link clr-accent fs-medium' to="/admin">Admin</Link>
                </li>
            </ul>

            <ul className='nav-contact'>
                <li className='nav-contact-list'>
                    <a className='nav-contact-link clr-primary fs-small' href="http://" target="_blank" rel="noopener noreferrer">

                        <RiFacebookBoxLine className='m-end-1 fs-regular' />
                        @corebuso
                    </a>
                </li>
                <li className='nav-contact-list'>

                    <p className='clr-primary fs-small'>
                        <SiGmail className='m-end-1 fs-regular' />
                        corebuso.ph@gmail.com
                    </p>
                </li>
                <li className='nav-contact-list'>

                    <p className="clr-primary fs-small">
                        <BsPhone className='m-end-1 fs-regular' />
                        +63 0926 655 4047
                    </p>
                </li>
            </ul>
            <button className={dark ? 'btn btn-icon' : 'btn btn-icon hide'} onClick={() => setDark(false)}>
                <MdLightMode className='fs-medium clr-accent' />
            </button>
            <button className={dark ? 'btn btn-icon hide' : 'btn btn-icon'} onClick={() => setDark(true)}>
                <MdNightlight className='fs-medium clr-accent' />
            </button>
        </div >
    )
}

export default Navbar