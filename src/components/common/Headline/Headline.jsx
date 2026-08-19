import React from "react";
import "./Headline.scss";

const Headline = () => {
    return (
        <div className="headline-wrapper">
            <h1 className="main-title">
                ENGINEERED FOR <span className="highlight-red">PASSION</span>
            </h1>
            <div className="subtitle-group">
                <span className="subtitle">Precision. Power. Performance</span>
                <div className="red-underline" />
            </div>
        </div>
    );
};

export default Headline;
