import React, { useContext } from "react";
import { GreyButton, YellowButton, DarkButton } from "../styles/Button.skin";
import { DisplayContext } from "../contexts/DisplayContext";
import { calcKeys, zeroBtnSpecialStyle } from "../auxiliary/data";

const Keyboard = props => {
  const { enterSign: enterSymbol } = useContext(DisplayContext);
  // console.log("From Keyboard");
  return (
    <div className="Keyboard">
      {calcKeys.map((keybkey, index) => {
        if (index < 3) {
          return (
            <GreyButton
              key={keybkey}
              style={{ color: "#522", fontWeight: "bold" }}
              onClick={() => enterSymbol(keybkey)}
            >
              {keybkey}
            </GreyButton>
          );
        }
        if ((index + 1) % 4 === 0) {
          return (
            <YellowButton
              key={keybkey}
              style={{ fontWeight: "bold" }}
              onClick={() => enterSymbol(keybkey)}
            >
              {keybkey}
            </YellowButton>
          );
        }
        if (index === 16) {
          return (
            <DarkButton
              key={keybkey}
              style={zeroBtnSpecialStyle}
              onClick={() => enterSymbol(keybkey)}
            >
              {keybkey}
            </DarkButton>
          );
        }
        if (index === 17) {
          return null;
        }
        return (
          <DarkButton key={keybkey} onClick={() => enterSymbol(keybkey)}>
            {keybkey}
          </DarkButton>
        );
      })}
    </div>
  );
};

export default Keyboard;
