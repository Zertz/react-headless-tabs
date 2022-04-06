import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Dropdown } from "../examples/Dropdown";

test("Dropdown", () => {
  const { getByText } = render(<Dropdown />);

  expect(getByText("My Account")).toBeTruthy();
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();
});
