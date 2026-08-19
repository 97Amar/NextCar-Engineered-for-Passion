import React from "react";
import CarCircle from "../../common/CarCircle/CarCircle";
import darkAudiImg from "../../../assets/images/dark_audi.png";
import "./VehicleStatsView.scss";

const VehicleStatsView = ({ showRings = false }) => {
    return (
        <div className="stats-layout">
            <div className="column left-column">
                <div className="stat-block">
                    <span className="stat-value">352</span>
                    <span className="stat-label">Top Speed</span>
                </div>
                <div className="stat-block">
                    <span className="stat-value">620</span>
                    <span className="stat-label">Power (HP)</span>
                </div>
                <div className="stat-block">
                    <span className="stat-value">780</span>
                    <span className="stat-label">Torque</span>
                </div>
            </div>

            <CarCircle
                imageSrc={darkAudiImg}
                altText="Audi R8 Specs"
                theme="dark"
                showRings={showRings}
            />

            <div className="column right-column">
                <div className="stat-block">
                    <span className="stat-value">3.2 Sec</span>
                    <span className="stat-label">0-100 KM/H</span>
                </div>
                <div className="stat-block">
                    <span className="stat-value">2,450 KM</span>
                    <span className="stat-label">Oil Change</span>
                </div>
                <div className="stat-block">
                    <span className="stat-value">520 KM</span>
                    <span className="stat-label">Range</span>
                </div>
            </div>
        </div>
    );
};

export default VehicleStatsView;
