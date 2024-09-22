import React, { useState } from "react";
import Parent from "./Parent";
import SlowChild from "./SlowChild";

const Performance = () => {
  const [optimize1, setOptimize1] = useState("not_optimized");
  const handleOptimize1 = (e) => {
    setOptimize1(e.target.value);
  };
  return (
    <div>
      <h2>Performance</h2>
      <h2>1.Optimising using children/any props or memo function</h2>

      <label>
        <input
          type="radio"
          value="not_optimized"
          checked={optimize1 === "not_optimized"}
          onChange={handleOptimize1}
        />
        Not Optimized
      </label>
      <label>
        <input
          type="radio"
          value="children_prop"
          checked={optimize1 === "children_prop"}
          onChange={handleOptimize1}
        />
        Use children prop
      </label>
      <label>
        <input
          type="radio"
          value="memo_functiom"
          checked={optimize1 === "memo_functiom"}
          onChange={handleOptimize1}
        />
        Use Memo prop
      </label>
      <br></br>
      {optimize1 === "not_optimized" && <Parent />}
      {optimize1 === "children_prop" && (
          <Parent>
          <SlowChild />
        </Parent>
      )}
      {optimize1 === "memo_functiom" && <Parent memo={true} />}
    </div>
  );
};

export default Performance;
