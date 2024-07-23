import { Github, GithubIcon, SearchIcon, User } from "lucide-react";
import React from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-switcher";
import Link from "next/link";
import { ComponentsDropdown } from "./components-dropdown";
import { LayoutsDropdown } from "./layouts-dropdown";
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {components} from "@/config/constants"
export const MainNav = () => {
  return (
    <div className="hidden lg:flex w-full justify-between">
      <div className="flex gap-2">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
        >
          <div className="size-9">
           <Logo />
          </div>
          <h5 className="font-semibold">Enterprise</h5>
        </Link>
        <Link href="/components/buttons">Components</Link>
      </div>
      <div className="flex gap-2 items-center">
        <User />
        <ThemeToggle />
        <div>
          <SearchIcon />
        </div>
        <div>
          <GithubIcon />
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
