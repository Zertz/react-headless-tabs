import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Draggable } from "../examples/Draggable";

test.skip("Draggable", () => {
  const { getAllByText, getByText } = render(<Draggable />);

  expect(getAllByText("My Account")).toHaveLength(2);
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();
});
