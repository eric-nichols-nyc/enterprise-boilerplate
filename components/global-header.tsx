import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export const GlobalHeader = () => {
    return (
        <div className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black text-black dark:text-white flex justify-between">
             <div className="container flex h-16 items-center">
                <MainNav />
                <MobileNav />
            </div>
        </div>
    )
}
