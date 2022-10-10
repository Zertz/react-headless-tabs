import { render, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { Overflow } from "../examples/Overflow";

test("Overflow", async () => {
  const { getAllByText, getByText } = render(<Overflow />);

  expect(getAllByText("My Account")).toHaveLength(2);
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();

  await waitFor(() => expect(getAllByText("Company")).toHaveLength(2));
  expect(getAllByText("Team Members")).toHaveLength(2);
  expect(getAllByText("Billing")).toHaveLength(2);
});
