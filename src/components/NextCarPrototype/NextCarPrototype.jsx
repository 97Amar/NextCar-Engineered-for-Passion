import React, { useState, useEffect, useRef } from "react";
import SharedShell from "../common/SharedShell/SharedShell";
import HeroView from "../views/HeroView/HeroView";
import CarRevealView from "../views/CarRevealView/CarRevealView";
import VehicleStatsView from "../views/VehicleStatsView/VehicleStatsView";
import PorscheFeatureView from "../views/PorscheFeatureView/PorscheFeatureView";
import TimelineSequenceView from "../views/TimelineSequenceView/TimelineSequenceView";
import DeliverySequenceView from "../views/DeliverySequenceView/DeliverySequenceView";
import ThankYouView from "../views/ThankYouView/ThankYouView";
import "./NextCarPrototype.scss";

const NextCarPrototype = () => {
    const [frameIndex, setFrameIndex] = useState(1);
    const [screen4Exiting, setScreen4Exiting] = useState(false);
    const exitTimerRef = useRef(null);

    const goToFrame = (nextIndex) => {
        if (frameIndex === 5 && nextIndex !== 5) {
            setScreen4Exiting(true);
            clearTimeout(exitTimerRef.current);
            exitTimerRef.current = setTimeout(() => {
                setScreen4Exiting(false);
                setFrameIndex(nextIndex);
            }, 600);
        } else {
            setFrameIndex(nextIndex);
        }
    };

    useEffect(() => {
        if (frameIndex >= 16) return;

        // Do not auto-advance on frame 5 — wait for user to click the red doc icon to open timeline
        if (frameIndex === 5) return;

        let delay = 3200;
        if (frameIndex === 1) delay = 1000;
        else if (frameIndex === 11) delay = 1800;

        const timer = setTimeout(() => {
            goToFrame(frameIndex + 1);
        }, delay);

        return () => clearTimeout(timer);
    }, [frameIndex]);

    const handlePrevFrame = () => {
        if (frameIndex > 1) goToFrame(frameIndex - 1);
    };

    let activeNav = "home";
    let activeRightNav = null;
    let tooltipText = "Click for Home";
    let tooltipActive = false;
    let activeLapIndex = 2;

    if (frameIndex === 1) {
        activeNav = "home";
        activeRightNav = null;
        tooltipText = "Click for Home";
        tooltipActive = false;
    } else if (frameIndex === 2) {
        activeNav = "home";
        activeRightNav = null;
        tooltipText = "Click for Home";
        tooltipActive = true;
    } else if (frameIndex === 3) {
        activeNav = "home";
        activeRightNav = null;
        tooltipText = "Click for Home";
        tooltipActive = true;
    } else if (frameIndex === 4 || frameIndex === 5) {
        activeNav = null;
        activeRightNav = "doc";
        tooltipText = "Explore timeline";
        tooltipActive = true;
    } else if (frameIndex >= 6 && frameIndex <= 11) {
        activeNav = null;
        activeRightNav = "doc";
        tooltipText = null;
        tooltipActive = true;
    } else if (frameIndex >= 12) {
        activeNav = null;
        activeRightNav = "doc";
        tooltipText = null;
        tooltipActive = false;
    }

    return (
        <SharedShell
            activeNav={activeNav}
            activeRightNav={activeRightNav}
            activeLapIndex={activeLapIndex}
            tooltipText={tooltipText}
            tooltipActive={tooltipActive}
            showSpotlight={frameIndex >= 1 && frameIndex <= 5}
            onNavSelect={(navId) => {
                if (navId === "home") goToFrame(1);
                if (navId === "doc") goToFrame(6);
            }}
            onRightNavSelect={(navId) => {
                if (navId === "doc") goToFrame(6);
            }}
            onBackClick={handlePrevFrame}
        >
            {frameIndex === 1 && <HeroView onPlayClick={() => goToFrame(2)} />}

            {frameIndex === 2 && <CarRevealView />}

            {frameIndex >= 3 && frameIndex <= 4 && (
                <VehicleStatsView showRings={frameIndex === 4} />
            )}

            {frameIndex === 5 && <PorscheFeatureView isExiting={screen4Exiting} />}

            {frameIndex >= 6 && frameIndex <= 11 && (
                <TimelineSequenceView stepIndex={frameIndex - 6} />
            )}

            {frameIndex >= 12 && frameIndex <= 14 && (
                <DeliverySequenceView step={frameIndex - 12} />
            )}

            {frameIndex >= 15 && (
                <ThankYouView
                    step={frameIndex - 15}
                    onHomeClick={() => goToFrame(1)}
                />
            )}
        </SharedShell>
    );
};

export default NextCarPrototype;
