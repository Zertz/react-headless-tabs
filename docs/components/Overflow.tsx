import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Overflow() {
  const { setActiveTab, Tab, TabPanel } = useTabs({
    tabs: ['account', 'company', 'team', 'billing'],
  });

  return (
    <>
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
    </>
  );
}
