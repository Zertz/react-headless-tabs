import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Dropdown() {
  const { activeTab, setActiveTab, Tab, TabPanel } = useTabs({
    defaultTab: null,
    tabs: ['account', 'company', 'team', 'billing'],
  });

  return (
    <div className="relative">
      <nav className="flex border-b border-gray-300">
        <Tab tabKey="account">
          {({ isActive, onClick }) => (
            <TabSelector isActive={isActive} onClick={onClick}>
              My Account
            </TabSelector>
          )}
        </Tab>
        <Tab tabKey="company">
          {({ isActive, onClick }) => (
            <TabSelector isActive={isActive} onClick={onClick}>
              Company
            </TabSelector>
          )}
        </Tab>
        <Tab tabKey="team">
          {({ isActive, onClick }) => (
            <TabSelector isActive={isActive} onClick={onClick}>
              Team Members
            </TabSelector>
          )}
        </Tab>
        <Tab tabKey="billing">
          {({ isActive, onClick }) => (
            <TabSelector isActive={isActive} onClick={onClick}>
              Billing
            </TabSelector>
          )}
        </Tab>
      </nav>
      <div
        className="absolute left-0 ml-4 w-full border border-t-0 border-gray-300 max-w-lg bg-gray-100 transition-transform origin-top duration-100 ease-in-out"
        style={{ transform: activeTab ? 'scaleY(1)' : 'scaleY(0)' }}
      >
        <TabPanel className="p-4" tabKey="account">
          My Account
        </TabPanel>
        <TabPanel className="p-4" tabKey="company">
          Company
        </TabPanel>
        <TabPanel className="p-4" tabKey="team">
          Team Members
        </TabPanel>
        <TabPanel className="p-4" tabKey="billing">
          Billing
        </TabPanel>
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600"
          onClick={() => setActiveTab(null)}
        >
          Close
        </button>
      </div>
      <div className="overflow-hidden p-4 prose prose-lg text-gray-600 mx-auto">
        <p>Incredibly amazing awesome content.</p>
      </div>
    </div>
  );
}
