import React from "react";
import '/src/HomePage/styles/header.css';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerLogo">
                <img  src="/src/assets/paper-plane-svgrepo-com.svg" alt="Vite logo" className="logo" />
                <span>CodePrep</span>
            </div>

            <div className="headerLinks">
                <div>Home</div>
                <div>Study</div>
                <div>Join Now</div>
            </div>
        </div>
    )
}

export default Header;