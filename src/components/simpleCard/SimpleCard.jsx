import React from "react";

import "./simpleCard.scss";
const SimpleCard = ({ class_name, title, content, image, icon }) => {
    return (
        <div className="what-card-container pointer">
            {title | (title.length == 0) ? (
                <>
                    <div className="what-card-body">
                        <p className="what-card-content">{content}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="what-card-title mt-5">
                        <p className="gradient-text fw-bold">{title}</p>
                    </div>
                    <div className="what-card-body">
                        <p className="what-card-content">{content}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default SimpleCard;
