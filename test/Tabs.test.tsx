import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Basic } from '../docs/examples/Basic';
import { Browser } from '../docs/examples/Browser';
import { Draggable } from '../docs/examples/Draggable';
import { Dropdown } from '../docs/examples/Dropdown';
import { Nested } from '../docs/examples/Nested';
import { Overflow } from '../docs/examples/Overflow';

describe('Basic', () => {
  it('renders without crashing', () => {
    const { getAllByText, getByText } = render(<Basic />);

    expect(getAllByText('My Account')).toHaveLength(2);
    expect(getByText('Company')).toBeTruthy();
    expect(getByText('Team Members')).toBeTruthy();
    expect(getByText('Billing')).toBeTruthy();
  });
});

describe('Browser', () => {
  it('renders without crashing', () => {
    const { getAllByText, getAllByTitle, getByText, getByTitle } = render(
      <Browser />
    );

    expect(getAllByText(/^Tab (1|2|3)$/)).toHaveLength(3);
    expect(getAllByTitle('Close tab')).toHaveLength(3);

    expect(getByText('Tab 1')).toHaveAttribute('aria-selected', 'true');
    expect(getByText('Panel 1')).toBeTruthy();

    const [closeTab1] = getAllByTitle('Close tab');
    fireEvent.click(closeTab1);

    expect(getAllByText(/^Tab (2|3)$/)).toHaveLength(2);

    const newTab = getByTitle('New tab');
    fireEvent.click(newTab);

    expect(getAllByText(/^Tab (2|3|4)$/)).toHaveLength(3);

    fireEvent.click(getByText('Tab 4'));

    expect(getByText('Tab 4')).toHaveAttribute('aria-selected', 'true');
    expect(getByText('Panel 4')).toBeTruthy();

    const [, , closeTab4] = getAllByTitle('Close tab');
    fireEvent.click(closeTab4);

    expect(getByText('Tab 3')).toHaveAttribute('aria-selected', 'true');
    expect(getByText('Panel 3')).toBeTruthy();
  });
});

describe('Draggable', () => {
  it('renders without crashing', () => {
    const { getAllByText, getByText } = render(<Draggable />);

    expect(getAllByText('My Account')).toHaveLength(2);
    expect(getByText('Company')).toBeTruthy();
    expect(getByText('Team Members')).toBeTruthy();
    expect(getByText('Billing')).toBeTruthy();
  });
});

describe('Dropdown', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Dropdown />);

    expect(getByText('My Account')).toBeTruthy();
    expect(getByText('Company')).toBeTruthy();
    expect(getByText('Team Members')).toBeTruthy();
    expect(getByText('Billing')).toBeTruthy();
  });
});

describe('Nested', () => {
  it('renders without crashing', () => {
    const { getAllByText, getByText } = render(<Nested />);

    expect(getAllByText('My Account')).toHaveLength(2);
    expect(getByText('Company')).toBeTruthy();

    expect(getAllByText('Profile')).toHaveLength(2);
    expect(getByText('Settings')).toBeTruthy();
  });
});

describe('Overflow', () => {
  it('renders without crashing', () => {
    const { getAllByText, getByText } = render(<Overflow />);

    expect(getAllByText('My Account')).toHaveLength(2);
    expect(getByText('Company')).toBeTruthy();
    expect(getByText('Team Members')).toBeTruthy();
    expect(getByText('Billing')).toBeTruthy();
  });
});
