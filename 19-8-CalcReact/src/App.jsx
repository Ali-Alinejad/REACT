import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const Numbers = ["HI", "Bye", "hey"];
  const [massage, setMassage] = useState(0);
  function nextHandle() {
    setMassage(massage + 1);
    if (massage === Numbers.length - 1) setMassage(Numbers.length - 1);
  }

  function BackHandle() {
    setMassage(massage - 1);
    if (massage === 0) setMassage(0);
  }
  const date = new Date("June 21, 2024");
  date.setDate(date.getDate() + count);

  return (
    <div id="section">
      <div id="top">
        <button onClick={BackHandle}>Back</button>
        <label htmlFor=" ">{Numbers[massage]}</label>
        <button onClick={nextHandle}>Next</button>
      </div>
      <div id="bot">
        <label className={massage >= 0 ? "active" : ""}>1</label>
        <label className={massage >= 1 ? "active" : ""}> 2</label>
        <label className={massage >= 2 ? "active" : ""}>3</label>
      </div>
      <div className="counters">
        <button onClick={() => setCount(count - 1)}>-</button>
        <label htmlFor="">{count}</label>
        <button onClick={() => setCount(count + 1)}>+</button>

        <p>{date.toDateString()}</p>
      </div>
    </div>
  );
}

export default App;
