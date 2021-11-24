const initialState = {
  step: 0,
  board: Array(9).fill(""),
};

function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "handleClickOnCell":
      const boardArray = [...state.board];
      boardArray[payload] = state.step % 2 === 0 ? "x" : "0";

      return {
        step: state.step + 1,
        board: boardArray,
      };

    case "resetGame":
      return initialState;

    default:
      return state;
  }
}

export default gameReducer;
