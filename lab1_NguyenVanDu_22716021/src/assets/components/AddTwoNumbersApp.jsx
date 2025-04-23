import { useState } from "react";

export default function AddTwoNumbersApp() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div className="p-4 ">
      <h3>Add Two Numbers App</h3>
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
      <button onClick={handleAdd} className="ml-2 px-4 py-2 bg-green-500 text-white rounded">
        Add
      </button>
      {result !== null && <p className="mt-4 text-xl">Result: {result}</p>}
    </div>
  );
}
