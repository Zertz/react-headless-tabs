import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Basic() {
  const { activeTab, setActiveTab, TabPanel } = useTabs([
    'account',
    'company',
    'team',
    'billing',
  ]);

  return (
    <>
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
      <div className="p-4">
        <TabPanel tabKey="account">My Account</TabPanel>
        <TabPanel tabKey="company">Company</TabPanel>
        <TabPanel tabKey="team">Team Members</TabPanel>
        <TabPanel tabKey="billing">Billing</TabPanel>
      </div>
    </>
  );
}
