import { ComponentsNav } from '@/components/components-nav';
import React from 'react';

interface LobyLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode
  }> {}

export default async function ComponentsLayout({ children }: LobyLayoutProps) {

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

