import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/player";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver";
import { WINNING_COMBINATIONS } from "./Components/WinnitCombination";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const deeriveGameTurns = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deeriveGameTurns(gameTurns);
  let winner;

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { buttonIndexs, player } = turn;
    const { row, col } = buttonIndexs;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquar = gameBoard[combination[0].row][combination[0].column];

    const secondSquar = gameBoard[combination[1].row][combination[1].column];
    const thirdSquar = gameBoard[combination[2].row][combination[2].column];
    console.log(firstSquar, secondSquar, thirdSquar);
    if (firstSquar && firstSquar === secondSquar && firstSquar === thirdSquar) {
      winner = players[firstSquar];
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
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
  function handleReset() {
    setGameTurns([]);
  }
  function handlePlayers(symbol, newPlayerName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newPlayerName,
      };
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
            players={handlePlayers}
          />
          <Player
            initialPlayerName="Player 2"
            playerSymbole="O"
            isActive={activePlayer === "O"}
            players={handlePlayers}
          />
        </ol>
        <GameBoard onSelectPlayer={handleActivePlayer} board={gameBoard} />
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleReset={handleReset} />
        )}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
