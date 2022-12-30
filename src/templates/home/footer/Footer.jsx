import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import {
    SiMinutemailer,
    SiFiverr,
    SiUpwork,
    SiReact,
    SiVite,
    SiVisualstudiocode,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

import "./footer.scss";

const handleSubmit = (e) => {
    e.preventDefault();
};
const Footer = () => {
    return (
        <>
            <footer id="homeFooter" className="container">
                <div className="home-footer-main pt-1">
                    <div className="section-1 clr-accent">
                        <p className="fw-bold fs-medium">
                            Designed and developed by:
                        </p>
                        <p className="ps-4">Francis Deo Aurelio</p>
                        <p className="clr-accent fw-bold pt-2 fs-medium">
                            Powered by:
                        </p>
                        <ul className="home-footer-powered-list ps-2">
                            <li className="home-footer-powered-list-item">
                                <a
                                    href="https://www.djangoproject.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <DiDjango title="django" />
                                </a>
                            </li>
                            <li className="home-footer-powered-list-item">
                                <a
                                    href="https://www.figma.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiFigma title="figma" />
                                </a>
                            </li>
                            <li className="home-footer-powered-list-item">
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiReact title="react" />
                                </a>
                            </li>
                            <li className="home-footer-powered-list-item">
                                <a
                                    href="https://vitejs.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiVite title="vite" />
                                </a>
                            </li>
                            <li className="home-footer-powered-list-item">
                                <a
                                    href="https://code.visualstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiVisualstudiocode title="vscode" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container-con">
                        <div className="triangle"></div>
                        <div className="square"></div>
                    </div>
                    <div className="section-2">
                        <ul className="home-footer-social-list">
                            <li className="home-footer-social-list-item">
                                <a
                                    href="https://github.com/onceacurious?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub title="github" />
                                </a>
                            </li>
                            <li className="home-footer-social-list-item">
                                <a
                                    href="https://www.linkedin.com/in/francis-deo-aurelio/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoLinkedin title="linkedin" />
                                </a>
                            </li>
                            <li className="home-footer-social-list-item">
                                <a
                                    href="https://www.facebook.com/corebuso.ph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookSquare title="facebook" />
                                </a>
                            </li>
                            <li className="home-footer-social-list-item">
                                <a
                                    href="https://www.fiverr.com/users/francisdeoa/manage_gigs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiFiverr title="fiverr" />
                                </a>
                            </li>
                            <li className="home-footer-social-list-item">
                                <a
                                    href="https://www.upwork.com/freelancers/~01c5fe47e7ae957d80"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiUpwork title="upwork" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="section-3">
                        <p className="fw-bold fs-medium clr-accent">
                            Subscribe to our news letter
                        </p>
                        <form
                            method="post"
                            className="email-sub-form"
                            onSubmit={handleSubmit}
                        >
                            <SiMinutemailer />
                            <input
                                type="email"
                                name="emailSub"
                                id="emailSub"
                                placeholder="Email Address.."
                            />
                        </form>
                    </div>
                    <div className="section-4 fw-regular clr-secondary">
                        Copyright &copy; 2022 Corebuso. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
