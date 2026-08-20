import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import porsche911Img from "../../../assets/images/porsche_911.png";
import truckDeliveryCleanImg from "../../../assets/images/truck_delivery_clean.png";
import "./DeliverySequenceView.scss";

const DeliverySequenceView = memo(({ step = 0 }) => {
    const showPorsche = step === 0;

    return (
        <div className="delivery-container">
            <div className="radar-waves">
                <div className="wave1" />
                <div className="wave2" />
                <div className="wave3" />
                <div className="wave4" />
            </div>

            <div className="stage-content">
                {/* Fixed-size placeholder so truck doesn't shift when car exits */}
                <div className="car-slot">
                    <AnimatePresence>
                        {showPorsche && (
                            <motion.div
                                key="porscheBadge"
                                className="porsche-circle-badge"
                                initial={{ opacity: 0, scale: 0.8, x: -40 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.25,
                                    x: 280,
                                    y: 10,
                                }}
                                transition={{
                                    duration: 0.75,
                                    ease: [0.4, 0, 0.8, 1],
                                }}
                            >
                                <img src={porsche911Img} alt="Porsche 911" className="porsche-img" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    className="truck-container"
                    initial={{ opacity: 0, x: 60 }}
                    animate={
                        step === 2
                            ? { opacity: 0, x: 600 }
                            : { opacity: 1, x: 0 }
                    }
                    transition={
                        step === 2
                            ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
                            : { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
                    }
                >
                    <img
                        src={truckDeliveryCleanImg}
                        alt="Vehicle Delivery Truck"
                        className="truck-img"
                    />
                </motion.div>
            </div>
        </div>
    );
});

DeliverySequenceView.displayName = "DeliverySequenceView";

export default DeliverySequenceView;

