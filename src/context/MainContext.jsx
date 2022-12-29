import { useEffect, useState, createContext } from "react";

const MainContext = createContext({});

export default MainContext;

export const MainProvider = ({ children }) => {
    const [dark, setDark] = useState(true);
    const [hideDialog, setHideDialog] = useState(null);

    const contextData = {
        dark,
        setDark,
        hideDialog,
        setHideDialog,
    };

    return (
        <MainContext.Provider value={contextData}>
            {children}
        </MainContext.Provider>
    );
};
