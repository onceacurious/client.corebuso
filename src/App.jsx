import React from "react";

import "./Layout";
import "./app.scss";
import "../src/assets/scss/main.scss";
import Layout from "./Layout";
import { MainProvider } from "./context/MainContext";

const App = () => {
    return (
        <div>
            <MainProvider>
                <Layout />
            </MainProvider>
        </div>
    );
};

export default App;
