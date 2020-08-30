import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import SetTimer from "./SetTimer";
import SetDate from "./SetDate";
import CountToThisDate from "./CountToThisDate";
import StartStop from "./StartStop";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let timeLeft = {};
    let difference = new Date(`10/1/${year}`) - new Date();
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    for (let key in timeLeft) {
      if (key !== "days") {
        if (timeLeft[key] < 10) {
          timeLeft[key] = "0" + timeLeft[key];
        }
      }
    }
    return timeLeft;
  };
  const [time, setTime] = useState(calculateTimeLeft());

  const [countDownTime, setCountDownTime] = useState(0);

  const [wantedDate, setWantedDate] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(time).forEach(period => {
    if (!time[period]) {
      return;
    }
    timerComponents.push(
      <span key={Math.random()}>
        {time[period]} {period}{" "}
      </span>
    );
  });
  const setTimer = e => {
    let value = e.target.value;
    setCountDownTime(value);
  };
  const setDateHandler = e => {
    setWantedDate(new Date(e.target.value).toLocaleDateString().replace(/\//g, "-"));
  };
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>it's over :)</span>}
      <SetTimer blur={setTimer} />
      <Timer countDown={countDownTime} />
      <SetDate choose={setDateHandler} />
      <hr />
      <StartStop />
    </div>
  );
}

export default App;
