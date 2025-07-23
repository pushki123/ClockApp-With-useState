import React, { useState, useEffect, useRef } from "react";
import "./TimerWatch.css";
import NeoBrutalistButton from "./NeoBrutalistBtn";

const TimerWatch = () => {
  const [inputMinutes, setInputMinutes] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTimeLeft(0);
    setInputMinutes("");
  };

  const handleSetTime = () => {
    const seconds = parseInt(inputMinutes, 10) * 60;
    if (!isNaN(seconds) && seconds > 0) {
      setTimeLeft(seconds);
    }
  };

  return (
    <div className="TimerContainer">
      <h2>⏱️ Timer</h2>

      <div>
        <input
          type="number"
          placeholder="Enter minutes"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          className="Input"
        />
        <NeoBrutalistButton onClick={handleSetTime} text="Set">
          Set
        </NeoBrutalistButton>
      </div>

      <h1>{formatTime(timeLeft)}</h1>

      <div className="TimerNeoBrutalistButtons">
        <NeoBrutalistButton onClick={handleStart} text="Start">
          Start
        </NeoBrutalistButton>
        <NeoBrutalistButton onClick={handlePause} text="Pause">
          Pause
        </NeoBrutalistButton>
        <NeoBrutalistButton onClick={handleReset} text="Reset">
          Reset
        </NeoBrutalistButton>
      </div>
    </div>
  );
};

export default TimerWatch;
