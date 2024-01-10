/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useDarkSide from "/src/Hook/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
    };
    
  return (
    <>
      <div className=" flex flex-col items-center">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={27}
          moonColor="yellow"
          sunColor="orange"
        />
        
      </div>
    </>
  )
}
