import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/player";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/WinnitCombination";


const deeriveGameTurns = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deeriveGameTurns(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((preTurns) => {
      let currentPlayer = deeriveGameTurns(preTurns);
      // console.log(currentPlayer +" currentPlayer")

      const updateTurns = [
        {
          buttonIndexs: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...preTurns,
      ];
      console.log(updateTurns);
      return updateTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* playerNo,playerSymbole */}
          <Player
            initialPlayerName="Player 1"
            playerSymbole="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialPlayerName="Player 2"
            playerSymbole="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectPlayer={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
