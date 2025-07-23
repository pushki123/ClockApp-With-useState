import React, { useEffect, useState } from "react";
import "./WatchFace.css";

function WatchFace() {
  const [time, setTime] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const onTimer = setTimeout(() => {
      setIsOn(true);
    }, 2000);

    // Update time every second
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const formattedTime =
        `${hours < 10 ? "0" : ""}${hours} : ` +
        `${minutes < 10 ? "0" : ""}${minutes} : ` +
        `${seconds < 10 ? "0" : ""}${seconds}`;

      setTime(formattedTime);
    }, 1000);

    return () => {
      clearTimeout(onTimer);
      clearInterval(interval);
    };
  }, []);

  const handleToggleGlitch = (e) => {
    e.preventDefault();
    setIsGlitching((prev) => !prev);
  };

  return (
    <>
      {/* <a href="#" className="switcher" onClick={handleToggleGlitch}>
        Toggle Glitch
      </a> */}

      <div className="screen glitch">
        <div className={`clock ${isOn ? "" : "is-off"}`} data-text={time}>
          <span className="time" data-time={time}>
            {time}
          </span>
        </div>
      </div>
    </>
  );
}

export default WatchFace;
