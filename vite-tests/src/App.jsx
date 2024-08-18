import { useState } from "react";

import "./App.css";

function App() {
  let [Aa, Bb] = useState(" ");
  function clicked() {
    {
      Bb((prevColor) => (prevColor === "black" ? "red" : "black"));
    }
  }
  return (
    <div>
      <section className="changeColor">
        <h2 style={{ color: Aa }}>TEST COLOR</h2>
        <button onClick={clicked}>CLICK</button>
      </section>
    </div>
  );
}
export default App;
