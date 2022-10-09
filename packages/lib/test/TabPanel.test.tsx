import { render } from "@testing-library/react";
import * as React from "react";
import { expect, test } from "vitest";
import { TabPanel } from "../src/TabPanel";

test("default", () => {
  const { getByText } = render(<TabPanel hidden={false}>TabPanel</TabPanel>);

  expect(getByText("TabPanel")).toBeTruthy();
});

test("valid: render/always", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="always">
      TabPanel
    </TabPanel>
  );

  expect(getByText("TabPanel")).toBeTruthy();
});

test("invalid: render/always + unmount/never", () => {
  const { getByText } = render(
    // @ts-expect-error render="always" cannot be used with unmount
    <TabPanel hidden={false} render="always" unmount="never">
      TabPanel
    </TabPanel>
  );

  expect(getByText("TabPanel")).toBeTruthy();
});

test("valid: render/default + unmount/number", () => {
  const { getByText } = render(
    <TabPanel hidden={false} unmount={60}>
      TabPanel
    </TabPanel>
  );

  expect(getByText("TabPanel")).toBeTruthy();
});

test("valid: render/idle + unmount/number", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="idle" unmount={60}>
      TabPanel
    </TabPanel>
  );

  expect(getByText("TabPanel")).toBeTruthy();
});

test("valid: render/lazy + unmount/number", () => {
  const { getByText } = render(
    <TabPanel hidden={false} render="lazy" unmount={60}>
      TabPanel
    </TabPanel>
  );

  expect(getByText("TabPanel")).toBeTruthy();
});
