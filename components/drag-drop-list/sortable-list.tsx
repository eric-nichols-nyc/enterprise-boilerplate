"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import type { Active, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { SortableListItem } from "./sortable-list-item";
import { calculatePosition } from "@/utils/position";


type ItemProps = {
  id: UniqueIdentifier;
  index: number;
  content: string;
};

type ListProps = {
  items: ItemProps[];
};

export const SortableList = ({ items }: ListProps) => {
  const [active, setActive] = useState<Active | null>(null);
  const [activeItem, setActiveItem] = useState<ItemProps | undefined>();
  const [orderedItems, setOrderedItems] = useState<ItemProps[]>(items);



  useEffect(() => {
    console.log(items)
    setOrderedItems(items);
  }, [items]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );


  const handleDragStart = (event: { active: Active }) => {
    setActiveItem(items.find((item) => item.id === event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {

      const copy = [...orderedItems]
      const currentIndex = over?.data.current?.sortable.index;
      if(!activeItem) return;
      // get new index of the item
      const moved = copy.find((item) => item.id === activeItem.id);
      const newIndex = calculatePosition(currentIndex, orderedItems, moved!);
      if (!moved) return;
      moved.index = newIndex;
      setOrderedItems(copy);
    }
  };

  const handleDragCancel = () => {
    console.log('drag cancelled');
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={orderedItems.sort((a, b) => a.index - b.index)} strategy={verticalListSortingStrategy}>
        <ul className="flex flex-col gap-2">
          {orderedItems.map((item) => (
            <SortableListItem
              key={item.id}
              id={item.id}
            >
              {item.content} {item.index}
            </SortableListItem>
          ))}
        </ul>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
        {activeItem && <SortableListItem
          key={activeItem.id}
          id={activeItem.id}
        >
          {activeItem.content}
        </SortableListItem>}
      </DragOverlay>
    </DndContext>
  )
}

