export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.buttonIndexs.row}${turn.buttonIndexs.col}`}>
          {turn.player} Selected {turn.buttonIndexs.row},{turn.buttonIndexs.col}
        </li>
      ))}
    </ol>
  );
}
