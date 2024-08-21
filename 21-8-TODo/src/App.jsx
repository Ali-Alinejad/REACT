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
        <option value={1}>1</option>
        <option value={1}>2</option>
        <option value={1}>3</option>
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
