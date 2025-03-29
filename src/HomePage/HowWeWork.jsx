import React from "react";
import '/src/HomePage/styles/howWeWork.css';

const HowWeWork = () => {
    return (
        <div className="howWeWorkContainer">
            <div className="howWeWorkTextContainer">
                <h1>How We Work</h1>
                <p>We are a team of passionate individuals dedicated to creating a platform that empowers learners to reach their full potential. Our mission is to provide personalized learning experiences that adapt to each individual's unique needs and emotional state.</p>
            </div>
            <div className="whatWeDoContainer">
                <div className="whatwedocard">
                    <div className="circle">1</div>
                    <div className="headerofwhatwedo">Assess Your State</div>
                    <div className="descofwhatwedo">Our platform evaluates your emotional readness for different learning activities</div>
                </div>
                <div className="whatwedocard">
                    <div className="circle">2</div>
                    <div className="headerofwhatwedo">Assess Your State</div>
                    <div className="descofwhatwedo">Our platform evaluates your emotional readness for different learning activities</div>
                </div>
                <div className="whatwedocard"> 
                    <div className="circle">3</div>
                    <div className="headerofwhatwedo">Assess Your State</div>
                    <div className="descofwhatwedo">Our platform evaluates your emotional readness for different learning activities</div>
                </div>
            </div>  
        </div>
    )
}

export default HowWeWork;