import gameReducer from "./reducer";
import { handleClick, reset } from "./actions";

const initialState = {
  board: Array(9).fill(""),
  step: 0,
  winner: undefined,
  draw: undefined,
};

describe("GameReducer", () => {
  it("should have an initial state", () => {
    // we make one action, INIT, empty object or something not in the game as an action
    const action = { type: "notTheGameType" };
    //this should produce the inital state since the type is not one that we handle in our reducer
    const result = gameReducer(undefined, action);
    expect(result).toEqual(initialState);
  });

  describe("when given a reset action", () => {
    const action = reset();
    const state = gameReducer(initialState, action);

    it("returns a state object", () => {
      expect(state).toBeInstanceOf(Object);
    });

    it("returns an array of cells representing a new board", () => {
      expect(state).toHaveProperty("board");
      const { board } = state;
      expect(board).toBeInstanceOf(Array);
      expect(board).toHaveLength(9);
    });
  });
});

describe("when given a handleClick action", () => {
  it("set the indicated cell to x", () => {
    const index = 4;
    const action = handleClick(index);
    const state = gameReducer(initialState, action);
    expect(state.board[index]).toEqual("x");
  });
  it("set the indicated cell to 0", () => {
    const index = 4;
    const state = { ...initialState, step: 1 };
    const action = handleClick(index);
    const newState = gameReducer(state, action);
    expect(newState.board[index]).toEqual("0");
  });

  it("will not change a cell that is already set", () => {
    let board = initialState.board.slice();
    const index = 4;
    board[index] = "x";
    const action = handleClick(index);
    const state = { ...initialState, board };
    const newState = gameReducer(state, action);
    expect(newState.board[index]).toEqual("x");
  });

  it("will not change a cell that is already set", () => {
    let board = initialState.board.slice();
    const index = 4;
    board[index] = "0";
    const action = handleClick(index);
    const state = { ...initialState, board, step: 1 };
    const newState = gameReducer(state, action);
    expect(newState.board[index]).toEqual("0");
  });
});

it("should win a game", () => {
  const state = {
    board: ["x", "x", "x", 0, "", 0, "", "", ""],
    step: 4,
    winner: undefined,
    draw: undefined,
  };

  const expectedState = {
    board: ["x", "x", "x", 0, "", 0, "", "", ""],
    step: 5,
    winner: "X",
    draw: undefined,
  };

  const index = 2;
  const action = handleClick(index);
  const result = gameReducer(state, action);
  expect(result).toEqual(expectedState);
});






// it("will not change a cell if there is already a winner", () => {
//   const state = {
//     board: ["x", "x", "x", 0, "", 0, "", "", ""],
//     step: 4,
//     winner: undefined,
//     draw: undefined,
//   };

//   const index = 4;
//   const action = handleClick(index);
//   const newState = { ...state, step: 5, winner: "X" };
//   const result = gameReducer(newState, action);

//   expect(result.board[index]).toBe("");
// });

// it("will not change a cell if there is already a winner", () => {
//   let newBoard = initialState.board.slice();
//   newBoard[0] = "x";
//   newBoard[1] = "x";
//   newBoard[2] = "x";
//   const index = 4;
//   const action = handleClick(index);
//   const state = { ...initialState, board: newBoard, step: 1, winner: "X" };
//   const newState = gameReducer(state, action);
//   expect(newState.board[index]).toBe("");
// });
