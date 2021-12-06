import Cell from "./cell";
import { shallow } from "enzyme";

/* check if Cell renders without an error: */

it("renders without crashing", () => {
  shallow(<Cell />);
});
