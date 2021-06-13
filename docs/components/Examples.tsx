import * as React from 'react';
import { Example } from '../components/Example';
import { Basic } from '../examples/Basic';
import { Browser } from '../examples/Browser';
import { Draggable } from '../examples/Draggable';
import { Dropdown } from '../examples/Dropdown';
import { Nested } from '../examples/Nested';
import { Overflow } from '../examples/Overflow';

export function Examples() {
  return (
    <>
      <Example
        title="Basic"
        url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/examples/Basic.tsx"
      >
        <Basic />
      </Example>
      <Example
        title="Browser"
        url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/examples/Browser.tsx"
      >
        <Browser />
      </Example>
      <Example
        title="Draggable"
        url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/examples/Draggable.tsx"
      >
        <Draggable />
      </Example>
      <Example
        title="Dropdown"
        url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/examples/Dropdown.tsx"
      >
        <Dropdown />
      </Example>
      <Example
        title="Nested"
        url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/examples/Nested.tsx"
      >
        <Nested />
      </Example>
      <Example
        title="Overflow"
        url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/examples/Overflow.tsx"
      >
        <Overflow />
      </Example>
    </>
  );
}
