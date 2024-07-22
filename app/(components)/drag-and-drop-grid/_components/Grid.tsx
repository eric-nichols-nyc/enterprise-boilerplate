"use client";
import React, { FC, useState, useCallback } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
    Active,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { GridContainer } from './DndGridContainer';
import { SortableItem } from './SortableItem';
import { Item, ItemProps } from './Item';
import { calculatePosition } from "@/utils/position";

const indexStep = 65536;


const Items = [
    { id: '1',  content: 'Item 1' },
    { id: '2',  content: 'Item 2' },
    { id: '3',  content: 'Item 3' },
    { id: '4',  content: 'Item 4' },
    { id: '5',  content: 'Item 5' },
    { id: '6',  content: 'Item 6' },
    { id: '7',  content: 'Item 7' },
    { id: '8',  content: 'Item 8' },
    { id: "9",  content: 'Item 9' },
]

export const Grid = () => {
    const [items, setItems] = useState(Items.map((item, index) => ({ ...item, index: index*indexStep+indexStep })));
    const [activeId, setActiveId] = useState<string | number | null>(null);
    const [activeItem, setActiveItem] = useState<ItemProps | undefined>();
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = (event: { active: Active }) => {
        // setActiveId(event.active.id);
        console.log(event.active.id);
        setActiveItem(items.find((item) => item.id === event.active.id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const copy = [...items]
            const currentIndex = over?.data.current?.sortable.index;
            if(!activeItem) {
                console.log('activeItem is undefined')
                return;
            };
            // get new index of the item
            const moved = copy.find((item) => item.id === activeItem.id);
            const newIndex = calculatePosition(currentIndex, items, moved!);
            if (!moved) return;
            moved.index = newIndex;
            setItems(copy);
        }

        setActiveId(null);
    };
    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);
    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <SortableContext items={items.sort((a, b) => a.index - b.index)} strategy={verticalListSortingStrategy}>
                <GridContainer columns={3}>
                    {items.map((item) => (
                        <SortableItem key={item.id} id={item.id} index={item.index} content={item.content} />
                    ))}
                </GridContainer>
            </SortableContext>
            <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                {activeItem ? <Item id={activeItem.id} index={activeItem.index} content={activeItem.content} isDragging /> : null}
            </DragOverlay>
        </DndContext>
    )
}