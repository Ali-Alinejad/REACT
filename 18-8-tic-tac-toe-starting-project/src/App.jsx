import PlayersInfo from "./player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayersInfo name="Player1" symbol="X" />
          <PlayersInfo name="Player2" symbol="O" />
        </ol>
        game board
      </div>
      log
    </main>
  );
}

export default App;
