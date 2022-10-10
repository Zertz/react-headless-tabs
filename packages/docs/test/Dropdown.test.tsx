import { render, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { Dropdown } from "../examples/Dropdown";

test("Dropdown", async () => {
  const { getAllByText, getByText } = render(<Dropdown />);

  expect(getByText("My Account")).toBeTruthy();
  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Team Members")).toBeTruthy();
  expect(getByText("Billing")).toBeTruthy();

  await waitFor(() => expect(getAllByText("My Account")).toHaveLength(2));
  expect(getAllByText("Company")).toHaveLength(2);
  expect(getAllByText("Team Members")).toHaveLength(2);
  expect(getAllByText("Billing")).toHaveLength(2);
});
