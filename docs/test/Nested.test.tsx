import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Nested } from "../examples/Nested";

test("Nested", () => {
  const { getAllByText, getByText } = render(<Nested />);

  expect(getAllByText("My Account")).toHaveLength(2);
  expect(getByText("Company")).toBeTruthy();

  expect(getAllByText("Profile")).toHaveLength(2);
  expect(getByText("Settings")).toBeTruthy();
});
