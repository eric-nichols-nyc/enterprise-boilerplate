import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Form Demo',
  description: '...',
}
 import React from "react";
import { CardWithForm } from './_components/form-component';

function FormsPage() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold">Forms</h1>  
      <div className="border flex w-full justify-center py-8">
        <CardWithForm />
      </div>
    </div>
  )
}


export default FormsPage;
