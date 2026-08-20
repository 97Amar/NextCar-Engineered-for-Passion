import { memo } from "react";
import "./LapTimeline.scss";

const LAPS = [
    { id: 1, label: "LAP 01", sub: "Speed Zone" },
    { id: 2, label: "LAP 02", sub: "Acceleration Zone" },
    { id: 3, label: "LAP 03", sub: "Technical Section" },
    { id: 4, label: "LAP 04", sub: "High Speed Zone" },
    { id: 5, label: "LAP 05", sub: "Final Corner" },
];

const LapTimeline = memo(({ activeLapIndex = 2 }) => {
    return (
        <div className="lap-timeline-container">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="svg-curve">
                <path
                    d="M0,18 C250,10 500,26 750,10 C950,26 1100,10 1200,18"
                    className="dashed-red-path"
                />
            </svg>

            <div className="laps-row">
                {LAPS.map((lap, index) => {
                    const isActive = index === activeLapIndex;
                    return (
                        <div
                            key={lap.id}
                            className={`lap-item ${isActive ? "active-lap" : ""}`}
                        >
                            <div className="dot-wrapper">
                                <div className="dot" />
                            </div>
                            <span className="lap-label">{lap.label}</span>
                            <span className="lap-sub">{lap.sub}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

LapTimeline.displayName = "LapTimeline";

export default LapTimeline;

