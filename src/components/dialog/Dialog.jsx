import React, { useContext } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
import MainContext from "../../context/MainContext";

import "./dialog.scss"
const Dialog = () => {
    const {hideDialog, setHideDialog} = useContext(MainContext);
    return (
        <section id="dialog" className={hideDialog? "hide" : ""} onClick={()=> setHideDialog(true)}>
            <div className="dialog-back_draft">
                <AiOutlineCloseCircle className="dialog-btn-close pointer" onClick={()=> setHideDialog(true)}/>
                <div className="dialog-main">
                    <p>Dialog</p>
                </div>
            </div>
        </section>
    )

}
export default Dialog;