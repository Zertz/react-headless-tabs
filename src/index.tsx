import * as React from 'react';

function usePrevious<T>(value: T) {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function useTabs<K extends string>(tabs: K[], defaultTab?: K | null) {
  const state = React.useState<K | null>();
  const [selectedTab, setSelectedTab] = state;

  const activeIndex = React.useMemo(() => {
    if (selectedTab) {
      return tabs.indexOf(selectedTab);
    }

    return -1;
  }, [selectedTab, tabs]);

  const previousActiveIndex = usePrevious(activeIndex);

  React.useEffect(() => {
    if (tabs.length === 0) {
      setSelectedTab(undefined);

      return;
    }

    if (selectedTab === null || (selectedTab && tabs.includes(selectedTab))) {
      return;
    }

    if (
      typeof previousActiveIndex === 'number' &&
      previousActiveIndex >= 0 &&
      (tabs[previousActiveIndex] || tabs[previousActiveIndex - 1])
    ) {
      setSelectedTab(
        tabs[previousActiveIndex] || tabs[previousActiveIndex - 1]
      );

      return;
    }

    if (defaultTab === null) {
      return;
    }

    setSelectedTab(
      defaultTab && tabs.includes(defaultTab) ? defaultTab : tabs[0]
    );
  }, [selectedTab, defaultTab, tabs]);

  return state;
}

export function TabPanel({
  children,
  render = 'lazy',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  hidden: boolean;
  render?: 'always' | 'lazy';
}) {
  const [shouldRender, setShouldRender] = React.useState(render === 'always');

  React.useEffect(() => {
    if (props.hidden) {
      return;
    }

    setShouldRender(true);
  }, [props.hidden]);

  return <div {...props}>{shouldRender ? children : null}</div>;
}
