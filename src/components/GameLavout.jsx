// import { useState } from "react";
// import "./App.css";
import { Field } from "./Field";
import { Information } from "./Information";
import PropTypes from "prop-types";
import styles from "./GameLayout.module.css";

export const GameLavout = (props) => {
  return (
    <>
      <div className={styles.board}>
        <Field
          field={[...props.field]}
          currentPlayer={props.currentPlayer}
          isDraw={props.isDraw}
          isGameEnded={props.isGameEnded}
          //
          setCurrentPlayer={props.setCurrentPlayer}
          setField={props.setField}
          setIsDraw={props.setIsDraw}
          setIsGameEnded={props.setIsGameEnded}
        />
      </div>
      <div>
        <Information
          isDraw={props.isDraw}
          isGameEnded={props.isGameEnded}
          currentPlayer={props.currentPlayer}
          //
          setCurrentPlayer={props.setCurrentPlayer}
          setField={props.setField}
          setIsDraw={props.setIsDraw}
          setIsGameEnded={props.setIsGameEnded}
        />
      </div>
    </>
  );
};

GameLavout.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.string // предполагается, что элементы массива - строки
  ),
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  //
  setCurrentPlayer: PropTypes.func.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
};
