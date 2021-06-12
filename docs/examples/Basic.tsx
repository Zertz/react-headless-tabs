import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Basic() {
  const { tab, Tab, TabPanel } = useTabs([
    'account',
    'company',
    'team',
    'billing',
  ]);

  return (
    <>
      <nav className="flex border-b border-gray-300">
        {tab('account', ({ isActive, onClick }) => (
          <TabSelector isActive={isActive} onClick={onClick}>
            My Account
          </TabSelector>
        ))}
        {tab('company', ({ isActive, onClick }) => (
          <TabSelector isActive={isActive} onClick={onClick}>
            Company
          </TabSelector>
        ))}
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
      <div className="p-4">
        <TabPanel tabKey="account">
          {({ isActive }) => <div hidden={!isActive}>My Account</div>}
        </TabPanel>
        <TabPanel tabKey="company">
          {({ isActive }) => <div hidden={!isActive}>Company</div>}
        </TabPanel>
        <TabPanel tabKey="team">
          {({ isActive }) => <div hidden={!isActive}>Team Members</div>}
        </TabPanel>
        <TabPanel tabKey="billing">
          {({ isActive }) => <div hidden={!isActive}>Billing</div>}
        </TabPanel>
      </div>
    </>
  );
}
