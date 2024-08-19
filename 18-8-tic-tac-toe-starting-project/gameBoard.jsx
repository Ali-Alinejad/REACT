import { useState } from "react";

const B = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function GameBoard() {
  const [states, setStates] = useState(Array(B.length).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function clickedBtn(index) {
    const newStates = [...states];
    if (newStates[index] === null) {
      newStates[index] = isXNext ? "X" : "O";
      setStates(newStates);
      setIsXNext(!isXNext);
    }
  }

  const Ba = B.map((number, index) => (
    <button onClick={() => clickedBtn(index)} key={number}>
      {states[index]}
    </button>
  ));

  return (
    <div id="game-board" className="button-container">
      <ol>{Ba}</ol>
    </div>
  );
}
