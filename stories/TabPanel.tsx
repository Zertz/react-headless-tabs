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
    <div
      style={{
        border: '1px solid tomato',
        borderTop: 'none',
        display: isActive ? 'block' : 'none',
        padding: 8,
      }}
    >
      {children}
    </div>
  );
};
