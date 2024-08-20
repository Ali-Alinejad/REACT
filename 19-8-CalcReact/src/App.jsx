import "./App.css";
import { useState } from "react";
function App() {
  const Numbers = ["HI", "Bye", "hey"];
  const [massage, setMassage] = useState(0);
  function nextHandle() {
    setMassage(massage + 1);
    if (massage === Numbers.length - 1) {
      return setMassage(Numbers.length - 1);
    }
  }

  function BackHandle() {
    setMassage(massage - 1);
    if (massage === 0) {
      return setMassage(0);
    }
  }

  return (
    <div id="section">
      <div id="top">
        <button onClick={BackHandle}>Back</button>
        <label htmlFor=" ">{Numbers[massage]}</label>
        <button onClick={nextHandle}>Next</button>
      </div>
      <div id="bot">
        <label className={`${massage >= 0 ? "active" : ""}`}>1</label>
        <label className={`${massage >= 1 ? "active" : ""}`}> 2</label>
        <label className={`${massage >= 2 ? "active" : ""}`}>3</label>
      </div>
    </div>
  );
}

export default App;
