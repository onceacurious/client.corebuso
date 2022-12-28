import React, { useEffect, useContext, useState } from "react";
import { Navbar, Searchbar } from "../../components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

import MainContext from "../../context/MainContext";
import { CaseStudy, Footer, WhyCBS } from "../../templates";
import "./home.scss";
const Home = () => {
    const { dark } = useContext(MainContext);
    const [isStarted, setIsStarted] = useState(false);
    const [isDemo, setIsDemo] = useState(false);

    const test = () => {
        console.log("test");
    };

    return (
        <div
            id="home"
            className={dark ? "gradient-bg-dark" : "gradient-bg-light"}
        >
            <Navbar />
            <div
                id="homeBody"
                className="container home-body display-flex flex-column ai-center"
            >
                <Searchbar />
                <p className="heading-4 gradient-text">
                    Let's make your dream come true
                </p>
                <p className="heading-2 gradient-text">
                    CORE BUSINESS SOLUTION
                </p>
                <p className="gradient-text">
                    Website Development and Accounting Services
                </p>
                <div className="cta-container display-flex m-block-4 jc-center">
                    <button
                        className="cta-btn btn-outline-primary btn fs-regular fw-bold"
                        onMouseEnter={() => setIsStarted(true)}
                        onMouseLeave={() => setIsStarted(false)}
                    >
                        <IoIosArrowBack className={!isStarted ? "" : "hide"} />
                        <IoArrowBackSharp className={isStarted ? "" : "hide"} />
                        Get Started
                    </button>
                    <button
                        className="cta-btn btn-secondary btn fs-regular fw-bold"
                        onMouseEnter={() => setIsDemo(true)}
                        onMouseLeave={() => setIsDemo(false)}
                    >
                        Request a Demo
                        <IoIosArrowForward className={!isDemo ? "" : "hide"} />
                        <IoArrowForwardSharp className={isDemo ? "" : "hide"} />
                    </button>
                </div>
                <p className="gradient-text">
                    Build you a Modern, Responsive and Reactive website from
                    scratch with an affordable price range
                </p>
            </div>
            <WhyCBS />
            <CaseStudy />
            <Footer />
        </div>
    );
};

export default Home;
