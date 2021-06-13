import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Dropdown() {
  const { activeTab, setActiveTab, TabPanel } = useTabs(
    ['account', 'company', 'team', 'billing'],
    null
  );

  return (
    <div className="relative">
      <nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={activeTab === 'account'}
          onClick={() => setActiveTab('account')}
        >
          My Account
        </TabSelector>
        <TabSelector
          isActive={activeTab === 'company'}
          onClick={() => setActiveTab('company')}
        >
          Company
        </TabSelector>
        <TabSelector
          isActive={activeTab === 'team'}
          onClick={() => setActiveTab('team')}
        >
          Team Members
        </TabSelector>
        <TabSelector
          isActive={activeTab === 'billing'}
          onClick={() => setActiveTab('billing')}
        >
          Billing
        </TabSelector>
      </nav>
      <div
        className="absolute left-0 ml-4 p-4 w-full border border-t-0 border-gray-300 max-w-lg bg-gray-100 transition-transform origin-top duration-100 ease-in-out"
        style={{ transform: activeTab ? 'scaleY(1)' : 'scaleY(0)' }}
      >
        <TabPanel tabKey="account">My Account</TabPanel>
        <TabPanel tabKey="company">Company</TabPanel>
        <TabPanel tabKey="team">Team Members</TabPanel>
        <TabPanel tabKey="billing">Billing</TabPanel>
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
