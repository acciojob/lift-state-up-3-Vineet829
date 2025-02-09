
import React from "react";

const ChildComponent1 = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="child" style={{ color: "black", backgroundColor: "#ce5a19",paddingTop: "14px", paddingLeft:"5px"}}>
      <h2>Child Component 1</h2>
      <button
        onClick={() => onOptionChange("Option 1")}
        disabled={selectedOption === "Option 1"}
      >
        Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;