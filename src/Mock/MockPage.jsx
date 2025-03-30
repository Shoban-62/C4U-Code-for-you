import React from "react";
import Camera from "./Camera";
import Chat from "./Chat";
import PoseDetection from "./PoseDetection";

const MockPage = () => {
    return (
        <div className="mock-page">
            <div className="mock-header">
                Mock<span>Test</span>
            </div>
            <div className="mock-content">
                <div className="mock-main">
                    <Camera />
                    <Chat />
                </div>
                <div className="mock-sidebar">
                    <PoseDetection />
                </div>
            </div>
        </div>
    );
}

export default MockPage;