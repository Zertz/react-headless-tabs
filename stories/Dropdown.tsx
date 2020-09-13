import React, { useEffect } from 'react';
import { Tabs, useTab } from '../src';
import { TabPanel } from './TabPanel';

export const Dropdown = () => (
  <>
    <Tabs>
      {({ key, setKey }) => (
        <>
          <nav className="flex border-b border-gray-300 relative">
            <Tab>My Account</Tab>
            <Tab>Company</Tab>
            <Tab>Team Members</Tab>
            <Tab>Billing</Tab>
          </nav>
          <div
            className="absolute left-0 ml-4 w-full border border-t-0 border-gray-300 max-w-lg bg-gray-100 transition-transform origin-top duration-100 ease-in-out"
            style={{ transform: key ? 'scaleY(1)' : 'scaleY(0)' }}
          >
            <TabPanel>My Account</TabPanel>
            <TabPanel>Company</TabPanel>
            <TabPanel>Team Members</TabPanel>
            <TabPanel>Billing</TabPanel>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-600"
              onClick={() => setKey(undefined)}
            >
              Close
            </button>
          </div>
        </>
      )}
    </Tabs>
    <div className="overflow-hidden p-4 prose prose-lg text-gray-600 mx-auto">
      <p>Amazing content.</p>
      <p className="mt-1">Awesome content.</p>
      <p className="mt-1">Incredible content.</p>
    </div>
  </>
);

const Tab = ({ children }: { children: React.ReactNode }) => {
  const { isActive, onClick, setKey } = useTab();

  useEffect(() => {
    setKey(undefined);
  }, []);

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
