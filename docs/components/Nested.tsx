import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Nested() {
  const { Tab, TabPanel } = useTabs({
    tabs: ['account', 'company'],
  });

  const { Tab: AccountTab, TabPanel: AccountTabPanel } = useTabs({
    tabs: ['profile', 'settings'],
  });

  const { Tab: CompanyTab, TabPanel: CompanyTabPanel } = useTabs({
    tabs: ['team', 'billing'],
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
      </nav>
      <TabPanel className="p-4" tabKey="account">
        My Account
        <>
          <nav className="flex border-b border-gray-300">
            <AccountTab tabKey="profile">
              {({ isActive, onClick }) => (
                <TabSelector isActive={isActive} onClick={onClick}>
                  Profile
                </TabSelector>
              )}
            </AccountTab>
            <AccountTab tabKey="settings">
              {({ isActive, onClick }) => (
                <TabSelector isActive={isActive} onClick={onClick}>
                  Settings
                </TabSelector>
              )}
            </AccountTab>
          </nav>
          <AccountTabPanel className="p-4" tabKey="profile">
            Profile
          </AccountTabPanel>
          <AccountTabPanel className="p-4" tabKey="settings">
            Settings
          </AccountTabPanel>
        </>
      </TabPanel>
      <TabPanel className="p-4" tabKey="company">
        Company
        <>
          <nav className="flex border-b border-gray-300">
            <CompanyTab tabKey="team">
              {({ isActive, onClick }) => (
                <TabSelector isActive={isActive} onClick={onClick}>
                  Team Members
                </TabSelector>
              )}
            </CompanyTab>
            <CompanyTab tabKey="billing">
              {({ isActive, onClick }) => (
                <TabSelector isActive={isActive} onClick={onClick}>
                  Billing
                </TabSelector>
              )}
            </CompanyTab>
          </nav>
          <CompanyTabPanel className="p-4" tabKey="team">
            Team Members
          </CompanyTabPanel>
          <CompanyTabPanel className="p-4" tabKey="billing">
            Billing
          </CompanyTabPanel>
        </>
      </TabPanel>
    </>
  );
}
