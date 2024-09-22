import React, { useState } from "react";
import Parent from "./Parent";
import SlowChild from "./SlowChild";

const Performance = () => {
  const [optimize1, setOptimize1] = useState(true);
  return (
    <div>
      <h1>Performance</h1>
      <h2>1.Optimising using children prop or props</h2>
      <input
        type="checkbox"
        id="1"
        checked={optimize1}
        onChange={() => setOptimize1(!optimize1)}
      />
      <label htmlFor="1">Enable children prop optimization</label>
      <br></br>
      {optimize1 ? (
        <Parent>
          <SlowChild />
        </Parent>
      ) : (
        <Parent />
      )}
    </div>
  );
};

export default Performance;
