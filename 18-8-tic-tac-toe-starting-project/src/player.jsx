export default function PlayersInfo({ name, symbol }) {
  <li>
    <span className="player">
      <span className="player-name">{name}</span>
      <span className="player-symbol">{symbol}</span>
    </span>
    <button>EDIT</button>
  </li>;
}
