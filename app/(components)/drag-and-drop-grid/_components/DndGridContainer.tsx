"use client";
import React from 'react';

type GridContainerProps = {
  columns: number;
  children: React.ReactNode;
}

export const GridContainer = ({ children, columns }: GridContainerProps) => {
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  )
}