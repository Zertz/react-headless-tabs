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

const tabs = [
  { name: "Overview", href: "#overview" },
  { name: "Documentation", href: "#documentation" },
  { name: "Examples", href: "#examples" },
];

export default function Index() {
  const [tab, setTab] = useTabs(
    tabs.map(({ href }) => href),
    typeof window === "undefined"
      ? undefined
      : tabs.find(({ href }) => href === window.location.hash)?.href
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (window.location.hash === tab) {
        return;
      }

      setTab(window.location.hash || tabs[0].href);
    }, 125);

    return () => {
      clearInterval(interval);
    };
  }, [setTab, tab]);

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
          {tabs.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className={`${baseClassName} ${
                tab === href ? activeClassName : inactiveClassName
              }`}
              onClick={() => setTab(href)}
            >
              {name}
            </a>
          ))}
        </nav>
        <TabPanel className="py-6 space-y-12" hidden={tab !== "#overview"}>
          <Overview />
        </TabPanel>
        <TabPanel className="py-6 space-y-12" hidden={tab !== "#documentation"}>
          <Documentation />
        </TabPanel>
        <TabPanel className="py-6 space-y-12" hidden={tab !== "#examples"}>
          <Examples />
        </TabPanel>
      </main>
    </div>
  );
}
