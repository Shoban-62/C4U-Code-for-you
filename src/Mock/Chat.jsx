import React, { useState, useRef, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import io from "socket.io-client";
import "./styles/Chat.css";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [isAssessment, setIsAssessment] = useState(false);
    const [socket, setSocket] = useState(null);
    const chatEndRef = useRef(null);

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
        audio: true,
        onStop: (blobUrl) => {
            addMessage({
                type: 'audio',
                content: blobUrl,
                timestamp: new Date().toLocaleTimeString()
            });
        }
    });

    useEffect(() => {
        const newSocket = io("http://localhost:5000");
        setSocket(newSocket);

        newSocket.on("bot_message", (message) => {
            addMessage({
                type: 'text',
                content: message,
                timestamp: new Date().toLocaleTimeString(),
                isBot: true
            });
        });

        return () => newSocket.disconnect();
    }, []);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const startAssessment = () => {
        setIsAssessment(true);
        socket.emit("start_assessment");
    };

    const handleTextSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            const message = {
                type: 'text',
                content: inputText,
                timestamp: new Date().toLocaleTimeString(),
                isBot: false
            };
            addMessage(message);
            
            if (isAssessment) {
                socket.emit("user_response", inputText);
            }
            
            setInputText("");
        }
    };

    const addMessage = (message) => {
        setMessages(prev => [...prev, message]);
        setTimeout(scrollToBottom, 100);
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Mock Interview Chat</h2>
                
            </div>
            
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`message ${msg.isBot ? 'bot' : 'user'}`}
                    >
                        <div className="message-time">{msg.timestamp}</div>
                        {msg.type === 'text' ? (
                            <div className="message-content">{msg.content}</div>
                        ) : (
                            <audio src={msg.content} controls />
                        )}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            <div className="chat-input-container">
                <form onSubmit={handleTextSubmit}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type a message..."
                        className="chat-input"
                    />
                    <button type="submit" className="send-button">
                        Send
                    </button>
                </form>
                <div className="audio-controls">
                    <button 
                        onClick={status === "recording" ? stopRecording : startRecording}
                        className={`record-button ${status === "recording" ? "recording" : ""}`}
                    >
                        {status === "recording" ? "Stop Recording" : "Start Recording"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;