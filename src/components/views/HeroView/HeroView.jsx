import React from "react";
import CarCircle from "../../common/CarCircle/CarCircle";
import "./HeroView.scss";

const HeroView = ({ onPlayClick }) => {
    return (
        <div className="hero-container">
            <CarCircle
                theme="initial"
                isInitialFrame={true}
                showRings={false}
                onPlayClick={onPlayClick}
            />
        </div>
    );
};

export default HeroView;
