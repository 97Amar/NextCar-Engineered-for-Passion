import { memo } from "react";
import CarCircle from "../../common/CarCircle/CarCircle";
import "./HeroView.scss";

const HeroView = memo(({ onPlayClick }) => {
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
});

HeroView.displayName = "HeroView";

export default HeroView;

