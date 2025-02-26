import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4">
      <h3>To-Do App</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded"
        placeholder="New task"
      />
      <button onClick={handleAddTask} className="ml-2 px-4 py-2 bg-green-500 text-white rounded">
        Add Task
      </button>

      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
