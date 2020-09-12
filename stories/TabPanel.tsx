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

  if (!isActive) {
    return null;
  }

  return (
    <div className="bg-white overflow-hidden p-4 prose prose-lg text-gray-600 mx-auto">
      <p>{children}</p>
    </div>
  );
};
