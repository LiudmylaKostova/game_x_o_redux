import React from "react";
import styles from "./game-logic.module.css";
import Board from "../board/board";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

export const GameLogic = ({ ...props }) => {
  let status;

  if (props.winner || props.draw) {
    status = "Winner is " + (props.winner || props.draw);
    console.log(status);
    
  } else {
    status = "Next player: " + (props.step % 2 === 0 ? "X" : "0");
    console.log(props.step);
    console.log(status);
  }

  return (
    <>
      <div className={styles.box}>
        <p className={styles.descr}>{status}</p>
        <button className={styles.btn} onClick={props.resetGame}>
          Click me
        </button>
      </div>
      <Board cells={props.board} click={props.click} winner={props.winner} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    board: state.board,
    step: state.step,
    winner: state.winner,
    draw: state.draw,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => dispatch(actions.reset()),
    click: (i) => dispatch(actions.handleClick(i)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameLogic);
