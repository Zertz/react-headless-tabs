import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Tabs from '../stories/Tabs.stories';

describe('Basic', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Tabs.Basic />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Browser', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Tabs.Browser />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Draggable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Tabs.Draggable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Overflow', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Tabs.Overflow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
