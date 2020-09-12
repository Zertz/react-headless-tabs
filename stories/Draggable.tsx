import { XYCoord } from 'dnd-core';
import React, { useCallback, useRef, useState } from 'react';
import { DndProvider, DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Tabs, useTab } from '../src';
import { TabPanel } from './TabPanel';

export const Draggable = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: 'Draggable tab 1',
    },
    {
      id: 2,
      text: 'Draggable tab 2',
    },
    {
      id: 3,
      text: 'Draggable tab 3',
    },
  ]);

  const moveTab = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragTab = tabs[dragIndex];

      setTabs(tabs => {
        const tabsCopy = JSON.parse(JSON.stringify(tabs));

        tabsCopy.splice(dragIndex, 1);
        tabsCopy.splice(hoverIndex, 0, dragTab);

        return tabsCopy;
      });
    },
    [tabs]
  );

  return (
    <div className="flex w-full">
      <DndProvider backend={HTML5Backend}>
        <Tabs>
          <div className="flex flex-col">
            {tabs.map((tab, i) => (
              <Tab
                key={tab.id}
                index={i}
                id={tab.id}
                text={tab.text}
                moveTab={moveTab}
              />
            ))}
          </div>
          <div className="flex-grow">
            {tabs.map(tab => (
              <TabPanel key={tab.id}>{tab.text}</TabPanel>
            ))}
          </div>
        </Tabs>
      </DndProvider>
    </div>
  );
};

const ItemTypes = {
  TAB: 'tab',
};

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const Tab = ({
  id,
  text,
  index,
  moveTab,
}: {
  id: any;
  text: string;
  index: number;
  moveTab: (dragIndex: number, hoverIndex: number) => void;
}) => {
  const { isActive, onClick } = useTab();

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.TAB,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveTab(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TAB, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      className={`mr-4 group inline-flex items-center px-2 py-4 border-l-2 font-medium text-sm leading-5 cursor-pointer whitespace-no-wrap ${
        isActive
          ? 'border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
          : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300'
      } ${isDragging ? 'opacity-25' : 'opacity-100'}`}
      onClick={onClick}
      ref={ref}
    >
      {text}
    </div>
  );
};
