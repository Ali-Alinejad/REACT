import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

const initialItem = [
  { id: 1, des: "passport", quantity: 2, packed: false },
  { id: 2, des: "socks", quantity: 12, packed: false },
  { id: 3, des: "coats", quantity: 5, packed: false },
];

function Item({ item }) {
  return (
    <div className="sshow">
      <li>
        <span>
          {item.des}  {item.quantity}   
        </span>
        <button> ❌</button>
      </li>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    des: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
};

function Logo() {
  return (
    <div className="Logo">
      <h1>TRAVEL TO DO ✈️</h1>
    </div>
  );
}

function Form() {
  const [textType, setTextType] = useState("");
  const [Quan, setQuan] = useState(1);

  function ChangeText(event) {
    setTextType(event.target.value);
  }

  function ChangeSelect(event) {
    setQuan(event.target.value);
  }

  function Adding(event) {
    event.preventDefault();
    const showAdd = [{ textType }, { Quan }, { type: false }];
    console.log(showAdd);
  }

  return (
    <div className="Form">
      <h2>What do you need for trip?👀</h2>
      <select name="" id="" onChange={ChangeSelect}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={textType}
        onChange={ChangeText}
      ></input>
      <input type="submit" value="ADD" onClick={Adding} />
    </div>
  );
}

function PackingList() {
  return (
    <div className="PackingList">
      <div className="show">
        <ul>
          {initialItem.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stats() {
  const [answer, setAnswer] = useState(false);
  return (
    <div className="bg">
      <button
        style={
          answer ? { backgroundColor: "red" } : { backgroundColor: "black" }
        }
        onClick={() => setAnswer((e) => !e)}
      >
        {answer ? "YE" : "boy"}
      </button>
    </div>
  );
}

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
