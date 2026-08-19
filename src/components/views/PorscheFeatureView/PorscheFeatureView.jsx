import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarCircle from "../../common/CarCircle/CarCircle";
import porsche911Img from "../../../assets/images/porsche_911.png";
import "./PorscheFeatureView.scss";

const PorscheFeatureView = ({ isExiting = false }) => {
    const [shutterClosed, setShutterClosed] = useState(false);
    const [flattenLine, setFlattenLine] = useState(false);

    useEffect(() => {
        if (isExiting) {
            setShutterClosed(true);

            const timer = setTimeout(() => {
                setFlattenLine(true);
            }, 250);

            return () => clearTimeout(timer);
        } else {
            setShutterClosed(false);
            setFlattenLine(false);
        }
    }, [isExiting]);

    return (
        <div className="porsche-container">
            <motion.div
                className="porsche-scale-container"
                animate={
                    flattenLine
                        ? {
                            scaleY: 0.02,
                            scaleX: 3.5,
                            opacity: 0.95,
                        }
                        : {
                            scaleY: 1,
                            scaleX: 1,
                            opacity: 1,
                        }
                }
                transition={
                    flattenLine
                        ? { duration: 0.25, ease: [0.25, 1, 0.5, 1] }
                        : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }
            >
                <div className="porsche-circle-box">
                    <CarCircle
                        imageSrc={porsche911Img}
                        altText="Porsche 911 GT3"
                        theme="red"
                        showRings={true}
                    />

                    <AnimatePresence>
                        {shutterClosed && (
                            <>
                                <motion.div
                                    className="shutter-top"
                                    initial={{ y: "-100%" }}
                                    animate={{ y: "0%" }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                />
                                <motion.div
                                    className="shutter-bottom"
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    exit={{ y: "100%" }}
                                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {shutterClosed && (
                        <motion.div
                            className="shutter-seam-line"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.2 }}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default PorscheFeatureView;
