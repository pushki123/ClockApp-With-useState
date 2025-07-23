import Navbar from "./Navbar";
import WatchFace from "./Watchface";
import StopWatch from "./StopWatch";
import TimerWatch from "./TimerWatch";
import { useState } from "react";

function HomePage() {
  const [ActiveComponent, SetActiveComponent] = useState("WatchFace");
  return (
    <>
      <Navbar SetActiveComponent={SetActiveComponent} />
      <div>
        {ActiveComponent === "WatchFace" && <WatchFace />}
        {ActiveComponent === "StopWatch" && <StopWatch />}
        {ActiveComponent === "TimerWatch" && <TimerWatch />}
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default HomePage;
