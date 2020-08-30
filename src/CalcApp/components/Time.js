import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Time = props => {
  const [currentTime, setCurrentTime] = useState();
  const readTime = () => {
    const date = new Date();
    console.log(date);
    const mins =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const time = `${date.getHours()}:${mins}`;
    setCurrentTime(time);
  };
  useEffect(() => {
    const timeHandler = setTimeout(() => {
      console.log("The first");
      readTime();
    }, 1000);
    return () => {
      clearTimeout(timeHandler);
    };
  }, []);
  useEffect(() => {
    const timeHandler = setTimeout(() => {
      console.log("all others");
      readTime();
    }, 10000);
    return () => {
      clearTimeout(timeHandler);
    };
  });
  return <div className="Time">{currentTime}</div>;
};

export default Time;
