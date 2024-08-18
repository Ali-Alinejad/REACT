import { useState } from "react";

export default function PlayersInfo({ name, symbol }) {
  const [Aa, Bb] = useState(false);
  const [nowName, NewName] = useState(name);

  const handleInputChange = (event) => {
    NewName(event.target.value);
  };

  function changeReact() {
    Bb((e) => !e);
  }
  let plyersNameShow = <span className="player-name">{nowName}</span>;
  let plyersNameShow2 = (
    <input type="text" required value={nowName} onChange={handleInputChange} />
  );

  if (Aa) {
    plyersNameShow = plyersNameShow2;
  }

  return (
    <li>
      {plyersNameShow}
      <span className="player">
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeReact}>{Aa ? "Save" : "Edit"}</button>
    </li>
  );
}
