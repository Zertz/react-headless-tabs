import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { expect, test } from "vitest";
import { Overflow } from "../examples/Overflow";

test("Overflow", () => {
  const { getAllByText, getByText } = render(<Overflow />);

  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();

  act(() => {
    expect(getAllByText("My Account")).toHaveLength(2);
  });
});
