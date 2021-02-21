import React, { useState } from "react";

const App = () => {
  const [variable, changeVariable] = useState("");

  const handleChange = e => {
    changeVariable(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter something"
      />
      <br />
      <br />
      {variable}
    </div>
  );
};

export default App;
