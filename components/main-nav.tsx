import { Github, GithubIcon, SearchIcon, User } from "lucide-react";
import React from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-switcher";
import Link from "next/link";
import { ComponentsDropdown } from "./components-dropdown";
import { LayoutsDropdown } from "./layouts-dropdown";

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
        <ComponentsDropdown />
        <LayoutsDropdown />
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
