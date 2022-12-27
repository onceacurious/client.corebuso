import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { GrSend } from "react-icons/gr";

import "./footer.scss";
const Footer = () => {
    return (
        <footer id="homeFooter" className="container">
            <div className="home-footer-main p-2">
                <div className="section-1">
                    <p>Design and Coded by:</p>
                    <p>Francis Deo Aurelio</p>
                </div>
                <div className="section-2">
                    <ul>
                        <li>
                            <AiFillGithub />
                        </li>
                        <li>
                            <IoLogoLinkedin />
                        </li>
                        <li>
                            <FaFacebookSquare />
                        </li>
                        <li>
                            <SiFiverr />
                        </li>
                        <li>
                            <SiUpwork />
                        </li>
                    </ul>
                </div>
                <div className="section-3">
                    <form method="post">
                        <p>Subscribe to our news letter</p>
                        <label htmlFor="emailSub">Email Address</label>
                        <input
                            type="text"
                            name="emailSub"
                            id="emailSub"
                            placeholder="Email Address.."
                        />
                        <button type="submit">
                            <GrSend />
                        </button>
                    </form>
                </div>
                <div className="section-4">
                    &copy; 2022 Corebuso - All Rights Reserve
                </div>
            </div>
        </footer>
    );
};

export default Footer;
