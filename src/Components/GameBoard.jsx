import { useState } from "react";
import player from "./player";
// **** objects and arrays(which technically are objects) are reference values in javscript  You should therefore not mutate them directly instead creat a deep copy

// dynamicly got the html
const GameBoard = function ({ onSelectPlayer, board }) {


  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function hadnleSelectGameBoard(rowIndex, colIndex) {
  // so here i can't manupulate all value directly from initialGameBoard therefor i have to use previous Value of state using this inserted function bellow
  //   setGameBoard((previousSelfInitialGameBoard) => {
  // i should not mutate it directly
  // make a copy of this initialGameBoard
  //     const updateBoard1 = initialGameBoard.slice();
  // updateBoard1[rowIndex][colIndex] = "X";
  // console.log(updateBoard1);
  // const updateBoard = [
  //   ...previousSelfInitialGameBoard.map((innerArray) => [...innerArray]),
  // ];
  //     updateBoard1[rowIndex][colIndex] = actPlayer;
  //     return updateBoard1;
  //   });
  //   onSelectPlayer();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerName, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectPlayer(rowIndex, colIndex)} disabled={playerName !==null}>
                  {playerName}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
