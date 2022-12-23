import React from "react";
import parse from 'html-react-parser'
import {IoCodeSlashSharp} from 'react-icons/io5'

import "./simpleCard.scss";
const SimpleCard = ({ class_name, title, content, image }) => {
    const _icon = "<ImLeaf/>"
    const htmlStr = parse(_icon)

    return (
        <div className={`${class_name}-card-container`}>
            {class_name === "why"
            ?
            <div className={`${class_name}-card-background`}>
                <img src={image} alt={title} />
            </div>
            :
            ""
        }
            {title | (title.length == 0) ? (
                <>
                    <div className={`${class_name}-card-body`}>
                        <p className={`${class_name}-card-content`}>
                            {content}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className={`${class_name}-card-title mt-5`}>
                {
                    class_name === "why"
                    ?
                    <button className="btn-icon display-flex ai-center">
                        <IoCodeSlashSharp/>
                    </button>
                    :
                    ""
                }        
                   <p className={class_name === "why" ? "gradient-text" : ""}>
                        {title}
                    </p>    
            
                    </div>
                    <div className={`${class_name}-card-body`}>
                        <p className={`${class_name}-card-content`}>
                            {content}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default SimpleCard;
