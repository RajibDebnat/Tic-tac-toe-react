import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/player";
import Log from "./Components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns,setGameTurns]=useState([]);
  function handleActivePlayer() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns()
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* playerNo,playerSymbole */}
          <Player initialPlayerName="Player 1" playerSymbole="X" isActive={activePlayer ==='X'}/>
          <Player initialPlayerName="Player 2" playerSymbole="O" isActive={activePlayer ==='O'}/>
        </ol>
        <GameBoard onSelectPlayer={handleActivePlayer} actPlayer={activePlayer} />
      </div>
      <Log/>    </main>
  );
}

export default App;
