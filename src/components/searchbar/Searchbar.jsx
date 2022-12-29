import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";

import "./searchbar.scss";
const Searchbar = () => {
    const [isFocus, setIsFocus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id="searchBar" className="container p-block-2 m-block-2">
            <form
                method="POST"
                className={
                    isFocus
                        ? "searchbar-form bg-primary-75 form_input-focus"
                        : "searchbar-form bg-primary-75"
                }
                onSubmit={handleSubmit}
            >
                <input
                    className={
                        isFocus
                            ? "searchbar-input input-focus"
                            : "searchbar-input"
                    }
                    type="email"
                    placeholder="Search..."
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <ImSearch
                    className={
                        isFocus
                            ? "searchbar-icon searchbar-icon-focus"
                            : "searchbar-icon"
                    }
                />
            </form>
        </div>
    );
};

export default Searchbar;
