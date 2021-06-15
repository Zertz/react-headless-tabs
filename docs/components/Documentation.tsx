import * as React from 'react';

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-800 p-2 rounded">
      <code>{children}</code>
    </pre>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="inline bg-gray-800 px-1 py-0.5 rounded">
      <code>{children}</code>
    </pre>
  );
}

export function Documentation() {
  return (
    <>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl">API</h2>
        </div>
        <div className="divide-y divide-solid divide-gray-400 space-y-8">
          <div className="space-y-2">
            <CodeBlock>{`import { useTabs, TabPanel } from "react-headless-tabs"`}</CodeBlock>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl">useTabs</h2>
        </div>
        <div className="divide-y divide-solid divide-gray-400 space-y-8">
          <div className="space-y-2">
            <CodeBlock>{`const [selectedTab, setSelectedTab] = useTabs(tabs, defaultTab?)`}</CodeBlock>
          </div>
          <div className="pt-8 space-y-2">
            <CodeBlock>selectedTab: string | null</CodeBlock>
            <p>
              The currently selected tab, can be null if there are no tabs or if{' '}
              <Code>defaultTab</Code> was initialized to null
            </p>
          </div>
          <div className="pt-8 space-y-2">
            <CodeBlock>
              {'setSelectedTab: (tab: string | null) => void'}
            </CodeBlock>
            <p>Update the selected tab, or pass null to select none.</p>
          </div>
          <div className="pt-8 space-y-2">
            <CodeBlock>tabs: string[]</CodeBlock>
            <p>
              Strings representing the list of tabs, can be static or dynamic.
            </p>
          </div>
          <div className="pt-8 space-y-2">
            <CodeBlock>defaultTab?: string | null</CodeBlock>
            <p>The tab that should initially be selected.</p>
            <p>
              <em>Defaults to the first tab.</em>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl">TabPanel</h2>
        </div>
        <div className="divide-y divide-solid divide-gray-400 space-y-8">
          <div className="space-y-2">
            <CodeBlock>{`<TabPanel hidden={selectedTab === "cats"}>The internet is made of cats.</TabPanel>`}</CodeBlock>
            <p>
              This component provides lazy rendering, meaning its children won't
              be rendered until the tab has been selected. When the selected tab
              changes, the panel is hidden but not unmounted.
            </p>
            <p>
              Since a <Code>{`<TabPanel>`}</Code> is rendered on-demand and
              exactly once, it's perfect for lazily fetching data.{' '}
            </p>
            <p>
              <em>
                Use of this component is optional, any other component or HTML
                element can be used.
              </em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
