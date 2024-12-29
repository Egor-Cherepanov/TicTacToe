import { GameLavout } from "./GameLavout.jsx";
import { useState } from "react";

export const startingField = [
  '', '', '',
  '', '', '',
  '', '', '',
]; // prettier-ignore

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(startingField);
  return (
    <GameLavout
      field={[...field]}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
      setField={setField}
    />
  );
};
