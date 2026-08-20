import { memo } from "react";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import RightNav from "../RightNav/RightNav";
import Headline from "../Headline/Headline";
import LapTimeline from "../LapTimeline/LapTimeline";
import "./SharedShell.scss";

const SharedShell = memo(({
    children,
    activeNav = "home",
    activeRightNav = null,
    activeLapIndex = 2,
    tooltipText = null,
    tooltipActive = false,
    showSpotlight = true,
    onNavSelect,
    onRightNavSelect,
    onBackClick,
}) => {
    return (
        <div className="stage">
            {showSpotlight && <div className="spotlight-cone" />}
            <div className="ambient-glow" />

            <Header onBackClick={onBackClick} />

            <SideNav
                activeNav={activeNav}
                tooltipText={tooltipText}
                tooltipActive={tooltipActive}
                onNavSelect={onNavSelect}
            />

            <RightNav
                activeNav={activeRightNav}
                tooltipText={tooltipText}
                tooltipActive={tooltipActive}
                onNavSelect={onRightNavSelect || onNavSelect}
            />

            <Headline />

            <main className="main-stage">{children}</main>

            <LapTimeline activeLapIndex={activeLapIndex} />
        </div>
    );
});

SharedShell.displayName = "SharedShell";

export default SharedShell;

