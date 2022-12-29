import React, { useContext, useEffect, useState } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
import MainContext from "../../context/MainContext";

import "./dialog.scss"
const Dialog = () => {
    const {hideDialog, setHideDialog, dialogData} = useContext(MainContext);
    const [close, setClose] = useState(false)

    const handleClose = (text) => {
        if(text.trim() === "dialog"){
            setHideDialog(true)
        }
    }


    return (
        <section id="dialog" className={`${hideDialog ? "dialog": "dialog dialog-show"}`} onClick={(e)=> handleClose(e.target.id)}>
            <div className="dialog-back_draft">
                <AiOutlineCloseCircle className="dialog-btn-close pointer" onClick={()=> setHideDialog(true)}/>
                <div className="dialog-main">
                    <p>{dialogData.title}</p>
                    <p>{dialogData.content}</p>
                </div>
            </div>
        </section>
    )

}
export default Dialog;