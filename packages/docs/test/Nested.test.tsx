import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { expect, test } from "vitest";
import { Nested } from "../examples/Nested";

test("Nested", () => {
  const { getAllByText, getByText } = render(<Nested />);

  expect(getByText("Company")).toBeTruthy();
  expect(getByText("Settings")).toBeTruthy();

  act(() => {
    expect(getAllByText("My Account")).toHaveLength(2);
    expect(getAllByText("Profile")).toHaveLength(2);
  });
});
