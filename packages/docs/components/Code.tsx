export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-800 overflow-x-auto p-2 rounded">
      <code>{children}</code>
    </pre>
  );
}

export function Code({ children }: { children: string }) {
  return (
    <code className="inline bg-gray-800 px-1 py-0.5 rounded">{children}</code>
  );
}
