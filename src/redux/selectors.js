const getBoardSelector = (state) => state.board;
const getStepSelector = (state) => state.step;
const winnerSelector = (state) => state.winner;
const drawSelector = (state) => state.draw;

export { getBoardSelector, getStepSelector, winnerSelector, drawSelector };
