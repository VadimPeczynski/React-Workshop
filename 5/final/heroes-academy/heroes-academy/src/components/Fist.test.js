import React from "react";
import Fist from "./Fist";
import renderer from "react-test-renderer";

it("should display 5 stars if strength is 5", () => {
  const tree = renderer.create(<Fist strength={5} />);

  expect(tree).toMatchSnapshot();
});
