import * as React from 'react';
import { useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Nested() {
  const { activeTab, setActiveTab, TabPanel } = useTabs(['account', 'company']);

  const {
    activeTab: accountActiveTab,
    setActiveTab: setAccountActiveTab,
    TabPanel: AccountTabPanel,
  } = useTabs(['profile', 'settings']);

  const {
    activeTab: companyActiveTab,
    setActiveTab: setCompanyActiveTab,
    TabPanel: CompanyTabPanel,
  } = useTabs(['team', 'billing']);

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
      </nav>
      <div className="p-4">
        <TabPanel tabKey="account">
          My Account
          <nav className="flex border-b border-gray-300">
            <TabSelector
              isActive={accountActiveTab === 'profile'}
              onClick={() => setAccountActiveTab('profile')}
            >
              Profile
            </TabSelector>
            <TabSelector
              isActive={accountActiveTab === 'settings'}
              onClick={() => setAccountActiveTab('settings')}
            >
              Settings
            </TabSelector>
          </nav>
          <div className="p-4">
            <AccountTabPanel tabKey="profile">Profile</AccountTabPanel>
            <AccountTabPanel tabKey="settings">Settings</AccountTabPanel>
          </div>
        </TabPanel>
        <TabPanel tabKey="company">
          Company
          <nav className="flex border-b border-gray-300">
            <TabSelector
              isActive={companyActiveTab === 'team'}
              onClick={() => setCompanyActiveTab('team')}
            >
              Team Members
            </TabSelector>
            <TabSelector
              isActive={companyActiveTab === 'billing'}
              onClick={() => setCompanyActiveTab('billing')}
            >
              Billing
            </TabSelector>
          </nav>
          <div className="p-4">
            <CompanyTabPanel tabKey="team">Team Members</CompanyTabPanel>
            <CompanyTabPanel tabKey="billing">Billing</CompanyTabPanel>
          </div>
        </TabPanel>
      </div>
    </>
  );
}
