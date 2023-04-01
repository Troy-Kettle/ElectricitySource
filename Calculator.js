import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedResult = parseFloat(inputValue) * 0.43;
    setResult(calculatedResult.toFixed(2));
    setInputValue("");
  };

  return (
    <div className="calculator-container">
      <h1>Calculator:</h1>
      <br></br><br></br>
      <p className="calcDis">
        This calculator takes a predicted amount of units used per day and
        calculates a predicted days price based off todays price of
        electricity. (k/pWh)
      </p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input:</label>
        <input
          id="input"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <br></br>
        <button type="submit">Calculate</button>
      </form>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
