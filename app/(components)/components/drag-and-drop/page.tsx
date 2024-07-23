import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Drag and Drop Demo',
  description: '...',
}
 import React from "react";
import List from "./_components/list";

function DragDropPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="border flex justify-center">     
          <List />
      </div>
    </div>
  )
}


export default DragDropPage;
