import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["olive", "red", "blue", "green", "yellow"];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-lg">
          {colors.map((clr) => (
            <button
              key={clr}
              className="p-2 rounded-lg"
              style={{ backgroundColor: clr }}
              onClick={() => setColor(clr)}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
