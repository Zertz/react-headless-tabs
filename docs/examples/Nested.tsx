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
      <div className="p-4">
        <TabPanel tabKey="account">
          {({ isActive }) => (
            <div hidden={!isActive}>
              My Account
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
              <div className="p-4">
                <AccountTabPanel tabKey="profile">
                  {({ isActive }) => <div hidden={!isActive}>Profile</div>}
                </AccountTabPanel>
                <AccountTabPanel tabKey="settings">
                  {({ isActive }) => <div hidden={!isActive}>Settings</div>}
                </AccountTabPanel>
              </div>
            </div>
          )}
        </TabPanel>
        <TabPanel tabKey="company">
          {({ isActive }) => (
            <div hidden={!isActive}>
              Company
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
              <div className="p-4">
                <CompanyTabPanel tabKey="team">
                  {({ isActive }) => <div hidden={!isActive}>Team Members</div>}
                </CompanyTabPanel>
                <CompanyTabPanel tabKey="billing">
                  {({ isActive }) => <div hidden={!isActive}>Billing</div>}
                </CompanyTabPanel>
              </div>
            </div>
          )}
        </TabPanel>
      </div>
    </>
  );
}
