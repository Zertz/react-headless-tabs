import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Browser } from "../examples/Browser";

test("Browser", () => {
  const { getAllByText, getAllByTitle, getByText, getByTitle } = render(
    <Browser />
  );

  expect(getAllByText(/^Tab (1|2|3)$/)).toHaveLength(3);
  expect(getAllByTitle("Close tab")).toHaveLength(3);

  expect(getByText("Tab 1")).toHaveAttribute("aria-selected", "true");
  expect(getByText("Panel 1")).toBeTruthy();

  const [closeTab1] = getAllByTitle("Close tab");
  fireEvent.click(closeTab1);

  expect(getAllByText(/^Tab (2|3)$/)).toHaveLength(2);

  const newTab = getByTitle("New tab");
  fireEvent.click(newTab);

  expect(getAllByText(/^Tab (2|3|4)$/)).toHaveLength(3);

  fireEvent.click(getByText("Tab 4"));

  expect(getByText("Tab 4")).toHaveAttribute("aria-selected", "true");
  expect(getByText("Panel 4")).toBeTruthy();

  const [, , closeTab4] = getAllByTitle("Close tab");
  fireEvent.click(closeTab4);

  expect(getByText("Tab 3")).toHaveAttribute("aria-selected", "true");
  expect(getByText("Panel 3")).toBeTruthy();
});
