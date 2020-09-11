# react-headless-tabs

> Simple and customizable headless tabs built with react hooks

## Getting started

**npm**

```
npm install react-headless-tabs
```

**pnpm**

```
pnpm add react-headless-tabs
```

**yarn**

```
yarn add react-headless-tabs
```

## Example

```jsx
import { Tabs, useTab, useTabPanel } from 'react-headless-tabs';

const Tab = ({ children }) => {
  const { isActive, onClick } = useTab();

  return (
    <li
      onClick={onClick}
      style={{ color: isActive ? 'deeppink' : 'deepskyblue' }}
    >
      {children}
    </li>
  );
};

const TabPanel = ({ children }) => {
  const { isActive } = useTabPanel();

  return <div style={{ display: isActive ? 'block' : 'none' }}>{children}</div>;
};

export const Uncontrolled = () => (
  <Tabs>
    <ul>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </ul>
    <TabPanel>TabPanel 1</TabPanel>
    <TabPanel>TabPanel 2</TabPanel>
    <TabPanel>TabPanel 3</TabPanel>
  </Tabs>
);
```
