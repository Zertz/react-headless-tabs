import * as React from 'react';

export function Overview({ isActive }: { isActive: boolean }) {
  return (
    <div className="py-6 space-y-12" hidden={!isActive}>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl text-center">Features</h2>
        </div>
        <ul className="space-y-2">
          <li>🌱 Under 1KB minified and gzipped</li>
          <li>🚛 Bring your own DOM!</li>
          <li>✨ Correctly handles dynamic tabs, no more empty tab panels!</li>
          <li>🤹‍♂️ Well suited for complex use cases, like drag and drop!</li>
        </ul>
      </div>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl text-center">Getting started</h2>
        </div>
        <pre className="bg-gray-800 p-2 rounded">
          <code>npm install react-headless-tabs</code>
        </pre>
      </div>
    </div>
  );
}
