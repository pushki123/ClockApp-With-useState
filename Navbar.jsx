import "./Navbar.css";

function Navbar({ SetActiveComponent }) {
  return (
    <>
      <div className="Navbar">
        <div className="LeftSide">
          <div className="Logo">WATCHAPP</div>
        </div>
        <div className="RightSide">
          <div className="NavigationBar">
            <div
              className="NavigationLink"
              onClick={() => SetActiveComponent("WatchFace")}
            >
              Watch
            </div>
            <div
              className="NavigationLink"
              onClick={() => SetActiveComponent("TimerWatch")}
            >
              Timer
            </div>
            <div
              className="NavigationLink"
              onClick={() => SetActiveComponent("StopWatch")}
            >
              Stopwatch
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
