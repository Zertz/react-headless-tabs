import * as React from 'react';
import { useTab } from '../src';

export const Tab = ({
  children,
  onClose,
  tabKey,
}: {
  children: React.ReactNode;
  onClose?: () => void;
  tabKey?: string;
}) => {
  const { isActive, onClick } = useTab(tabKey);

  return (
    <li
      onClick={onClick}
      style={{
        alignItems: 'center',
        border: `1px solid ${isActive ? 'tomato' : 'transparent'}`,
        cursor: 'pointer',
        display: 'flex',
        margin: '0 0 -1px 0',
        padding: 8,
      }}
    >
      {children}
      {onClose && (
        <button onClick={onClose} style={{ marginLeft: 8 }}>
          X
        </button>
      )}
    </li>
  );
};
