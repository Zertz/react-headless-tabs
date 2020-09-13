import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import * as Tabs from '../stories/Tabs.stories';

describe('Basic', () => {
  it('renders without crashing', () => {
    const { getAllByText, getByText } = render(<Tabs.Basic />);

    expect(getAllByText('My Account')).toHaveLength(2);
    expect(getByText('Company')).toBeTruthy();
    expect(getByText('Team Members')).toBeTruthy();

    const billing = getByText('Billing');

    fireEvent.click(billing);

    expect(getAllByText('Billing')).toHaveLength(2);
  });
});

describe('Browser', () => {
  it('renders without crashing', () => {
    const { getAllByText, getAllByTitle, getByText, getByTitle } = render(
      <Tabs.Browser />
    );

    expect(getAllByText(/^Tab (1|2|3)$/)).toHaveLength(4);
    expect(getAllByTitle('Close tab')).toHaveLength(3);

    const [closeTab] = getAllByTitle('Close tab');

    fireEvent.click(closeTab);

    expect(getAllByText(/^Tab (2|3)$/)).toHaveLength(3);

    const newTab = getByTitle('New tab');

    fireEvent.click(newTab);

    expect(getAllByText(/^Tab (2|3|4)$/)).toHaveLength(4);

    fireEvent.click(getByText('Tab 4'));

    expect(getAllByText('Tab 4')).toHaveLength(2);
  });
});

describe('Draggable', () => {
  it('renders without crashing', () => {
    render(<Tabs.Draggable />);
  });
});

describe('Dropdown', () => {
  it('renders without crashing', () => {
    render(<Tabs.Dropdown />);
  });
});

describe('Nested', () => {
  it('renders without crashing', () => {
    render(<Tabs.Nested />);
  });
});

describe('Overflow', () => {
  it('renders without crashing', () => {
    render(<Tabs.Overflow />);
  });
});
