import { chooseWinner } from "../chooseWinner";
import { showDraw } from "../chooseWinner";

const initialState = {
  board: Array(9).fill(""),
  step: 0,
  winner: undefined,
  draw: undefined,
};

function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "handleClickOnCell":
      const boardArray = [...state.board];
      boardArray[payload] = state.step % 2 === 0 ? "x" : "0";

      return {
        step: state.step + 1,
        board: boardArray,
        winner: chooseWinner(boardArray),
        draw: showDraw(boardArray),
      };

    case "resetGame":
      return initialState;

    default:
      return state;
  }
}

export default gameReducer;
