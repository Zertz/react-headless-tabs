import * as React from 'react';
import { Tabs, useTab } from '../src';
import { TabPanel } from './TabPanel';

export const Overflow = () => (
  <Tabs>
    {({ setKey }) => (
      <>
        <nav className="flex border-b border-gray-300">
          <Tab>My Account</Tab>
          <Tab>Company</Tab>
          <select
            className="form-select pl-2 py-2 pr-4 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            onChange={({ target: { value } }) => setKey(Number(value))}
            value={0}
          >
            <option value={0}>...</option>
            <Option value={3}>Team Members</Option>
            <Option value={4}>Billing</Option>
          </select>
        </nav>
        <TabPanel>My Account</TabPanel>
        <TabPanel>Company</TabPanel>
        <TabPanel>Team Members</TabPanel>
        <TabPanel>Billing</TabPanel>
      </>
    )}
  </Tabs>
);

const Tab = ({ children }: { children: React.ReactNode }) => {
  const { isActive, onClick } = useTab();

  return (
    <button
      className={`mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-no-wrap ${
        isActive
          ? 'border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
          : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Option = (
  props: React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
) => {
  useTab();

  return <option {...props} />;
};
