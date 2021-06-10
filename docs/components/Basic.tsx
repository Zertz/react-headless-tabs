import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Basic() {
  const { Tab, TabPanel } = useTabs({
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
