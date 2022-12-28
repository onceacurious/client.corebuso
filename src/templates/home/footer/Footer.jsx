import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { SiMinutemailer,SiFiverr, SiUpwork, SiReact,SiVite, SiVisualstudiocode } from "react-icons/si";
import {DiDjango} from "react-icons/di";
import {FiFigma} from "react-icons/fi";

import "./footer.scss";
const Footer = () => {
    return (
        <footer id="homeFooter" className="container">
            <div className="home-footer-main pt-1">
                <div className="section-1 clr-accent">
                    <p className="fw-bold fs-medium">Designed and developed by:</p>
                    <p className="ps-4">Francis Deo Aurelio</p>
                    <p className="clr-accent fw-bold pt-2 fs-medium">
                        Powered by:
                    </p>
                    <ul className="home-footer-powered-list ps-2">
                        <li className="home-footer-powered-list-item">
                            <DiDjango title="django"/>
                        </li>
                        <li className="home-footer-powered-list-item">
                            <FiFigma title="figma"/>
                        </li>
                        <li className="home-footer-powered-list-item">
                            <SiReact title="react"/>
                        </li>
                        <li className="home-footer-powered-list-item">
                            <SiVite title="vite"/>
                        </li>
                        <li className="home-footer-powered-list-item">
                            <SiVisualstudiocode title="vscode"/>
                        </li>
                    </ul>
                </div>
                <div className="section-2">
                    <ul className="home-footer-social-list">
                        <li className="home-footer-social-list-item">
                            <AiFillGithub />
                        </li>
                        <li className="home-footer-social-list-item">
                            <IoLogoLinkedin />
                        </li>
                        <li className="home-footer-social-list-item">
                            <FaFacebookSquare />
                        </li>
                        <li className="home-footer-social-list-item">
                            <SiFiverr />
                        </li>
                        <li className="home-footer-social-list-item">
                            <SiUpwork />
                        </li>
                    </ul>
                </div>
                <div className="section-3">
                        <p className="fw-bold fs-medium clr-accent">Subscribe to our news letter</p>
                    <form method="post" className="email-sub-form">
                        <SiMinutemailer />
                        <input
                            type="text"
                            name="emailSub"
                            id="emailSub"
                            placeholder="Email Address.."
                        />
                    </form>
                </div>
                <div className="section-4 fw-bold clr-secondary">
                    &copy; 2022 Corebuso - All Rights Reserve
                </div>
            </div>
        </footer>
    );
};

export default Footer;
