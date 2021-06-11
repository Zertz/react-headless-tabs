import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Basic } from '../docs/components/Basic';
import { Browser } from '../docs/components/Browser';
import { Dropdown } from '../docs/components/Dropdown';
import { Nested } from '../docs/components/Nested';
import { Overflow } from '../docs/components/Overflow';

describe('Basic', () => {
  it('renders without crashing', () => {
    const { getAllByText, getByText } = render(<Basic />);

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
      <Browser />
    );

    expect(getAllByText(/^Tab (1|2|3)$/)).toHaveLength(3);
    expect(getAllByTitle('Close tab')).toHaveLength(3);

    const [closeTab] = getAllByTitle('Close tab');

    fireEvent.click(closeTab);

    expect(getAllByText(/^Tab (2|3)$/)).toHaveLength(2);

    const newTab = getByTitle('New tab');

    fireEvent.click(newTab);

    expect(getAllByText(/^Tab (2|3|4)$/)).toHaveLength(3);

    fireEvent.click(getByText('Tab 4'));

    expect(getAllByText('Tab 4')).toHaveLength(1);
  });
});

describe('Dropdown', () => {
  it('renders without crashing', () => {
    render(<Dropdown />);
  });
});

describe('Nested', () => {
  it('renders without crashing', () => {
    render(<Nested />);
  });
});

describe('Overflow', () => {
  it('renders without crashing', () => {
    render(<Overflow />);
  });
});
