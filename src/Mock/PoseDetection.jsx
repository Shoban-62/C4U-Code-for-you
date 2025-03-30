import React, { useEffect, useRef } from 'react';
import * as tmPose from '@teachablemachine/pose';
import * as tf from '@tensorflow/tfjs';
import './styles/PoseDetection.css';

const PoseDetection = () => {
    const canvasRef = useRef(null);
    const labelContainerRef = useRef(null);
    const webcamRef = useRef(null);

    const init = async () => {
        const URL = "https://teachablemachine.withgoogle.com/models/HNE0dHfx7/";
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        const model = await tmPose.load(modelURL, metadataURL);
        const maxPredictions = model.getTotalClasses();

        // Setup webcam
        const size = 200;
        const flip = true;
        const webcam = new tmPose.Webcam(size, size, flip);
        webcamRef.current = webcam;

        await webcam.setup();
        await webcam.play();

        // Setup canvas
        const canvas = canvasRef.current;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");

        // Create label containers
        const labelContainer = labelContainerRef.current;
        labelContainer.innerHTML = '';
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        const loop = async (timestamp) => {
            webcam.update();
            await predict(model, webcam, ctx, labelContainer, maxPredictions);
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    };

    const predict = async (model, webcam, ctx, labelContainer, maxPredictions) => {
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }

        drawPose(pose, webcam, ctx);
    };

    const drawPose = (pose, webcam, ctx) => {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    };

    return (
        <div className="pose-detection">
            <h2>Posture Analysis</h2>
            <button onClick={init} className="start-button">
                Start Posture Detection
            </button>
            <div className="detection-container">
                <canvas ref={canvasRef} />
                <div ref={labelContainerRef} className="label-container" />
            </div>
        </div>
    );
};

export default PoseDetection;