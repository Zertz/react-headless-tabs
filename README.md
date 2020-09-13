# react-headless-tabs

[![npm](https://badgen.net/npm/v/react-headless-tabs)](https://www.npmjs.com/package/react-headless-tabs) [![bundlephobia](https://badgen.net/bundlephobia/minzip/react-headless-tabs)](https://bundlephobia.com/result?p=react-headless-tabs)

> Headless, simple, and highly flexible tab-like primitives built with react hooks

👉 [**Check out the interactive examples!**](https://www.chromatic.com/component?appId=5f5ad484e2d7e80022e81be8&name=Tabs)

- [Basic tabs](stories/Basic.tsx)
- [Browser-like tabs](stories/Browser.tsx)
- [Draggable, vertical tabs](stories/Draggable.tsx)
- [Dropdown menu](stories/Dropdown.tsx)
- [Nested tabs](stories/Nested.tsx)
- [Static tabs with overflow menu](stories/Overflow.tsx)

## Features

- 🌱 Under 1KB minified and gzipped
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
