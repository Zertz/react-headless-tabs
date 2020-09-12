import * as React from 'react';
import { useTabPanel } from '../src';

export const TabPanel = ({
  children,
  tabKey,
}: {
  children: React.ReactNode;
  tabKey?: string;
}) => {
  const { isActive } = useTabPanel(tabKey);

  return (
    <div className={`p-2 ${isActive ? 'block' : 'hidden'}`}>{children}</div>
  );
};
