import React, { useState, useEffect } from "react";

const App = () => {
  const [variable, changeVariable] = useState("");
  const [vel, setVel] = useState([]);
  const handleChange = e => {
    changeVariable(e.target.value);
  };

  useEffect(async () => {
    console.log(variable);
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );
    setVel(result.data);
    console.log(`This is result : {{vel}}`);
  }, [variable]);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <br />
      {variable}
      <br />
      <br />
      {vel}
    </div>
  );
};

export default App;
