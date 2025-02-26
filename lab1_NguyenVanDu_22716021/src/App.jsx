import { useState } from "react";
import HelloNameApp from "./assets/components/HelloNameApp";
import AddTwoNumbersApp from "./assets/components/AddTwoNumbersApp";
import CalculatorApp from "./assets/components/CalculatorApp";
import TodoApp from "./assets/components/TodoApp";

const pages = [
  <HelloNameApp key="bai1" />,
  <AddTwoNumbersApp key="bai2" />,
  <CalculatorApp key="bai3" />,
  <TodoApp key="bai4" />,
];

const pageTitles = ["Hello Name", "Add Two Numbers", "Calculator", "Todo"];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="p-4 flex flex-col items-center" >
      {pageTitles.map((title, index) => (
        <button key={index} onClick={() => setCurrentPage(index)}>
          {title}
        </button>
      ))}
      <br />
      {pages[currentPage]}
    </div>
  );
}

export default App;