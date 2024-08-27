import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const handleInputChange = (e) => {
    setNum(e.target.value);
  };

  useEffect(() => {
    console.log(num);
  }, [num]);

  return (
    <>
      <Inputs handleInputChange={handleInputChange} />
    </>
  );
}

function Inputs({ handleInputChange }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col mx-auto w-full max-w-md h-auto mt-20 p-6 rounded-lg shadow-lg text-center">
      <input
        onChange={handleInputChange}
        className="p-3 rounded-lg border-none mt-5 text-center w-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter amount"
      />
      <select className="p-3 rounded-lg border-none mt-5 w-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="IRI">IRI</option>
      </select>
      <h2 className="mt-5 text-white font-semibold">TO</h2>
      <select className="p-3 rounded-lg border-none mt-5 w-full bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="IRI">IRI</option>
      </select>
      <h4 className="mt-10 text-yellow-50 font-mono text-2xl">210.25</h4>
    </div>
  );
}

export default App;
