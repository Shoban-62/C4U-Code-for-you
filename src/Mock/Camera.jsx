import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import './styles/Camera.css';

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "mock-interview.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div className="webcam-container">
      <Webcam 
        audio={true} 
        ref={webcamRef}
        className="webcam-view"
      />
      <div className="control-buttons">
        {capturing ? (
          <button 
            onClick={handleStopCaptureClick}
            className="control-btn stop"
          >
            Stop Recording
          </button>
        ) : (
          <button 
            onClick={handleStartCaptureClick}
            className="control-btn start"
          >
            Start Recording
          </button>
        )}
        {recordedChunks.length > 0 && (
          <button 
            onClick={handleDownload}
            className="control-btn download"
          >
            Download Recording
          </button>
        )}
      </div>
    </div>
  );
};

const Camera = () => {
  return (
    <div className="camera-page">
      <WebcamStreamCapture />
    </div>
  );
};

export default Camera;