import { useState } from "react";

function App() {
  let [bg_color, bg_setColor] = useState("bg-red-200");
  const clickRenderer = (backgroundColor) => {
    console.log(backgroundColor);
    bg_setColor(backgroundColor);
  }

  return (
    <div className={`min-h-screen flex flex-col justify-end items-center ${bg_color}`}>
      {/* Container with padding */}
      <div className="pb-8 mx-auto max-w-screen-lg">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center space-x-4">
          <button className="bg-orange-500 text-black font-bold py-2 px-4 rounded mb-4" onClick={() => clickRenderer("bg-orange-500")}>bg-orange-500</button>
          <button className="bg-yellow-600  text-black font-bold py-2 px-4 rounded mb-4" onClick={() => clickRenderer("bg-yellow-600")}>bg-yellow-600</button>
          <button className="bg-lime-500  text-black font-bold py-2 px-4 rounded mb-4" onClick={() => clickRenderer("bg-lime-500")}>bg-lime-500</button>
          <button className="bg-cyan-500  text-black font-bold py-2 px-4 rounded mb-4" onClick={() => clickRenderer("bg-cyan-500")}>bg-cyan-500</button>
          <button className="bg-indigo-700  text-black font-bold py-2 px-4 rounded mb-4" onClick={() => clickRenderer("bg-indigo-700")}>bg-indigo-700</button>
          <button className="bg-fuchsia-200  text-black font-bold py-2 px-4 rounded mb-4" onClick={() => clickRenderer("bg-fuchsia-200")}>bg-fuchsia-200</button>       
        </div>
      </div>
    </div>
  )
}

export default App;
