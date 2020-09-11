import React from 'react';
import * as ReactDOM from 'react-dom';
import { StaticTabs, DynamicTabs } from '../stories/Tabs.stories';

describe('UncontrolledTabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<StaticTabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('ControlledTabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<DynamicTabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
