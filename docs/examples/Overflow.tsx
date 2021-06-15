import * as React from 'react';
import { TabPanel, useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Overflow() {
  const [selectedTab, setSelectedTab] = useTabs([
    'account',
    'company',
    'team',
    'billing',
  ]);

  return (
    <>
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
        <select
          className="form-select pl-2 py-2 pr-4 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          onChange={({ target: { value } }) =>
            setSelectedTab(value as 'team' | 'billing')
          }
          value={0}
        >
          <option value={0}>...</option>
          <option value="team">Team Members</option>
          <option value="billing">Billing</option>
        </select>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== 'account'}>My Account</TabPanel>
        <TabPanel hidden={selectedTab !== 'company'}>Company</TabPanel>
        <TabPanel hidden={selectedTab !== 'team'}>Team Members</TabPanel>
        <TabPanel hidden={selectedTab !== 'billing'}>Billing</TabPanel>
      </div>
    </>
  );
}
