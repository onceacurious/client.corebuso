import React from "react";
import { About, Home, Admin } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route index exact path="/admin/*" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Layout;
