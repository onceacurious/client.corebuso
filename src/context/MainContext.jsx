import { useEffect, useState, createContext } from "react";

const MainContext = createContext({});

export default MainContext;

export const MainProvider = ({ children }) => {
    //Main Theme
    const [dark, setDark] = useState(true);

    //Dialog
    const [hideDialog, setHideDialog] = useState(true);
    const [dialogData, setDialogData] = useState([]);

    //Social
    const [hideNavSocial, setHideNavSocial] = useState(false);

    //Menu
    const [showMenu, setShowMenu] = useState(false);

    const contextData = {
        dark,
        setDark,
        hideDialog,
        setHideDialog,
        dialogData,
        setDialogData,
        hideNavSocial,
        setHideNavSocial,
        showMenu,
        setShowMenu,
    };

    return (
        <MainContext.Provider value={contextData}>
            {children}
        </MainContext.Provider>
    );
};
