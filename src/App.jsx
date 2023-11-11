import GameBoard from "./Components/GameBoard";
import Player from "./Components/player";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* playerNo,playerSymbole */}
          <Player initialPlayerName="Player 1" playerSymbole="X" />
          <Player initialPlayerName="Player 2" playerSymbole="O" />
        </ol>
    <GameBoard />
      
      </div>
    </main>
  );
}

export default App;
