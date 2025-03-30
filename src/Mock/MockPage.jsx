import React from "react";
import Camera from "./Camera";
import Chat from "./Chat";

const MockPage = () => {
    return (
        <div>
            <div style={{color:'#e3aa64',fontSize:'32px',fontWeight:'600'}}>Mock<span style={{color: "#000000"}}>Test</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between',flexDirection: 'row'}}>
                <Camera />
                <Chat />
            </div>
            
        </div>
    );
}

export default MockPage;