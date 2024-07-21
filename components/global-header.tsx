import { User } from 'lucide-react'
import React from 'react'
import { ThemeToggle } from './theme-switcher'
import { Logo } from './logo'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export const GlobalHeader = () => {
    return (
        <div className="border border-white flex justify-between">
            <MainNav />
            <MobileNav />
        </div>
    )
}
