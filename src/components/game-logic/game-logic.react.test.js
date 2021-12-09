import GameLogic from "./game-logic";
import { shallow } from "enzyme";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Smart components

/* check if GameLogic renders without an error: */

const mockStore = configureStore();

const initialState = {
  board: Array(9).fill(""),
  step: 0,
  winner: undefined,
  draw: undefined,
};
const store = mockStore(initialState);

it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <GameLogic />
    </Provider>
  );
});
