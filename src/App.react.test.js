import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import GameLogic from "./components/game-logic/game-logic";

it("Should render an App component with GameLogic component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<GameLogic />)).toBe(true);
});

it("Should render an App component with GameLogic component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(GameLogic).length).toBe(1);
});
