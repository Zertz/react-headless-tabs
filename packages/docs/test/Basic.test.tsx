import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { expect, test } from "vitest";
import { Basic } from "../examples/Basic";

test("Basic", () => {
  const { getAllByText, getByText } = render(<Basic />);

  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();

  act(() => {
    expect(getAllByText("My Account")).toHaveLength(2);
  });
});
