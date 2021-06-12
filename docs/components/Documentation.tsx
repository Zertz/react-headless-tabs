import * as React from 'react';

export function Documentation({ isActive }: { isActive: boolean }) {
  return (
    <div className="py-6 space-y-12" hidden={!isActive}>
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
} = useTabs(tabs, defaultTab?)`}</code>
        </pre>
      </div>
      <div className="divide-y divide-solid divide-gray-400 space-y-8">
        <div className="space-y-2">
          <pre className="bg-gray-800 p-2 rounded">
            <code>tabs: string[]</code>
          </pre>
          <p>
            Strings representing the list of tabs, can be static or dynamic.
          </p>
        </div>
        <div className="pt-8 space-y-2">
          <pre className="bg-gray-800 p-2 rounded">
            <code>defaultTab?: string | null</code>
          </pre>
          <p>
            The tab that should initially be selected{' '}
            <em>(defaults to the first one)</em>
          </p>
        </div>
        <div className="pt-8 space-y-2">
          <pre className="bg-gray-800 p-2 rounded">
            <code>Tab</code>
          </pre>
          <p>
            Render function with <code>isActive</code> and <code>onClick</code>
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
    </div>
  );
}
