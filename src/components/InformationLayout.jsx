import PropTypes from "prop-types";
import styles from "./InformationLayout.module.css";
// import { startingField } from "./Game";

export const InformationLayout = (props) => {
  const { isGameEnded, getStatus, restartGame } = props;

  return (
    <>
      <h1 className={styles.text}>{getStatus()}</h1>
      {isGameEnded && (
        <button className={styles.restartBtn} onClick={restartGame}>
          Начать заново
        </button>
      )}
    </>
  );
};

InformationLayout.propTypes = {
  isGameEnded: PropTypes.bool,

  getStatus: PropTypes.func,
  restartGame: PropTypes.func,
};
