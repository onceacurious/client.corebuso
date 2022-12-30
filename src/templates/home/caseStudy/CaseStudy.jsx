import React from "react";
import { GiShakingHands } from "react-icons/gi";
import { SiMicrosoftexcel } from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { AiOutlineDatabase } from "react-icons/ai";

import "./caseStudy.scss";
const CaseStudy = () => {
    return (
        <section
            id="caseStudy"
            className="container display-flex jc-center w100 ai-center"
        >
            <div className="case-study-main">
                <div className="case-study-img"></div>
                {/* <img src={case_study} alt="case study" /> */}
                <div className="case-study-body">
                    <p className="heading-4 gradient-text">Case Study</p>
                    <p className="clr-primary">
                        Interest in the things that we are planning to build?
                        Let's start our journey together and create wholesome
                        projects.
                    </p>
                    <div className="case-study-menu mt-4">
                        <ul className="case-study-menu-list">
                            <li className="case-study-menu-list-item">
                                <SiMicrosoftexcel />
                                Excel Automation
                            </li>
                            <li className="case-study-menu-list-item">
                                <GoBrowser />
                                Web Scrapping
                            </li>
                            <li className="case-study-menu-list-item">
                                <AiOutlineDatabase />
                                Data Analysis
                            </li>
                            <li className="case-study-menu-list-item">
                                And More...
                            </li>
                        </ul>
                    </div>
                    <button className="case-study-cta-btn">
                        <GiShakingHands />
                        Let's Do This!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
