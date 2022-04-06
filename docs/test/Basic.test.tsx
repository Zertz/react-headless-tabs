import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Basic } from "../examples/Basic";

test("Basic", () => {
  const { getAllByText, getByText } = render(<Basic />);

  expect(getAllByText("My Account")).toHaveLength(2);
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();
});
