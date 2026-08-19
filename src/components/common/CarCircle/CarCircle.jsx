import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import "./CarCircle.scss";

const CarCircle = ({
    imageSrc,
    altText = "Vehicle",
    theme = "gtr",
    showRings = false,
    showCustomWorkOverlay = false,
    isInitialFrame = false,
    onOverlayClick,
    onPlayClick,
    children,
    className = "",
}) => {
    return (
        <div className={`circle-wrapper ${theme} ${className}`}>
            {showRings && (
                <motion.div
                    className="glowing-rings"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                    <div className="ring1" />
                    <div className="ring2" />
                    <div className="ring3" />
                    <div className="ring4" />
                </motion.div>
            )}

            <div className="circle-frame">
                {children ? (
                    children
                ) : isInitialFrame ? (
                    <div className="initial-play-container" onClick={onPlayClick} style={{ cursor: onPlayClick ? 'pointer' : 'default' }}>
                        <div className="initial-play-capsule">
                            <Play size={22} fill="#ffffff" color="#ffffff" />
                        </div>
                    </div>
                ) : (
                    <AnimatePresence>
                        {imageSrc && (
                            <motion.img
                                key={imageSrc}
                                src={imageSrc}
                                alt={altText}
                                className="car-image"
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                        )}
                    </AnimatePresence>
                )}

                {showCustomWorkOverlay && (
                    <motion.div
                        className="custom-work-overlay"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={onOverlayClick}
                    >
                        <span className="custom-work-text">CUSTOM WORK</span>
                        <button className="play-button" aria-label="Play Custom Work">
                            <Play size={20} fill="#ffffff" color="#ffffff" />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CarCircle;
