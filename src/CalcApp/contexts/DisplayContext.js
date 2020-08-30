import React, { useRef, createContext, useState } from "react";

export const DisplayContext = createContext();

export const DisplayContextProvider = props => {
  const [display, setDisplay] = useState("");
  const clearDisplayRef = useRef(false);
  const lastBtnEqual = useRef(false);
  console.log("clearDisplayRef: ", clearDisplayRef.current);
  const enterSign = btn => {
    // debugger;
    console.log("lastBtnEqual", lastBtnEqual.current);
    if (display === "" && (btn === "\u00d7" || btn === "\u00f7")) {
      return; // multiplication "*"       division "/"
    }
    if (btn !== "C" && btn !== "=" && btn !== "\u00b1") {
      // \u00b1 is plus/minus
      if (btn === "%") {
        setDisplay(parseFloat(display) / 100);
        return;
      }
      let newVal = display;
      if (!clearDisplayRef.current || lastBtnEqual.current) {
        if (display.toString().length <= 11) {
          newVal += btn.toString();
        } else {
          setDisplay("");
          return;
        }
      } else {
        newVal = btn;
      }
      lastBtnEqual.current = false;
      setDisplay(newVal);
      clearDisplayRef.current = false;
    } else if (btn === "=") {
      lastBtnEqual.current = true;
      try {
        let evalValue = display.replace("\u00d7", "*");
        evalValue = eval(evalValue.replace("\u00f7", "/"));
        if (isNaN(evalValue)) {
          throw new Error("This was NaN");
        }
        setDisplay(Math.round(evalValue * 1e9) / 1e9);
        clearDisplayRef.current = true;
      } catch (error) {
        console.log("Error", error);
        setDisplay("Error");
        clearDisplayRef.current = true;
      }
    } else if (btn === "\u00b1") {
      setDisplay(-parseFloat(display));
    } else {
      setDisplay("");
      clearDisplayRef.current = true;
    }
  };
  return (
    <DisplayContext.Provider value={{ display, enterSign }}>
      {props.children}
    </DisplayContext.Provider>
  );
};
