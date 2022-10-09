import { render, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { Nested } from "../examples/Nested";

test("Nested", async () => {
  const { getAllByText, getByText } = render(<Nested />);

  await waitFor(() => expect(getAllByText("My Account")).toHaveLength(2));
  expect(getByText("Company")).toBeTruthy();

  await waitFor(() => expect(getAllByText("Profile")).toHaveLength(2));
  expect(getByText("Settings")).toBeTruthy();
});
