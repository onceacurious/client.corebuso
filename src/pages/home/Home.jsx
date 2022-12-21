import React, { useEffect, useContext, useState } from "react";
import { Navbar, Searchbar } from "../../components";

import MainContext from "../../context/MainContext";
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
            <div className="container home-body display-flex flex-column jc-center ai-center">
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
                    <button className="cta-btn btn-outline-primary btn fs-regular fw-bol">
                        Get Started
                    </button>
                    <button className="cta-btn btn-secondary btn fs-regular fw-bold">
                        Request a Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;