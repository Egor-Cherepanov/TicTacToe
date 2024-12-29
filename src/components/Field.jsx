import PropTypes from "prop-types";
import { FieldLayout } from "./FieldLayout";
import { useEffect } from "react";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (field, currentPlayer) => {
  const playerPositions = field.reduce((acc, fieldElem, index) => {
    if (fieldElem === currentPlayer) {
      acc.push(index);
    }
    return acc;
  }, []);

  return WIN_PATTERNS.some((winPattern) =>
    winPattern.every((index) => playerPositions.includes(index))
  );
};

export const Field = (props) => {
  const {
    field,
    currentPlayer,
    isGameEnded,
    setCurrentPlayer,
    setField,
    setIsDraw,
    setIsGameEnded,
  } = props;

  const onFieldClick = (fieldElement, key) => {
    if (fieldElement !== "") {
      return console.error("Это поле уже занято");
    }

    if (isGameEnded) {
      return console.error("Игра окончена, начните навую");
    }

    const currentField = [...field];
    currentField[key] = currentPlayer;
    setField(currentField);

    if (checkWinner(currentField, currentPlayer)) {
      setIsGameEnded(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  useEffect(() => {
    if (!field.includes("") && !isGameEnded) {
      setIsDraw(true);
      setIsGameEnded(true);
    }
  }, [field, isGameEnded, setIsDraw, setIsGameEnded]);

  return (
    <>
      <FieldLayout field={[...field]} onFieldClick={onFieldClick} />
    </>
  );
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,

  setCurrentPlayer: PropTypes.func.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
};
