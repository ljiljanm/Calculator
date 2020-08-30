import React from "react";

import "./styles/CalcApp.css";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

import Time from "./components/Time";
import { DisplayContextProvider } from "./contexts/DisplayContext";

const CalcApp = props => {
  return (
    <div className="CalcApp">
      <Time />
      <DisplayContextProvider>
        <Display />
        <Keyboard />
      </DisplayContextProvider>
      <div className="bottom"></div>
    </div>
  );
};

export default CalcApp;
