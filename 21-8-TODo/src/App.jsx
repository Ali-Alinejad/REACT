import { Fragment } from "react";
import "./App.css";

function Logo() {
  return (
    <div className="Logo">
      <h1>TRAVEL TO DO ✈️</h1>
    </div>
  );
}
function Form() {
  return (
    <div className="Form">
      <h2>What do you need for trip?👀</h2>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..."></input>
      <input type="submit" value="ADD" />
    </div>
  );
}
function PackingList() {
  return (
    <div className="PackingList">
      <label>sdsad</label>
      <button></button>
      <button></button>
    </div>
  );
}
function Stats() {}

function App() {
  return (
    <Fragment>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </Fragment>
  );
}

export default App;
