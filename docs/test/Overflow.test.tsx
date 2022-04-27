import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Overflow } from "../examples/Overflow";

test("Overflow", () => {
  const { getAllByText, getByText } = render(<Overflow />);

  expect(getAllByText("My Account")).toHaveLength(2);
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();
});
