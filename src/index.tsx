import React, {
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type Key = string | number;

type SetKey = (key: Key | undefined) => void;

type Inventory = {
  tabs: Key[];
  tabPanels: Key[];
};

const TabsContext = createContext<{
  isInitialized: React.MutableRefObject<boolean>;
  inventory: React.MutableRefObject<Inventory>;
  key: Key | undefined;
  setKey: SetKey;
}>({
  isInitialized: { current: false },
  inventory: {
    current: {
      tabs: [],
      tabPanels: [],
    },
  },
  key: undefined,
  setKey: () => undefined,
});

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children:
    | React.ReactNode
    | (({
        key,
        setKey,
      }: {
        key: Key | undefined;
        setKey: SetKey;
      }) => React.ReactNode);
}

export function Tabs({ children }: Props) {
  const isInitialized = useRef(false);

  const inventory = useRef<Inventory>({
    tabs: [],
    tabPanels: [],
  });

  const [key, setKey] = useState<Key>();

  return (
    <TabsContext.Provider value={{ isInitialized, inventory, key, setKey }}>
      {typeof children === 'function' ? children({ key, setKey }) : children}
    </TabsContext.Provider>
  );
}

export const useTab = (key?: Key) => {
  const { isInitialized, inventory, setKey, ...context } = useContext(
    TabsContext
  );

  const [internalKey] = useState(() => {
    const length = inventory.current.tabs.push(
      key ?? inventory.current.tabs.length + 1
    );

    return key ?? length;
  });

  const isActive = context.key === internalKey;

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;

      setKey(internalKey);
    }

    return () => {
      inventory.current.tabs.splice(
        inventory.current.tabs.indexOf(internalKey),
        1
      );
    };
  }, []);

  return {
    isActive,
    onClick: () => setKey(internalKey),
    setKey,
  };
};

export const useTabPanel = (key?: Key) => {
  const { inventory, ...context } = useContext(TabsContext);

  const [internalKey] = useState(() => {
    const length = inventory.current.tabPanels.push(
      key ?? inventory.current.tabPanels.length + 1
    );

    return key ?? length;
  });

  const isActive = context.key === internalKey;

  useEffect(() => {
    return () => {
      inventory.current.tabPanels.splice(
        inventory.current.tabPanels.indexOf(internalKey),
        1
      );
    };
  }, []);

  return {
    isActive,
  };
};
