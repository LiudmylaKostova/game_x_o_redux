import GameLogic from "./game-logic";
import { shallow, mount } from "enzyme";

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
  // shallow(<GameLogic store={store} />);

  shallow(
    <Provider store={store}>
      <GameLogic />
    </Provider>
  );
});

/* check if game status renders correctly */

// it("renders game status correctly", () => {
// const wrapper = mount(<GameLogic store={store} />);

// const wrapper = shallow(<GameLogic store={store} />);
// expect(wrapper.find("p.descr").node.props.children).toEqual("Next player: X");

// const wrapper = shallow(<GameLogic store={store} />);
// expect(wrapper.getElement("p")).node.props.children.toEqual("Next player: X");

// const wrapper = shallow(<GameLogic store={store} />).dive();
// expect(wrapper.find("p.descr").text()).toEqual("Next player: X");
// const firstPlayer = wrapper.find("div.box").children().first().text();
// const firstPlayer = wrapper.find("p.descr").text();
// expect(firstPlayer).toEqual("Next player: X");

// wrapper.find("button.cell").first().simulate("click");
// const secondPlayer = wrapper.find("div.box").children().first().text();
// const secondPlayer = wrapper.find("p.descr").text();
// expect(secondPlayer).toEqual("Next player: 0");
/* check the winner when the game is over
  checking the winning combination [0 3 6]
  0 was made at first click on the first cell at index 0 (turn1) */
// const turn2 = wrapper.find("button.cell").at(1);
// turn2.simulate("click");
// const turn3 = wrapper.find("button.cell").at(3);
// turn3.simulate("click");
// const turn4 = wrapper.find("button.cell").at(2);
// turn4.simulate("click");
// const turn5 = wrapper.find("button.cell").at(6);
// turn5.simulate("click");
// const winner = wrapper.find("p.descr").text();
// expect(winner).toEqual("Winner is X");
// });
