import * as React from 'react';
import { useTab } from '../src';

export const Tab = ({
  children,
  tabKey,
}: {
  children: React.ReactNode;
  tabKey?: string;
}) => {
  const { isActive, onClick } = useTab(tabKey);

  return (
    <li
      onClick={onClick}
      style={{
        border: `1px solid ${isActive ? 'tomato' : 'transparent'}`,
        cursor: 'pointer',
        margin: '0 0 -1px 0',
        padding: 8,
      }}
    >
      {children}
    </li>
  );
};
