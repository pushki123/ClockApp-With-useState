import "./StopWatch.css";
import NeoBrutalistButton from "./NeoBrutalistBtn";
import { useEffect, useState, useRef } from "react";

function StopWatch() {
  const [Time, setTime] = useState(0);
  const [IsRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (IsRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup
    return () => clearInterval(intervalRef.current);
  }, [IsRunning]);

  const formatTime = (ms) => {
    const hours = `0${Math.floor(ms / 3600000)}`.slice(-2);
    const minutes = `0${Math.floor((ms / 60000) % 60)}`.slice(-2);
    const seconds = `0${Math.floor((ms / 1000) % 60)}`.slice(-2);
    const milliseconds = `0${Math.floor((ms % 1000) / 10)}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds} . ${milliseconds}`;
  };

  return (
    <>
      <div className="StopWatch-Container">
        <h1 className="StopWatch-Time">{formatTime(Time)}</h1>

        <div className="StopWatch-Controls">
          {!IsRunning ? (
            <NeoBrutalistButton
              onClick={() => setIsRunning(true)}
              className="Btn"
              text="Start"
            >
              Start
            </NeoBrutalistButton>
          ) : (
            <NeoBrutalistButton
              onClick={() => setIsRunning(false)}
              className="Btn"
              text="Stop"
            >
              Stop
            </NeoBrutalistButton>
          )}
          <NeoBrutalistButton
            onClick={() => setTime(0)}
            disabled={IsRunning}
            className="Btn"
            text="Reset"
          >
            Reset
          </NeoBrutalistButton>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
