import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Home, IndianRupee } from "lucide-react";
import "./SideNav.scss";

const SideNav = ({
    activeNav = "home",
    tooltipText = null,
    tooltipActive = false,
    onNavSelect,
}) => {
    const navItems = [
        { id: "gauge", icon: Gauge, label: "Stats" },
        { id: "home", icon: Home, label: "Home", isClickable: true },
        { id: "rupee", icon: IndianRupee, label: "Pricing" },
    ];

    return (
        <aside className="side-nav-container">
            <svg className="arc-svg" viewBox="0 0 100 320">
                <path
                    d="M 80 10 Q 10 160 80 310"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                />
            </svg>

            <div className="nav-icons-group">
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeNav === item.id;

                    const handleClick = () => {
                        if (item.isClickable && onNavSelect) {
                            onNavSelect(item.id);
                        }
                    };

                    return (
                        <div
                            key={item.id}
                            className="nav-item-wrapper"
                        >
                            {item.isClickable ? (
                                <button
                                    className={`nav-btn clickable ${isActive ? "active" : ""}`}
                                    onClick={handleClick}
                                    aria-label="Home"
                                >
                                    <IconComponent size={18} />
                                </button>
                            ) : (
                                <div className={`nav-btn ${isActive ? "active" : ""}`}>
                                    <IconComponent size={18} />
                                </div>
                            )}

                            <AnimatePresence>
                                {isActive && tooltipText && (
                                    <motion.div
                                        key={tooltipText}
                                        layoutId="navTooltipPill"
                                        className={`tooltip-bubble ${tooltipActive ? "tooltip-active" : ""}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -6 }}
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    >
                                        {tooltipText}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

export default SideNav;
