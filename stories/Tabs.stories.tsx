import React, { useState } from 'react';
import { Tabs } from '../src';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

export default {
  title: 'Tabs',
};

const ulStyle = {
  alignItems: 'center',
  borderBottom: '1px solid tomato',
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

export const StaticTabs = () => (
  <Tabs>
    <ul style={ulStyle}>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </ul>
    <TabPanel>TabPanel 1</TabPanel>
    <TabPanel>TabPanel 2</TabPanel>
    <TabPanel>TabPanel 3</TabPanel>
  </Tabs>
);

let tabCounter = 4;

export const DynamicTabs = () => {
  const [tabs, setTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3']);

  const handleCloseTab = (tab: string) => () => {
    setTabs(tabs => tabs.filter(t => t !== tab));
  };

  const handleNewTab = () => {
    setTabs(tabs => tabs.concat(`Tab ${tabCounter++}`));
  };

  return (
    <Tabs>
      {({ key, setKey }) => (
        <>
          <ul style={ulStyle}>
            {tabs.map(tab => (
              <Tab key={tab} tabKey={tab} onClose={handleCloseTab(tab)}>
                {tab}
              </Tab>
            ))}
            <li style={{ borderTop: '1px solid transparent', margin: 8 }}>
              <button onClick={handleNewTab}>New tab</button>
            </li>
          </ul>
          {tabs.map(tab => (
            <TabPanel key={tab} tabKey={tab}>
              {tab}
            </TabPanel>
          ))}
          <button
            disabled={!tabs[1] || key === tabs[1]}
            onClick={() => setKey(tabs[1])}
            style={{ marginTop: 8 }}
          >
            Open tab 2
          </button>
        </>
      )}
    </Tabs>
  );
};
