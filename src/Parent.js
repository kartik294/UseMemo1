import React, { useState } from "react";
import Square from "./Square";

const Parent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div>
      <button onClick={addNumber}>Add Number</button>
      {numbers.map((num) => (
        <Square key={num} number={num} />
      ))}
    </div>
  );
};
export default Parent;
