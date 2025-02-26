import { useState } from "react";

export default function HelloNameApp() {
  const [fullName, setFullName] = useState("");
  const [greeting, setGreeting] = useState("");


  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter your name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border ml-2 px-4 py-2 rounded text-xl"
      />
      <button onClick={()=>{setGreeting(fullName)} }className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Say Hello
      </button>
      {greeting && <p className="mt-4 text-xl">Hello {greeting}</p>}
    </div>
  );
}





