export function Example({
  children,
  title,
  url,
}: {
  children: React.ReactNode;
  title: string;
  url: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
        <h2 className="font-bold text-4xl text-gray-200">{title}</h2>
        <a
          className="font-light hover:text-gray-300 text-sm transition-colors underline"
          href={url}
        >
          View source
        </a>
      </div>
      <div className="bg-gray-200 overflow-x-auto p-2 rounded text-gray-700">
        {children}
      </div>
    </div>
  );
}
