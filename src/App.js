import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [variable, changeVariable] = useState("");
  let inputRef = useRef("jagan");
  const handleChange = e => {
    changeVariable(e.target.value);
  };
  const handleClick = () => {
    console.log(inputRef.current.value);
    changeVariable(inputRef.current.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef.current]);
  return (
    <div>
      <input type="text" placeholder="Enter something" ref={inputRef} />
      <br />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <br />
      <br />
      {variable}
    </div>
  );
};

export default App;
