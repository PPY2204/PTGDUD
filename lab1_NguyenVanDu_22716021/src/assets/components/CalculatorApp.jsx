import { useState } from "react";

export default function CalculatorApp() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);
  const operations = ["+", "-", "*", "/"];
  const handleCalculate = () => {
    if (!num1 || !num2 || !operation) {
      return;
    }

    let calcResult = 0;
    switch (operation) {
      case "+":
        calcResult = num1 + num2;
        break;
      case "-":
        calcResult = num1 - num2;
        break;
      case "*":
        calcResult = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        calcResult = num1 / num2;
        break;
      default:
        return "Invalid operation";
    }
    setResult(calcResult);
  };

  return (
    <div className="p-4">
      <h3>Calculator App</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="border p-2 rounded"
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="ml-2 border p-2 rounded"
        placeholder="Number 2"
      />
      <br />
      {operations.map((op) => (
        <>
          <input
            type="radio"
            name="operation"
            value={op}
            checked={operation === op}
            onChange={(e) => setOperation(e.target.value)}
          />
          <label className="m-2">{op}</label>
        </>
      ))}
      <button onClick={handleCalculate} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        =
      </button>
      {result !== null && <p className="mt-4 text-xl">Result: {result}</p>}
    </div>
  );
}
