import * as React from 'react';
import { Tabs, useTab } from '../src';
import { TabPanel } from './TabPanel';

export const Nested = () => (
  <Tabs>
    <nav className="flex border-b border-gray-300">
      <Tab>My Account</Tab>
      <Tab>Company</Tab>
    </nav>
    <TabPanel>
      My Account
      <Tabs>
        <nav className="flex border-b border-gray-300">
          <Tab>Profile</Tab>
          <Tab>Settings</Tab>
        </nav>
        <TabPanel>Profile</TabPanel>
        <TabPanel>Settings</TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      Company
      <Tabs>
        <nav className="flex border-b border-gray-300">
          <Tab>Team Members</Tab>
          <Tab>Billing</Tab>
        </nav>
        <TabPanel>Team Members</TabPanel>
        <TabPanel>Billing</TabPanel>
      </Tabs>
    </TabPanel>
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
