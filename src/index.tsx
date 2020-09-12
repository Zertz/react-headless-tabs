import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type Key = string | number;

type SetKey = React.Dispatch<React.SetStateAction<Key | undefined>>;

type Inventory = {
  tabs: Key[];
  tabPanels: Key[];
};

const TabsContext = createContext(
  {} as {
    isInitialized: React.MutableRefObject<boolean>;
    inventory: React.MutableRefObject<Inventory>;
    key: Key | undefined;
    setKey: SetKey;
  }
);

export function Tabs({
  children,
}: {
  children:
    | React.ReactNode
    | (({
        key,
        setKey,
      }: {
        key: Key | undefined;
        setKey: SetKey;
      }) => React.ReactNode);
}) {
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

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;

      setKey(internalKey);
    }

    return () => {
      const keyIndex = inventory.current.tabs.indexOf(internalKey);

      inventory.current.tabs.splice(keyIndex, 1);

      if (inventory.current.tabs.length === 0) {
        isInitialized.current = false;
      }

      setKey(key => {
        if (key !== internalKey) {
          return key;
        }

        return inventory.current.tabs.length > 0
          ? inventory.current.tabs[keyIndex] ??
              inventory.current.tabs[inventory.current.tabs.length - 1]
          : undefined;
      });
    };
  }, []);

  return {
    isActive: context.key === internalKey,
    onClick: () => setKey(internalKey),
    setKey,
  };
};

export const useTabPanel = (key?: Key) => {
  const { inventory, setKey, ...context } = useContext(TabsContext);

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
    setKey,
  };
};
