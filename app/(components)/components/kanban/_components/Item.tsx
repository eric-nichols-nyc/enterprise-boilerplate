"use client";

import React, { forwardRef, HTMLAttributes, CSSProperties } from 'react';

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
    id: string | number;
    index: number;
    content: string;
    withOpacity?: boolean;
    isDragging?: boolean;
};

export const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, index, content, withOpacity, isDragging, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
        opacity: withOpacity ? '0.5' : '1',
        transformOrigin: '50% 50%',
        height: '210px',
        width: '100%',
        borderRadius: '10px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: isDragging  ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props}>{content} - {index}</div>;
});

Item.displayName = 'Item';

