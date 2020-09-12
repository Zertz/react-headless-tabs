# react-headless-tabs

[![npm version](https://badge.fury.io/js/react-headless-tabs.svg)](https://badge.fury.io/js/react-headless-tabs)

> Simple and flexible headless tabs built with react hooks

👉 [**Check out the examples!**](https://www.chromatic.com/component?appId=5f5ad484e2d7e80022e81be8&name=Tabs)

## Features

- 🚛 Bring your own DOM!
- ✨ Correctly handles dynamic tabs, no more empty tab panels!
- 🤹‍♂️ Well suited for complex use cases, like drag and drop!

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

## API

**Tabs**

> Component where state is maintained.

The most common way to get started is with children:

```jsx
<Tabs>
  <div>...</div>
</Tabs>
```

For advanced use cases, a render function can be used to monitor and control internal state:

```jsx
<Tabs>{({ key, setKey }) => <div>...</div>}</Tabs>
```

**useTab**

> Hook to create a tab.

```jsx
const { isActive, onClick, setKey } = useTab();
```

**useTabPanel**

> Hook to create a tab panel.

```jsx
const { isActive, setKey } = useTabPanel();
```
