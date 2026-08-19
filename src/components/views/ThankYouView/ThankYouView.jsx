import React from "react";
import { motion } from "framer-motion";
import CarCircle from "../../common/CarCircle/CarCircle";
import "./ThankYouView.scss";

const ThankYouView = ({ step = 0, onHomeClick }) => {
    return (
        <div className="stage-container">
            {/* Background rings only — no center circle */}
            <div className="thank-you-bg-rings">
                <CarCircle theme="dark" showRings={true} />
            </div>

            {/* Content on top of rings */}
            <div className="center-content-group">
                <motion.div
                    className="thank-you-wrapper"
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1.0,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                >
                    <h2 className="thank-you-text">THANK YOU</h2>
                </motion.div>

                <motion.button
                    className="home-button"
                    onClick={onHomeClick}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                    Home
                </motion.button>
            </div>
        </div>
    );
};

export default ThankYouView;

