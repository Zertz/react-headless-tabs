import * as React from 'react';

type Div = React.HTMLAttributes<HTMLDivElement>;

export function useTabs<K extends string>({
  defaultTab,
  tabs,
}: {
  defaultTab?: K | null;
  tabs: K[];
}) {
  const [activeTab, setActiveTab] = React.useState(defaultTab);
  const activeTabRef = React.useRef(activeTab);

  const activeIndex = React.useMemo(() => {
    if (activeTab) {
      return tabs.indexOf(activeTab);
    }

    return -1;
  }, [activeTab]);

  React.useEffect(() => {
    if (tabs.length === 0) {
      setActiveTab(undefined);

      return;
    }

    if (activeTab === null || (activeTab && tabs.includes(activeTab))) {
      return;
    }

    if (activeIndex >= 0 && (tabs[activeIndex] || tabs[activeIndex - 1])) {
      setActiveTab(tabs[activeIndex] || tabs[activeIndex - 1]);

      return;
    }

    setActiveTab(tabs[0]);
  }, [activeIndex, activeTab, tabs]);

  activeTabRef.current = activeTab;

  const Tab = React.useCallback(
    ({
      children,
      tabKey,
    }: {
      children: (props: {
        isActive: boolean;
        onClick: () => void;
      }) => React.ReactNode;
      tabKey: K;
    }) => {
      return (
        <>
          {children({
            isActive: activeTabRef.current === tabKey,
            onClick: () => setActiveTab(tabKey),
          })}
        </>
      );
    },
    []
  );

  const TabPanel = React.useCallback(
    ({ tabKey, ...rest }: { eager?: boolean; tabKey: K } & Div) => (
      <LazyTabPanel {...rest} active={activeTabRef.current === tabKey} />
    ),
    []
  );

  return {
    activeIndex,
    activeTab,
    setActiveTab,
    Tab,
    TabPanel,
  };
}

function LazyTabPanel({
  active,
  children,
  eager = false,
  ...rest
}: {
  active: boolean;
  eager?: boolean;
} & Div) {
  const [shouldRender, setShouldRender] = React.useState(eager);

  React.useEffect(() => {
    if (!active) {
      return;
    }

    setShouldRender(true);
  }, [active]);

  return (
    <div {...rest} hidden={!active}>
      {shouldRender ? children : null}
    </div>
  );
}
