import { GlobalNav } from '@/components/global-nav';
import React from 'react';

interface LobyLayoutProps
  extends React.PropsWithChildren<{
    children: React.ReactNode
  }> {}

export default async function ComponentsLayout({ children }: LobyLayoutProps) {

  return (
    <div className="relative flex w-full min-h-screen flex-col">
      <main className="flex">
        <GlobalNav />
        {children}
      </main>
    </div>
  )
}

