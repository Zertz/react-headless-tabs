import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Controlled as ControlledTabs,
  Uncontrolled as UncontrolledTabs,
} from '../stories/Tabs.stories';

describe('UncontrolledTabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<UncontrolledTabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('ControlledTabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ControlledTabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
