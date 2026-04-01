import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (type) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;

    switch (type) {
  case "+":
    res = n1 + n2;
    break;
  case "-":
    res = n1 - n2;
    break;
  case "*":
    res = n1 * n2;
    break;
  case "/":
    res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
    break;
}

    setResult(res);
  };

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
  <div className="calculator">
    <h2>Calculator</h2>

    <input
      type="number"
      placeholder="First number"
      value={num1}
      onChange={(e) => setNum1(e.target.value)}
    />

    <input
      type="number"
      placeholder="Second number"
      value={num2}
      onChange={(e) => setNum2(e.target.value)}
    />

    <div className="buttons">
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
    </div>

    <button className="clear-btn" onClick={clearFields}>
      Clear
    </button>

    <div className="result">
      Result: {result}
    </div>
  </div>
);
}

export default Calculator;