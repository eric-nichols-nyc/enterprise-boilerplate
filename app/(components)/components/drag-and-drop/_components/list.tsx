"use client"
import React from "react";
import { SortableList } from "@/components/drag-drop-list/sortable-list";
import { EditableText } from "@/components/editable-text";
import { calculatePosition } from "@/utils/position";

const Items = [
    { id: '1', index: 65536, content: 'Item 1' },
    { id: '2', index: 131072, content: 'Item 2' },
    { id: '3', index: 196608, content: 'Item 3' },
    { id: '4', index: 262144, content: 'Item 4' },
    { id: '5', index: 327680, content: 'Item 5' },
]

type Item = {
    id: string;
    index: number;
    content: string;
};

const List = () => {
    const [items, setItems] = React.useState<Item[]>(Items);

    const addItem = (content: string) => {
        let index;
        if (!items.length) {
            index = 65536;
        } else {
            index = items[items.length - 1].index + 65536;
        }
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            index: index,
            content
        }
        setItems((prev) => [...prev!, newItem])
    }
    return (
        <div className="h-full w-full flex justify-center">
            <div className="size-full max-w-6xl flex flex-col items-center">
                <h1>Drag and Drop List Example</h1>
                <div className="w-full max-w-[500px] border-2 verflow-y-scroll">
                    {
                        items && items.length > 0 ? <SortableList items={items} /> : null
                    }
                    <div className="p-4">
                        <EditableText initialText="+ Add an item" cb={addItem} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;