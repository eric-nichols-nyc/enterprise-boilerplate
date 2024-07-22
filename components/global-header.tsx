import { User } from 'lucide-react'
import React from 'react'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export const GlobalHeader = () => {
    return (
        <div className="sticky top-0 z-50 w-full border-b bg-background flex justify-between">
             <div className="container flex h-16 items-center">
                <MainNav />
                <MobileNav />
            </div>
        </div>
    )
}
