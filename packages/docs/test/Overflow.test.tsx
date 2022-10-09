import { render, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { Overflow } from "../examples/Overflow";

test("Overflow", async () => {
  const { getAllByText, getByText } = render(<Overflow />);

  await waitFor(() => expect(getAllByText("My Account")).toHaveLength(2));
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();
});
