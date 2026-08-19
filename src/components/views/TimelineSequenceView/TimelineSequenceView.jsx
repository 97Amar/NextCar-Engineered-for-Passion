import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarCircle from "../../common/CarCircle/CarCircle";
import porsche911Img from "../../../assets/images/porsche_911.png";
import "./TimelineSequenceView.scss";

const TIMELINE_STEPS = [
    { title: "Registration", subtitle: "Fill form for submission" },
    { title: "Consultation", subtitle: "Planning and pricing" },
    { title: "Artist assign", subtitle: "according to task" },
    { title: "Vehicle Pickup", subtitle: "Payment & dropoff" },
];

const TimelineSequenceView = ({ stepIndex = 0 }) => {
    const [badgeVisible, setBadgeVisible] = useState(false);

    const totalSteps = TIMELINE_STEPS.length - 1;
    const cappedStepIndex = Math.min(stepIndex, totalSteps);
    const currentStep = TIMELINE_STEPS[cappedStepIndex];
    const badgeXPosition = `${10 + (cappedStepIndex / totalSteps) * 76}%`;
    const isLineWiping = stepIndex >= 4;

    useEffect(() => {
        const t = setTimeout(() => setBadgeVisible(true), stepIndex === 0 ? 500 : 0);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="timeline-container">
            {/* Background glowing rings */}
            <div className="timeline-bg-rings">
                <CarCircle theme="dark" showRings={true} />
            </div>

            <div className="radar-waves">
                <div className="wave1" />
                <div className="wave2" />
                <div className="wave3" />
                <div className="wave4" />
                <div className="wave5" />
                <div className="wave6" />
            </div>

            <motion.div
                className="timeline-track-line"
                initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                animate={{
                    clipPath: isLineWiping
                        ? "inset(0% 0% 0% 100%)"
                        : "inset(0% 0% 0% 0%)"
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
                {TIMELINE_STEPS.map((_, idx) => (
                    <div
                        key={idx}
                        className={`timeline-step-dot ${idx <= cappedStepIndex ? "active" : ""}`}
                        style={{ left: `${(idx / totalSteps) * 100}%` }}
                    />
                ))}
            </motion.div>

            <AnimatePresence>
                {badgeVisible && (
                    <motion.div
                        className="porsche-badge-container"
                        initial={{ left: badgeXPosition, opacity: 0, x: "-50%", y: "-88%" }}
                        animate={{ left: badgeXPosition, opacity: 1, x: "-50%", y: "-88%" }}
                        transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <motion.div
                            key={cappedStepIndex}
                            className="tooltip-parallelogram-card"
                            initial={{ opacity: 0, y: -16, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="card-inner">
                                <h3 className="tooltip-title">{currentStep.title}</h3>
                                <p className="tooltip-subtitle">{currentStep.subtitle}</p>
                            </div>
                        </motion.div>

                        <div className="porsche-circle-badge">
                            <img src={porsche911Img} alt="Porsche 911" className="porsche-img" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TimelineSequenceView;
