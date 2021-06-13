import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Overflow() {
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
        <select
          className="form-select pl-2 py-2 pr-4 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          onChange={({ target: { value } }) =>
            setActiveTab(value as 'team' | 'billing')
          }
          value={0}
        >
          <option value={0}>...</option>
          <option value="team">Team Members</option>
          <option value="billing">Billing</option>
        </select>
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
