import React, { useState } from 'react';
import { Tabs, useTab } from '../src';
import { TabPanel } from './TabPanel';

let tabCounter = 4;

export const Browser = () => {
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
          <>
            <ul className="flex items-center border-b border-gray-300">
              {tabs.map(tab => (
                <Tab key={tab} tabKey={tab} onClose={handleCloseTab(tab)}>
                  {tab}
                </Tab>
              ))}
              <span className="py-2 inline-flex items-center">
                <button
                  className="p-1 rounded-full text-sm text-gray-500 focus:outline-none focus:shadow-outline focus:bg-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
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
              </span>
            </ul>
            {tabs.map(tab => (
              <TabPanel key={tab} tabKey={tab}>
                {tab}
              </TabPanel>
            ))}
            <span className="relative z-0 inline-flex shadow-sm mt-4">
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
                disabled={!tabs[tabIndex - 1]}
                onClick={() => setKey(tabs[tabIndex - 1])}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
                disabled={!tabs[tabIndex + 1]}
                onClick={() => setKey(tabs[tabIndex + 1])}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </>
        );
      }}
    </Tabs>
  );
};

const Tab = ({
  children,
  onClose,
  tabKey,
}: {
  children: React.ReactNode;
  onClose: () => void;
  tabKey: string;
}) => {
  const { isActive, onClick } = useTab(tabKey);

  return (
    <li className="relative">
      <button
        className={`mr-8 group inline-flex items-center py-4 pl-2 pr-8 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-no-wrap ${
          isActive
            ? 'border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
            : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300'
        }`}
        onClick={onClick}
      >
        {children}
      </button>
      <span className="flex items-center absolute top-0 right-0 bottom-0">
        <button
          className="-ml-12 p-px rounded-full text-sm focus:outline-none focus:shadow-outline focus:bg-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          onClick={onClose}
          title="Close tab"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </span>
    </li>
  );
};
