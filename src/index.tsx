import * as React from 'react';

function usePrevious<T>(value: T) {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function useTabs<K extends string>(tabs: K[], defaultTab?: K | null) {
  const [activeTab, setActiveTab] = React.useState<K | null>();
  const activeTabRef = React.useRef(activeTab);

  const activeIndex = React.useMemo(() => {
    if (activeTab) {
      return tabs.indexOf(activeTab);
    }

    return -1;
  }, [activeTab, tabs]);

  const previousActiveIndex = usePrevious(activeIndex);

  React.useEffect(() => {
    if (tabs.length === 0) {
      setActiveTab(null);

      return;
    }

    if (activeTab === null || (activeTab && tabs.includes(activeTab))) {
      return;
    }

    if (
      typeof previousActiveIndex === 'number' &&
      previousActiveIndex >= 0 &&
      (tabs[previousActiveIndex] || tabs[previousActiveIndex - 1])
    ) {
      setActiveTab(tabs[previousActiveIndex] || tabs[previousActiveIndex - 1]);

      return;
    }

    if (defaultTab === null) {
      return;
    }

    setActiveTab(
      defaultTab && tabs.includes(defaultTab) ? defaultTab : tabs[0]
    );
  }, [activeTab, defaultTab, tabs]);

  activeTabRef.current = activeTab;

  const Tab = React.useCallback(
    ({
      children,
      tabKey,
    }: {
      children: (props: {
        isActive: boolean;
        onClick: () => void;
      }) => React.ReactElement;
      tabKey: K;
    }) => {
      return children({
        isActive: activeTabRef.current === tabKey,
        onClick: () => setActiveTab(tabKey),
      });
    },
    []
  );

  const tab = React.useCallback(
    (
      tabKey: K,
      children: (props: {
        isActive: boolean;
        onClick: () => void;
      }) => React.ReactElement
    ) => {
      return children({
        isActive: activeTabRef.current === tabKey,
        onClick: () => setActiveTab(tabKey),
      });
    },
    []
  );

  const TabPanel = React.useCallback(
    ({
      children,
      mode = 'lazy',
      tabKey,
    }: {
      children: (props: { isActive: boolean }) => React.ReactElement;
      mode?: 'eager' | 'lazy';
      tabKey: K;
    }) => (
      <InternalTabPanel
        active={activeTabRef.current === tabKey}
        children={children}
        mode={mode}
      />
    ),
    []
  );

  return {
    activeIndex,
    activeTab,
    setActiveTab,
    tab,
    Tab,
    TabPanel,
  };
}

function InternalTabPanel({
  active,
  children,
  mode,
}: {
  active: boolean;
  children: (props: { isActive: boolean }) => React.ReactElement;
  mode: 'eager' | 'lazy';
}) {
  const [shouldRender, setShouldRender] = React.useState(mode === 'eager');

  React.useEffect(() => {
    if (!active) {
      return;
    }

    setShouldRender(true);
  }, [active]);

  return shouldRender ? children({ isActive: active }) : null;
}
