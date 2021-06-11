import Head from 'next/head';
import { useTabs } from '../../src';
import { Basic } from '../components/Basic';
import { Browser } from '../components/Browser';
import { Dropdown } from '../components/Dropdown';
import { Nested } from '../components/Nested';
import { Overflow } from '../components/Overflow';

const baseClassName =
  'inline-flex items-center border-b-2 cursor-pointer mr-8 px-2 py-4 font-medium text-sm whitespace-no-wrap focus:outline-none focus:border-gray-300 focus:text-gray-300';
const activeClassName = 'border-gray-50 text-gray-50';
const inactiveClassName =
  'border-transparent hover:border-gray-300 text-gray-200 hover:text-gray-300';

export default function Index() {
  const { Tab, TabPanel } = useTabs({
    tabs: ['install', 'docs', 'examples'],
  });

  return (
    <div className="flex flex-col bg-gray-700 min-h-screen w-full">
      <Head>
        <title>react-headless-tabs</title>
      </Head>
      <main className="max-w-3xl mx-auto p-2 w-full">
        <p className="pb-8 text-center">
          <h1 className="font-extrabold mb-2 text-7xl text-center text-gray-200">
            react-headless-tabs
          </h1>
          <a
            className="font-light text-xl text-gray-200 hover:text-gray-400 transition-colors underline"
            href="https://github.com/Zertz/react-headless-tabs"
          >
            Contribute on GitHub
          </a>
        </p>
        <nav className="flex border-b border-gray-400">
          <Tab tabKey="install">
            {({ isActive, onClick }) => (
              <button
                className={`${baseClassName} ${
                  isActive ? activeClassName : inactiveClassName
                }`}
                onClick={onClick}
              >
                Getting started
              </button>
            )}
          </Tab>
          <Tab tabKey="docs">
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
        <TabPanel className="py-8" tabKey="install">
          <pre className="text-gray-200">
            <code>npm install react-headless-tabs</code>
          </pre>
        </TabPanel>
        <TabPanel className="py-8" tabKey="docs">
          <pre className="text-gray-200">
            <code>{`
import { useTabs } from "react-headless-tabs";

const { Tab, TabPanel } = useTabs({
  tabs: ["hello"],
});

return (
  <Tab tabKey="hello">
    {({ isActive, onClick }) => (
      <button onClick={onClick} style={{ color: isActive ? "green" : "tomato" }}>
        Hello
      </button>
    )}
  </Tab>
  <TabPanel tabKey="hello">
    World
  </TabPanel>
);
            `}</code>
          </pre>
        </TabPanel>
        <TabPanel className="py-8 space-y-16" tabKey="examples">
          <div className="">
            <h2 className="border-b border-solid border-gray-400 font-bold mb-4 pb-2 text-4xl text-center text-gray-200">
              Basic
            </h2>
            <div className="bg-gray-200 p-2 rounded">
              <Basic />
            </div>
          </div>
          <div className="">
            <h2 className="border-b border-solid border-gray-400 font-bold mb-4 pb-2 text-4xl text-center text-gray-200">
              Browser
            </h2>
            <div className="bg-gray-200 p-2 rounded">
              <Browser />
            </div>
          </div>
          <div className="">
            <h2 className="border-b border-solid border-gray-400 font-bold mb-4 pb-2 text-4xl text-center text-gray-200">
              Dropdown
            </h2>
            <div className="bg-gray-200 p-2 rounded">
              <Dropdown />
            </div>
          </div>
          <div className="">
            <h2 className="border-b border-solid border-gray-400 font-bold mb-4 pb-2 text-4xl text-center text-gray-200">
              Nested
            </h2>
            <div className="bg-gray-200 p-2 rounded">
              <Nested />
            </div>
          </div>
          <div className="">
            <h2 className="border-b border-solid border-gray-400 font-bold mb-4 pb-2 text-4xl text-center text-gray-200">
              Overflow
            </h2>
            <div className="bg-gray-200 p-2 rounded">
              <Overflow />
            </div>
          </div>
        </TabPanel>
      </main>
    </div>
  );
}
