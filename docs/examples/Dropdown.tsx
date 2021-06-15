import * as React from 'react';
import { TabPanel, useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Dropdown() {
  const [selectedTab, setSelectedTab] = useTabs(
    ['account', 'company', 'team', 'billing'],
    null
  );

  return (
    <div className="relative">
      <nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === 'account'}
          onClick={() => setSelectedTab('account')}
        >
          My Account
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'company'}
          onClick={() => setSelectedTab('company')}
        >
          Company
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'team'}
          onClick={() => setSelectedTab('team')}
        >
          Team Members
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'billing'}
          onClick={() => setSelectedTab('billing')}
        >
          Billing
        </TabSelector>
      </nav>
      <div
        className="absolute left-0 ml-4 p-4 w-full border border-t-0 border-gray-300 max-w-lg bg-gray-100 bg-opacity-90 transition-transform origin-top duration-100 ease-in-out"
        style={{ transform: selectedTab ? 'scaleY(1)' : 'scaleY(0)' }}
      >
        <TabPanel hidden={selectedTab !== 'account'}>My Account</TabPanel>
        <TabPanel hidden={selectedTab !== 'company'}>Company</TabPanel>
        <TabPanel hidden={selectedTab !== 'team'}>Team Members</TabPanel>
        <TabPanel hidden={selectedTab !== 'billing'}>Billing</TabPanel>
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600"
          onClick={() => setSelectedTab(null)}
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
