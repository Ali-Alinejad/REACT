import { useState } from "react";
import "./App.css";


function App() {
  return (
    <>
      <INputs />
    </>
  );
}

function INputs() {
  let rates ;
  const [Natije, setNatije] = useState(0);
  const [amount,Setamount] = useState(1);
  const [Fromcur, SetFromcur] = useState("USD");
  const [tocur, Settocur] = useState("EUR");

  async function convertHandle() {
    const host = await "api.frankfurter.app";
    await fetch(
      `https://${host}/latest?${amount}=10&from=${Fromcur}&to=${tocur}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        rates = data.rates[tocur];
        setNatije ( rates * amount);
        console.log(Natije);
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Currency Converter
        </h1>
        <input
          onChange={(e) => Setamount(e.target.value)}
          className="p-3 rounded-lg border mt-5 text-center w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          placeholder="Enter amount"
        />
        <div className="flex justify-between mt-5">
          <select
            value={Fromcur}
            className="p-3 rounded-lg border w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => SetFromcur(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
          </select>
          <span className="mx-2 self-center">to</span>
          <select
            value={tocur}
            className="p-3 rounded-lg border w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => Settocur(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <button
          onClick={convertHandle}
          className="mt-5 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {amount} {Fromcur} <span>⏩</span> {tocur}
        </button>
        <h4 className="mt-10 text-gray-700 text-2xl text-center font-serif">
          {Natije}
        </h4>
      </div>
    </div>
  );
}

export default App;
