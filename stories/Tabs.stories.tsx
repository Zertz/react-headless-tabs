import React, { useState } from 'react';
import { Tabs } from '../src';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import '../tailwind.css';

export default {
  title: 'Tabs',
};

export const StaticTabs = () => (
  <Tabs>
    <ul className="flex items-center overflow-hidden rounded-t-lg bg-indigo-400">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </ul>
    <div className="border border-indigo-600 overflow-hidden rounded-b-lg">
      <TabPanel>TabPanel 1</TabPanel>
      <TabPanel>TabPanel 2</TabPanel>
      <TabPanel>TabPanel 3</TabPanel>
    </div>
  </Tabs>
);

let tabCounter = 4;

export const DynamicTabs = () => {
  const [tabs, setTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3']);

  const handleCloseTab = (tab: string) => () => {
    setTabs(tabs => tabs.filter(t => t !== tab));
  };

  const handleNewTab = () => {
    setTabs(tabs => tabs.concat(`Tab ${tabCounter++}`));
  };

  return (
    <Tabs>
      {({ key, setKey }) => {
        const tabIndex = tabs.indexOf(key as string);

        return (
          <div className="flex flex-col h-full">
            <ul className="flex items-center overflow-hidden rounded-t-lg bg-indigo-400">
              {tabs.map(tab => (
                <Tab key={tab} tabKey={tab} onClose={handleCloseTab(tab)}>
                  {tab}
                </Tab>
              ))}
              <li className="mx-2">
                <button
                  className="p-1 rounded-full text-sm text-white bg-indigo-400 focus:outline-none focus:shadow-outline focus:bg-indigo-700 hover:bg-indigo-700 transition duration-300 ease-in-out"
                  onClick={handleNewTab}
                  title="New tab"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
            <div className="border border-indigo-600 overflow-hidden rounded-b-lg">
              {tabs.map(tab => (
                <TabPanel key={tab} tabKey={tab}>
                  {tab}
                </TabPanel>
              ))}
            </div>
            <div className="flex">
              <button
                className="px-4 py-2 mt-2 mr-2 rounded text-white bg-purple-600 focus:bg-purple-500 hover:bg-purple-500 transition duration-300 ease-in-out"
                disabled={!tabs[tabIndex - 1]}
                onClick={() => setKey(tabs[tabIndex - 1])}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 mt-2 rounded text-white bg-purple-600 focus:bg-purple-500 hover:bg-purple-500 transition duration-300 ease-in-out"
                disabled={!tabs[tabIndex + 1]}
                onClick={() => setKey(tabs[tabIndex + 1])}
              >
                Next
              </button>
            </div>
          </div>
        );
      }}
    </Tabs>
  );
};
