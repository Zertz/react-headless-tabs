import * as React from 'react';
import { useTabs } from '../../src';

export function Documentation() {
  return (
    <>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl">API</h2>
        </div>
        <pre className="bg-gray-800 p-2 rounded">
          <code>{`const {
  activeTab,
  setActiveTab,
  TabPanel,
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
      </div>
      <div className="divide-y divide-solid divide-gray-400 space-y-8">
        <h3 className="font-bold -mb-6 text-3xl">Returns</h3>
        <div className="pt-8 space-y-2">
          <pre className="bg-gray-800 p-2 rounded">
            <code>TabPanel: Component</code>
          </pre>
          <p>Renders lazily and stays mounted after it has rendered once</p>
        </div>
        <div className="pt-8 space-y-2">
          <pre className="bg-gray-800 p-2 rounded">
            <code>activeTab: string | null</code>
          </pre>
          <p>
            The currently selected tab, can be null if there are no tabs or if
            defaultTab was initialized to null
          </p>
        </div>
        <div className="pt-8 space-y-2">
          <pre className="bg-gray-800 p-2 rounded">
            <code>{'setActiveTab: (tab: string | null) => void'}</code>
          </pre>
          <p>Update the selected tab, or pass null to select none.</p>
        </div>
      </div>
    </>
  );
}
