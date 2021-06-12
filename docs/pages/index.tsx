import Head from 'next/head';
import * as React from 'react';
import { useTabs } from '../../src';
import { Basic } from '../examples/Basic';
import { Browser } from '../examples/Browser';
import { Draggable } from '../examples/Draggable';
import { Dropdown } from '../examples/Dropdown';
import { Example } from '../components/Example';
import { Nested } from '../examples/Nested';
import { Overflow } from '../examples/Overflow';
import { Documentation } from '../components/Documentation';
import { Examples } from '../components/Examples';
import { Overview } from '../components/Overview';

const baseClassName =
  'inline-flex items-center border-b-2 cursor-pointer mr-8 px-2 py-4 font-medium text-sm whitespace-no-wrap focus:outline-none focus:border-gray-300 focus:text-gray-400';
const activeClassName = 'border-gray-50 text-gray-50';
const inactiveClassName =
  'border-transparent hover:border-gray-300 text-gray-200 hover:text-gray-300';

export default function Index() {
  const defaultTab = React.useMemo(() => {
    if (typeof window === 'undefined' || !window.location.hash) {
      return;
    }

    return window.location.hash.substring(1);
  }, []);

  const { activeTab, Tab, TabPanel } = useTabs(
    ['overview', 'documentation', 'examples'],
    defaultTab
  );

  React.useEffect(() => {
    if (!activeTab) {
      return;
    }

    window.location.hash = activeTab;
  }, [activeTab]);

  return (
    <div className="flex flex-col bg-gray-700 min-h-screen text-gray-200 w-full">
      <Head>
        <title>react-headless-tabs</title>
      </Head>
      <main className="max-w-3xl mx-auto p-2 w-full">
        <div className="pb-8 text-center">
          <h1 className="font-extrabold mb-2 text-7xl text-center">
            react-headless-tabs
          </h1>
          <a
            className="font-light hover:text-gray-300 text-xl transition-colors underline"
            href="https://github.com/Zertz/react-headless-tabs"
          >
            Contribute on GitHub
          </a>
        </div>
        <nav className="flex border-b border-gray-400">
          <Tab tabKey="overview">
            {({ isActive, onClick }) => (
              <button
                className={`${baseClassName} ${
                  isActive ? activeClassName : inactiveClassName
                }`}
                onClick={onClick}
              >
                Overview
              </button>
            )}
          </Tab>
          <Tab tabKey="documentation">
            {({ isActive, onClick }) => (
              <button
                className={`${baseClassName} ${
                  isActive ? activeClassName : inactiveClassName
                }`}
                onClick={onClick}
              >
                Documentation
              </button>
            )}
          </Tab>
          <Tab tabKey="examples">
            {({ isActive, onClick }) => (
              <button
                className={`${baseClassName} ${
                  isActive ? activeClassName : inactiveClassName
                }`}
                onClick={onClick}
              >
                Examples
              </button>
            )}
          </Tab>
        </nav>
        <TabPanel tabKey="overview">
          {({ isActive }) => <Overview isActive={isActive} />}
        </TabPanel>
        <TabPanel tabKey="documentation">
          {({ isActive }) => <Documentation isActive={isActive} />}
        </TabPanel>
        <TabPanel tabKey="examples">
          {({ isActive }) => <Examples isActive={isActive} />}
        </TabPanel>
      </main>
    </div>
  );
}
