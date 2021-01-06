import React from "react";

export const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h3>Counter: {value}</h3>
    <button onClick={onIncrement}>inc</button>
    <button onClick={onDecrement}>dec</button>
  </div>
);
