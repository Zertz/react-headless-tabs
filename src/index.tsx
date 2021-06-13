import * as React from 'react';

type Div = React.HTMLAttributes<HTMLDivElement>;

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

  const TabPanel = React.useCallback(
    ({
      mode = 'lazy',
      tabKey,
      ...rest
    }: {
      mode?: 'eager' | 'lazy';
      tabKey: K;
    } & Div) => (
      <InternalTabPanel
        {...rest}
        hidden={activeTabRef.current !== tabKey}
        mode={mode}
      />
    ),
    []
  );

  return {
    activeTab,
    setActiveTab,
    TabPanel,
  };
}

function InternalTabPanel({
  children,
  mode,
  ...props
}: { mode: 'eager' | 'lazy' } & Div) {
  const [shouldRender, setShouldRender] = React.useState(mode === 'eager');

  React.useEffect(() => {
    if (props.hidden) {
      return;
    }

    setShouldRender(true);
  }, [props.hidden]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
