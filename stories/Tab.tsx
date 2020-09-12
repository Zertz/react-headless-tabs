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
      className={`flex items-center overflow-hidden -mb-px whitespace-no-wrap border-indigo-600 border-r focus:text-white hover:text-white ${
        isActive ? 'bg-indigo-600 text-white' : 'text-gray-100'
      }`}
    >
      <button className="cursor-pointer px-3 py-2" onClick={onClick}>
        {children}
      </button>
      {onClose && (
        <button
          className="mx-1 p-1 rounded-full text-sm focus:outline-none focus:shadow-outline focus:bg-indigo-700 hover:bg-indigo-700 transition duration-300 ease-in-out"
          onClick={onClose}
          title="Close tab"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      )}
    </li>
  );
};
