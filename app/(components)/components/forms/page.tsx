import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Drag and Drop Demo',
  description: '...',
}
 import React from "react";

function FormsPage() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold">Forms</h1>  
      <div className="border flex w-full justify-center">
        forms go here
      </div>
    </div>
  )
}


export default FormsPage;
