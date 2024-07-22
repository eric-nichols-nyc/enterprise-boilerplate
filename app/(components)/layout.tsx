import { ComponentsNav } from '@/components/components-nav';
import { GlobalNav } from '@/components/global-nav';
import React from 'react';

interface LobyLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode
  }> {}

export default async function ComponentsLayout({ children }: LobyLayoutProps) {

  return (
    <div className="relative flex w-full min-h-screen flex-col">
      <main className="flex">
        <div className="mt-20 flex w-full">
          <ComponentsNav />
         {children}
        </div>
      </main>
    </div>
  )
}

