import React from "react";
import '/src/HomePage/styles/banner.css';

const Banner = () => {
    return(
        <div className="banner">
            <div className="bannerContainer">
                <div className="bannerText">
                    <div>Learn with <span style={{color:'#e3aa64'}}>Emotional</span> Intelligence</div>
                    <div>The world's first learning platform that adapts to your emotional state and provides personalized career pathways</div>
                </div>
            </div>
            <div className="bannerButtonContainer">
                <button className="bannerButton">Get Started</button>
            </div>
        </div>
    )
}

export default Banner;