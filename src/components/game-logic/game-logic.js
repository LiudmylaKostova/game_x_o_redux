import styles from "./game-logic.module.css";
import Board from "../board/board";
import { chooseWinner } from "../../chooseWinner";
import { showDraw } from "../../chooseWinner";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const GameLogic = ({ board, step, resetGame, click }) => {
  const winner = chooseWinner(board);
  const draw = showDraw(board);

  let status;
  if (winner || draw) {
    status = "Winner is " + (winner || draw);
    console.log(status);
  } else {
    status = "Next player: " + (step % 2 === 0 ? "X" : "0");
    console.log(status);
  }

  return (
    <>
      <div className={styles.box}>
        <p className={styles.descr}>{status}</p>
        <button className={styles.btn} onClick={resetGame}>
          Click me
        </button>
      </div>
      <Board cells={board} click={click} winner={winner} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    board: state.board,
    step: state.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => dispatch(actions.reset()),
    click: (i) => dispatch(actions.handleClick(i)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameLogic);
