import { render, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { Basic } from "../examples/Basic";

test("Basic", async () => {
  const { getAllByText, getByText } = render(<Basic />);

  expect(getAllByText("My Account")).toHaveLength(2);
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();

  await waitFor(() => expect(getAllByText("Company")).toHaveLength(2));
  expect(getAllByText("Team Members")).toHaveLength(2);
  expect(getAllByText("Billing")).toHaveLength(2);
});
