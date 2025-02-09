
import React from "react";

const ChildComponent2 = ({ selectedOption, onOptionChange }) => {
  return (
    <div
      className="child"
      style={{
        color: "black",
        backgroundColor: "#FFD600",
        paddingTop: "14px",
        paddingLeft:"5px"
      }}
    >
      <h2>Child Component 2</h2>
      <button
      
        onClick={() => onOptionChange("Option 2")}
        disabled={selectedOption === "Option 2"}
      >
        Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;