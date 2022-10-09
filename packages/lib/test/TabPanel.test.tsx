import { render } from "@testing-library/react";
import * as React from "react";
import { expect, test } from "vitest";
import { TabPanel } from "../src/TabPanel";

test("default", () => {
  const { getByText } = render(<TabPanel hidden={false}>Hello</TabPanel>);

  expect(getByText("Hello")).toBeTruthy();
});

test("valid: render/always", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="always">
      Hello
    </TabPanel>
  );

  expect(getByText("Hello")).toBeTruthy();
});

test("invalid: render/always + unmount/never", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="always" unmount="never">
      Hello
    </TabPanel>
  );

  expect(getByText("Hello")).toBeTruthy();
});

test("valid: render/default + unmount/number", () => {
  const { getByText } = render(
    <TabPanel hidden={false} unmount={60}>
      Hello
    </TabPanel>
  );

  expect(getByText("Hello")).toBeTruthy();
});

test("valid: render/idle + unmount/number", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="idle" unmount={60}>
      Hello
    </TabPanel>
  );

  expect(getByText("Hello")).toBeTruthy();
});

test("valid: render/lazy + unmount/number", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="lazy" unmount={60}>
      Hello
    </TabPanel>
  );

  expect(getByText("Hello")).toBeTruthy();
});
