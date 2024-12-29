import PropTypes from "prop-types";
import { startingField } from "./Game";
import { InformationLayout } from "./InformationLayout";

export const Information = (props) => {
  const {
    currentPlayer,
    isGameEnded,
    isDraw,
    setCurrentPlayer,
    setField,
    setIsDraw,
    setIsGameEnded,
  } = props;

  const restartGame = () => {
    setCurrentPlayer("X");
    setField(startingField);
    setIsDraw(false);
    setIsGameEnded(false);
  };

  const getStatus = () => {
    if (isDraw === true) {
      return "Ничья";
    } else if (isDraw === false && isGameEnded === true) {
      return `Победа: ${currentPlayer}`;
    } else if (isDraw === false && isGameEnded === false) {
      return `Ходит: ${currentPlayer}`;
    }
  };

  return (
    <InformationLayout
      getStatus={getStatus}
      isGameEnded={isGameEnded}
      restartGame={restartGame}
    />
  );
};

Information.propTypes = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,

  setCurrentPlayer: PropTypes.func.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
};
