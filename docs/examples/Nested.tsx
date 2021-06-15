import * as React from 'react';
import { TabPanel, useTabs } from '../../src';
import { TabSelector } from './TabSelector';

export function Nested() {
  const [selectedTab, setSelectedTab] = useTabs(['account', 'company']);

  const [selectedAccountTab, setSelectedAccountTab] = useTabs([
    'profile',
    'settings',
  ]);

  const [selectedCompanyTab, setSelectedCompanyTab] = useTabs([
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
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== 'account'}>
          My Account
          <nav className="flex border-b border-gray-300">
            <TabSelector
              isActive={selectedAccountTab === 'profile'}
              onClick={() => setSelectedAccountTab('profile')}
            >
              Profile
            </TabSelector>
            <TabSelector
              isActive={selectedAccountTab === 'settings'}
              onClick={() => setSelectedAccountTab('settings')}
            >
              Settings
            </TabSelector>
          </nav>
          <div className="p-4">
            <TabPanel hidden={selectedAccountTab !== 'profile'}>
              Profile
            </TabPanel>
            <TabPanel hidden={selectedAccountTab !== 'settings'}>
              Settings
            </TabPanel>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== 'company'}>
          Company
          <nav className="flex border-b border-gray-300">
            <TabSelector
              isActive={selectedCompanyTab === 'team'}
              onClick={() => setSelectedCompanyTab('team')}
            >
              Team Members
            </TabSelector>
            <TabSelector
              isActive={selectedCompanyTab === 'billing'}
              onClick={() => setSelectedCompanyTab('billing')}
            >
              Billing
            </TabSelector>
          </nav>
          <div className="p-4">
            <TabPanel hidden={selectedCompanyTab !== 'team'}>
              Team Members
            </TabPanel>
            <TabPanel hidden={selectedCompanyTab !== 'billing'}>
              Billing
            </TabPanel>
          </div>
        </TabPanel>
      </div>
    </>
  );
}
