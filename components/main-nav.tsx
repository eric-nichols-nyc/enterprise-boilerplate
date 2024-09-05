import { Github, GithubIcon, SearchIcon, User } from "lucide-react";
import React from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-switcher";
import Link from "next/link";
import { ComponentsDropdown } from "./components-dropdown";
import { LayoutsDropdown } from "./layouts-dropdown";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { components } from "@/config/constants";
import { AuthDropdown } from "./auth-dropdown";
import { SearchCommand } from "./search-command";

const navigationItems = [
  {
    title: "Components",
    href: "/components/buttons",
  },
  {
    title: "Onboarda",
    href: "/onboarda",
  },
  {
    title: "Layouts",
    href: "/sliding-sidebar",
  },
];
export const MainNav = () => {
  return (
    <div className="hidden lg:flex w-full justify-between">
      <div className="flex gap-2 items-center text-sm">
        <Link href="/" className="group flex w-full justify-center gap-x-2.5">
          <div className="flex justify-center size-14">
            <Logo />
          </div>
        </Link>
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-1"
          >
            <div>{item.title}</div>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <AuthDropdown />
        <ThemeToggle />
        <div>
          <SearchCommand />
        </div>
        <div>
          <a
            href="https://github.com/eric-nichols-nyc/enterprise-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
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
  );
});
ListItem.displayName = "ListItem";
