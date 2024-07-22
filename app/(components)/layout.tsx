import { ComponentsNav } from '@/components/components-nav';
import React from 'react';

export default async function ComponentsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="relative flex w-full h-full flex-col">
      <main className="flex container border">
        <div className="flex w-full">
          <ComponentsNav />
         {children}
        </div>
      </main>
    </div>
  )
}

