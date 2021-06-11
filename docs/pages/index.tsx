import Head from 'next/head';
import * as React from 'react';
import { useTabs } from '../../src';
import { Basic } from '../components/Basic';
import { Browser } from '../components/Browser';
import { Dropdown } from '../components/Dropdown';
import { Example } from '../components/Example';
import { Nested } from '../components/Nested';
import { Overflow } from '../components/Overflow';

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

  const { activeTab, Tab, TabPanel } = useTabs({
    defaultTab,
    tabs: ['overview', 'documentation', 'examples'],
  });

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
        <p className="pb-8 text-center">
          <h1 className="font-extrabold mb-2 text-7xl text-center">
            react-headless-tabs
          </h1>
          <a
            className="font-light hover:text-gray-300 text-xl transition-colors underline"
            href="https://github.com/Zertz/react-headless-tabs"
          >
            Contribute on GitHub
          </a>
        </p>
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
        <TabPanel className="py-6 space-y-12" tabKey="overview">
          <div>
            <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
              <h2 className="font-bold text-4xl text-center">Features</h2>
            </div>
            <ul className="space-y-2">
              <li>🌱 Under 1KB minified and gzipped</li>
              <li>🚛 Bring your own DOM!</li>
              <li>
                ✨ Correctly handles dynamic tabs, no more empty tab panels!
              </li>
              <li>🤹‍♂️ Well suited for complex use cases, like drag and drop!</li>
            </ul>
          </div>
          <div>
            <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
              <h2 className="font-bold text-4xl text-center">
                Getting started
              </h2>
            </div>
            <pre className="bg-gray-800 p-2 rounded">
              <code>npm install react-headless-tabs</code>
            </pre>
          </div>
        </TabPanel>
        <TabPanel className="py-6 space-y-12" tabKey="documentation">
          <div>
            <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
              <h2 className="font-bold text-4xl text-center">API</h2>
            </div>
            <pre className="bg-gray-800 p-2 rounded">
              <code>{`const {
  Tab,
  TabPanel,
  activeIndex,
  activeTab,
  setActiveTab,
} = useTabs<K extends string>({
  tabs: K[];
  defaultTab?: K | null;
})`}</code>
            </pre>
          </div>
          <div className="divide-y divide-solid divide-gray-400 space-y-8">
            <div className="space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>tabs</code>
              </pre>
              <p>
                [Required] An array of strings representing the list of tabs.
              </p>
            </div>
            <div className="pt-8 space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>defaultTab</code>
              </pre>
              <p>
                [Optional] The tab that should initially be selected{' '}
                <em>(defaults to the first one)</em>
              </p>
            </div>
            <div className="pt-8 space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>Tab</code>
              </pre>
              <p>
                [Recommended] Renderless component that returns a render
                function with <code>isActive</code> and <code>onClick</code>
              </p>
            </div>
            <div className="pt-8 space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>TabPanel</code>
              </pre>
            </div>
            <div className="pt-8 space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>activeIndex</code>
              </pre>
            </div>
            <div className="pt-8 space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>activeTab</code>
              </pre>
            </div>
            <div className="pt-8 space-y-2">
              <pre className="bg-gray-800 p-2 rounded">
                <code>setActiveTab</code>
              </pre>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="py-6 space-y-12" tabKey="examples">
          <Example
            title="Basic"
            url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/components/Basic.tsx"
          >
            <Basic />
          </Example>
          <Example
            title="Browser"
            url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/components/Browser.tsx"
          >
            <Browser />
          </Example>
          <Example
            title="Dropdown"
            url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/components/Dropdown.tsx"
          >
            <Dropdown />
          </Example>
          <Example
            title="Nested"
            url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/components/Nested.tsx"
          >
            <Nested />
          </Example>
          <Example
            title="Overflow"
            url="https://github.com/Zertz/react-headless-tabs/blob/main/docs/components/Overflow.tsx"
          >
            <Overflow />
          </Example>
        </TabPanel>
      </main>
    </div>
  );
}
