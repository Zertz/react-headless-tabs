import * as React from 'react';
import { Tabs } from '../src';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

export default {
  title: 'Tabs',
};

const ulStyle = {
  borderBottom: '1px solid tomato',
  display: 'flex',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

export const Uncontrolled = () => (
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

export const Controlled = () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <Tabs>
      {({ key, setKey }) => (
        <>
          <ul style={ulStyle}>
            {tabs.map(tab => (
              <Tab key={tab} tabKey={tab}>
                {tab}
              </Tab>
            ))}
          </ul>
          {tabs.map(tab => (
            <TabPanel key={tab} tabKey={tab}>
              {tab}
            </TabPanel>
          ))}
          <button
            disabled={key === tabs[1]}
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
