import React, { useRef, useLayoutEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, ShieldCheck } from "lucide-react";
import "./RightNav.scss";

const RightNav = ({
    activeNav = null,
    tooltipText = null,
    tooltipActive = false,
    onNavSelect,
}) => {
    const items = [
        { id: "chat", icon: MessageSquare, label: "Chat" },
        { id: "doc", icon: FileText, label: "Documents" },
        { id: "shield", icon: ShieldCheck, label: "Security" },
    ];

    const [tooltipPos, setTooltipPos] = useState(null);
    const itemRefs = useRef({});

    const measureTooltip = useCallback(() => {
        if (!activeNav) { setTooltipPos(null); return; }
        const el = itemRefs.current[activeNav];
        if (!el) { setTooltipPos(null); return; }
        const rect = el.getBoundingClientRect();
        setTooltipPos({
            top: rect.top + rect.height / 2,
            rightEdge: rect.left,
        });
    }, [activeNav]);

    useLayoutEffect(() => {
        measureTooltip();
    }, [activeNav, tooltipText, measureTooltip]);

    return (
        <>
            <aside className="right-nav-container">
                <svg className="arc-svg" viewBox="0 0 100 320">
                    <path
                        d="M 20 10 Q 90 160 20 310"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.15)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                    />
                </svg>

                <div className="nav-icons-group">
                    {items.map((item) => {
                        const IconComp = item.icon;
                        const isActive = activeNav === item.id;
                        const isClickable = Boolean(onNavSelect);

                        const handleClick = () => {
                            if (onNavSelect) {
                                onNavSelect(item.id);
                            }
                        };

                        return (
                            <div
                                key={item.id}
                                className="nav-item-wrapper"
                                ref={(el) => { itemRefs.current[item.id] = el; }}
                            >
                                <button
                                    className={`nav-btn ${isClickable ? "clickable" : ""} ${isActive ? "active" : ""}`}
                                    onClick={handleClick}
                                    aria-label={item.label}
                                    type="button"
                                >
                                    <IconComp size={18} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </aside>

            {tooltipText && tooltipPos && (
                <motion.div
                    key={tooltipText}
                    className={`right-tooltip-fixed ${tooltipActive ? "tooltip-active" : ""}`}
                    style={{
                        position: "fixed",
                        top: tooltipPos.top,
                        right: window.innerWidth - tooltipPos.rightEdge + 14,
                        transform: "translateY(-50%)",
                        zIndex: 9999,
                        pointerEvents: "none",
                    }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {tooltipText}
                </motion.div>
            )}
        </>
    );
};

export default RightNav;
