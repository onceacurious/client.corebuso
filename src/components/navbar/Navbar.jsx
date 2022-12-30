import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import MainContext from "../../context/MainContext";
import "./navbar.scss";

const Navbar = () => {
    const { setDark, dark, setShowMenu, showMenu } = useContext(MainContext);

    const [toggle, setToggle] = useState(false);

    const getViewWidth = () => {
        const size = window.innerWidth;
        if (size > 820) {
            setShowMenu(false);
            setToggle(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", getViewWidth, false);

        return () => {
            window.removeEventListener("resize", getViewWidth, false);
        };
    }, []);
    return (
        <>
            <div
                className={
                    !showMenu
                        ? "nav-menu nav-menu-hide"
                        : "nav-menu nav-menu-show"
                }
            >
                <Menu menu_class="display-flex flex-column" />
            </div>
            <div className="navbar bg-glass container">
                <h1 className="navbar-brand">
                    <Link to="/" className="gradient-text" tabIndex={-1}>
                        COREBUSO
                    </Link>
                </h1>

                <Menu menu_class="hide-tablet" />
                <SocialMedia social_class="hide-zoom-in" />

                {/* Mode */}

                <div className="mode">
                    <button
                        title="go light"
                        className={dark ? "" : "scale-out-center"}
                        onClick={() => setDark(false)}
                    >
                        <MdLightMode className="fs-medium clr-accent" />
                    </button>
                    <button
                        title="go dark"
                        className={dark ? "hide" : ""}
                        onClick={() => setDark(true)}
                    >
                        <MdNightlight className="fs-medium clr-accent" />
                    </button>
                </div>

                {/* Hamburger */}
                <div className="burger-menu display-tablet">
                    <button
                        id="burgerShow"
                        onClick={() => (setToggle(true), setShowMenu(true))}
                        className={toggle ? "hide" : "show"}
                    >
                        <GiHamburgerMenu className="fs-large clr-accent" />
                    </button>
                    <button
                        id="burgerClose"
                        onClick={() => (setToggle(false), setShowMenu(false))}
                        className={!toggle ? "hide" : "show"}
                    >
                        <IoCloseSharp className="fs-large clr-accent" />
                    </button>
                </div>
            </div>
            <div className="sub-nav">
                <SocialMedia social_class="display-zoom-in jc-evenly flex-wrap w100 p-1" />
            </div>
        </>
    );
};

export default Navbar;

const SocialMedia = ({ social_class }) => {
    return (
        <ul className={`"nav-contact" ${social_class}`}>
            <li className="nav-contact-list">
                <a
                    className="nav-contact-link clr-primary fs-small"
                    href="https://www.facebook.com/corebuso.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <RiFacebookBoxLine className="m-end-1 fs-regular" />
                    @corebuso
                </a>
            </li>
            <li className="nav-contact-list">
                <p className="clr-primary fs-small">
                    <SiGmail className="m-end-1 fs-regular" />
                    corebuso.ph@gmail.com
                </p>
            </li>
            <li className="nav-contact-list">
                <p className="clr-primary fs-small">
                    <BsPhone className="m-end-1 fs-regular" />
                    +63 0926 655 4047
                </p>
            </li>
        </ul>
    );
};

const Menu = ({ menu_class }) => {
    return (
        <ul className={`"nav-item flex-grow" ${menu_class}`}>
            <li className="nav-list">
                <Link className="nav-link clr-accent fs-medium" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-list">
                <Link className="nav-link clr-accent fs-medium" to="/about-us">
                    About
                </Link>
            </li>
            <li className="nav-list">
                <Link className="nav-link clr-accent fs-medium" to="/admin">
                    Admin
                </Link>
            </li>
        </ul>
    );
};
