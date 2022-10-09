import { render, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { Basic } from "../examples/Basic";

test("Basic", async () => {
  const { getAllByText, getByText } = render(<Basic />);

  await waitFor(() => expect(getAllByText("My Account")).toHaveLength(2));
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();
});
