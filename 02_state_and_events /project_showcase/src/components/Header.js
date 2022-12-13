// import React from "react";

import { useState } from "react";

const Header = () => {
  
  // Initialize isDarkMode State + Setter Function

  // isDarkMode => State
  // setDarkMode => Setter Function (Automatically Triggers Re-Render)
  // false => Initial Value for Our State

  // console.log(useState(false));

  // Array Destructuring Assignment
    // useState() => Returns an Array

  // [ state itself, setter function]

  const [ isDarkMode, setDarkMode ] = useState(false);

  // console.log(isDarkMode);

  const handleClick = () => {
    setDarkMode(!isDarkMode);

    // 1st Click=> false / true
    // 2nd Click => true / false
    // ...

  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>
        {/* CONDITION ? IF TRUE : IF FALSE */}
        
        {isDarkMode ? "Dark Mode" : "Light Mode" }
      </button>
    </header>
  );
}

export default Header;
