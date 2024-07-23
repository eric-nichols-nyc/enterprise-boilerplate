import { ComponentsNav } from '@/components/components-nav';
import React from 'react';

export default async function ComponentsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col h-full overflow-y-hidden">
      <main className="flex flex-row container border">
        <div className="hidden lg:flex w-60 h-[calc(100vh-74px)] overflow-hidden">
          <ComponentsNav />
        </div>
        <div className="flex-1">
         {children}
        </div>
      </main>
    </div>
  )
}

