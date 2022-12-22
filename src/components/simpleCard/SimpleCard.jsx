import React from "react";

import "./simpleCard.scss";
const SimpleCard = ({ class_name, title, content }) => {
    return (
        <div className={`${class_name}-card-container`}>
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
                    <p className={`${class_name}-card-title`}>{title}</p>
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
