import React, { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";
const Display = props => {
  const { display } = useContext(DisplayContext);
  // console.log("from display");
  return (
    <div className="Display">
      <h2>{display}</h2>
    </div>
  );
};

export default Display;
