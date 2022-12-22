import React, { useEffect, useContext, useState } from "react";
import { Navbar, Searchbar } from "../../components";

import MainContext from "../../context/MainContext";
import { WhyCBS } from "../../templates";
import "./home.scss";
const Home = () => {
    const { dark } = useContext(MainContext);

    return (
        <div
            id="home"
            className={dark ? "gradient-bg-dark" : "gradient-bg-light"}
        >
            <Navbar />
            <Searchbar />
            <div id="homeBody" className="container home-body display-flex flex-column jc-center ai-center">
                <p  className="heading-4 gradient-text">
                    Let's make your dream come true
                </p>
                <p className="heading-2 gradient-text">
                    CORE BUSINESS SOLUTION
                </p>
                <p className="gradient-text">
                    Website Development and Accounting Services
                </p>
                <div className="cta-container display-flex m-block-4 jc-center">
                    <button className="cta-btn btn-outline-primary btn fs-regular fw-bol">
                        Get Started
                    </button>
                    <button className="cta-btn btn-secondary btn fs-regular fw-bold">
                        Request a Demo
                    </button>
                </div>
                <p className="gradient-text">
                    Build you a Modern, Responsive and Reactive website from scratch with an affordable price range
                </p>
            </div>
            <WhyCBS/>
        </div>
    );
};

export default Home;
