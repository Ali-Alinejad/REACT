import { useState } from "react";
import "./App.css";

function App() {
  const [Aa, Bb] = useState(0);
  function clicked() {
    Bb((prevAa) => (prevAa === 0 ? 1 : 0));
  }

  return (
    <div className="container">
      <section className="changeColor">
        <h2 className={Aa ? "active" : ""}>test color</h2>
        <h2></h2>
        <button onClick={clicked}>CliCk</button>
      </section>
    </div>
  );
}

export default App;
