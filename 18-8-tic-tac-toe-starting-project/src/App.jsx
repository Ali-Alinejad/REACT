import PlayersInfo from "./player.jsx";
import GameBoard from "../gameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayersInfo name="Player1" symbol="X" />
          <PlayersInfo name="Player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  );
}

export default App;
