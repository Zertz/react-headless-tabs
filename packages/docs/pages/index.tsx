import Head from "next/head";
import * as React from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { Documentation } from "../components/Documentation";
import { Examples } from "../components/Examples";
import { Overview } from "../components/Overview";

const baseClassName =
  "inline-flex items-center border-b-2 cursor-pointer mr-8 px-2 py-4 font-medium text-sm whitespace-nowrap focus:outline-none focus:border-gray-300 focus:text-gray-400";
const activeClassName = "border-gray-50 text-gray-50";
const inactiveClassName =
  "border-transparent hover:border-gray-300 text-gray-200 hover:text-gray-300";

export default function Index() {
  const defaultTab = React.useMemo(() => {
    if (typeof window === "undefined" || !window.location.hash) {
      return;
    }

    return window.location.hash.substring(1);
  }, []);

  const [selectedTab, setSelectedTab] = useTabs(
    ["overview", "documentation", "examples"],
    defaultTab
  );

  React.useEffect(() => {
    if (!selectedTab) {
      return;
    }

    window.location.hash = selectedTab;
  }, [selectedTab]);

  return (
    <div className="flex flex-col bg-gray-700 min-h-screen overflow-x-hidden text-gray-200 w-full">
      <Head>
        <title>react-headless-tabs</title>
      </Head>
      <main className="max-w-4xl mx-auto p-2 w-full">
        <div className="pb-8 text-center">
          <h1 className="font-extrabold mb-2 text-4xl sm:text-6xl md:text-7xl">
            react-headless-tabs
          </h1>
          <a
            className="font-light hover:text-gray-300 text-xl transition-colors underline"
            href="https://github.com/Zertz/react-headless-tabs"
          >
            Contribute on GitHub
          </a>
        </div>
        <nav className="flex border-b border-gray-400 overflow-x-auto">
          <button
            className={`${baseClassName} ${
              selectedTab === "overview" ? activeClassName : inactiveClassName
            }`}
            onClick={() => setSelectedTab("overview")}
          >
            Overview
          </button>
          <button
            className={`${baseClassName} ${
              selectedTab === "documentation"
                ? activeClassName
                : inactiveClassName
            }`}
            onClick={() => setSelectedTab("documentation")}
          >
            Documentation
          </button>
          <button
            className={`${baseClassName} ${
              selectedTab === "examples" ? activeClassName : inactiveClassName
            }`}
            onClick={() => setSelectedTab("examples")}
          >
            Examples
          </button>
        </nav>
        <TabPanel
          className="py-6 space-y-12"
          hidden={selectedTab !== "overview"}
          render="idle"
        >
          <Overview />
        </TabPanel>
        <TabPanel
          className="py-6 space-y-12"
          hidden={selectedTab !== "documentation"}
          render="idle"
        >
          <Documentation />
        </TabPanel>
        <TabPanel
          className="py-6 space-y-12"
          hidden={selectedTab !== "examples"}
          render="idle"
        >
          <Examples />
        </TabPanel>
      </main>
    </div>
  );
}
