import React from "react";

import "./body.scss";
const Body = () => {
    return (
        <section id="bodyAbout">
            <div className="about-body container">
                <p className="heading-4 gradient-text text-center text-sm-left">
                    About Corebuso
                </p>
                <p className="clr-accent w100 m-inline-auto">
                    Welcome to Core Business Solution! We are a company that
                    provides innovative solutions to help businesses of all
                    sizes succeed. Our team is comprised of experienced
                    professionals who are dedicated to helping our clients
                    achieve their goals. We offer a wide range of services,
                    including marketing strategy development, financial
                    consulting, and operational efficiency analysis.
                    <br />
                    <br />
                    Our approach is personalized and tailored to the needs of
                    each individual client. In addition to our core services, we
                    also offer training and support to ensure that our clients
                    have the tools and knowledge they need to continue growing
                    and thriving.
                    <br />
                    <br />
                    We are passionate about helping businesses reach their full
                    potential and are committed to providing the highest level
                    of service to our clients.
                    <br />
                    <br />
                </p>
                <div className="about-prod-serve">
                    <p className="heading-4 gradient-text text-center text-sm-left">
                        Corebuso Products & Services
                    </p>
                    <div className="about-prod-serve-body">
                        <div className="about-products w100">
                            <p className="heading-5 clr-primary">Products</p>
                            <ul className="ps-4 clr-accent">
                                <li>Web Design</li>
                                <li>Web Development</li>
                                <li>Web Scrapping</li>
                                <li>Automation</li>
                                <li>And more</li>
                            </ul>
                        </div>
                        <div className="about-services w100">
                            <p className="heading-5 clr-primary">Services</p>
                            <ul className="ps-4 clr-accent">
                                <li>Data Analysis</li>
                                <li>Financial</li>
                                <li>Bookkeeping</li>
                                <li>Auditing</li>
                                <li>And more</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-footer container">
                <p className="fw-bold p-block-1 w100 text-center m-inline-auto">
                    Copyright &copy; 2022 Corebuso. All rights reserved
                </p>
            </div>
        </section>
    );
};

export default Body;
