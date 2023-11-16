import React, { useState } from "react";
// import 'useState' from React

export default function player({
  initialPlayerName,
  playerSymbole,
  isActive,
  players,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialPlayerName);
  function editHandler(event) {
    event.preventDefault();

    // if your new state depends on your preivous state value  you should not update the state directly like this

    // setIsEditing(!isEditing);

    setIsEditing((previousValue) => !previousValue);
    if (isEditing) players(playerSymbole, playerName);

    // realtime data    edit data
    // setIsEditing((previousValue)=>   !previousValue);
  }
  const inputHandler = function (event) {
    const inputedValue = event.target.value;

    setPlayerName(inputedValue);
  };
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              onChange={inputHandler}
              defaultValue={playerName}
            />
          ) : (
            <span className="player-name"> {playerName}</span>
          )}
          <span className="player-symbol">{playerSymbole}</span>
        </span>
        <button onClick={editHandler}>{!isEditing ? "Edit" : "Save"}</button>
      </li>
    </>
  );
}
