import React, { useState, useEffect } from "react";
import { ArrowLeft, Sun, Moon, Download, Share2, Check } from "lucide-react";
import "./Header.scss";

const Header = ({ onBackClick }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <header className="header">
            <div className="left-section">
                <div className="logo-group">
                    <div className="logo-text">NEXT<span>CAR</span></div>
                    <div className="tagline">DRIVE NEXT</div>
                </div>

                <button
                    className="back-btn"
                    onClick={onBackClick}
                    aria-label="Go Back"
                    title="Back"
                >
                    <ArrowLeft size={16} />
                </button>
            </div>

            <div className="right-section">
                <div className="theme-pill">
                    <button
                        className={`theme-btn ${!isDarkMode ? "active" : ""}`}
                        onClick={() => setIsDarkMode(false)}
                        aria-label="Light Mode"
                        title="Light Mode"
                    >
                        <Sun size={13} />
                    </button>
                    <button
                        className={`theme-btn ${isDarkMode ? "active" : ""}`}
                        onClick={() => setIsDarkMode(true)}
                        aria-label="Dark Mode"
                        title="Dark Mode"
                    >
                        <Moon size={13} />
                    </button>
                </div>

                <button className="action-btn action-btn--disabled" aria-label="Download" title="Download Spec" disabled>
                    <Download size={15} />
                </button>

                <button className="action-btn action-btn--disabled" aria-label="Share" title="Share Prototype" disabled>
                    <Share2 size={15} />
                </button>

                <button className="action-btn check-btn" aria-label="Confirmed" title="Confirmed">
                    <Check size={16} color="#ffffff" />
                </button>
            </div>
        </header>
    );
};

export default Header;
