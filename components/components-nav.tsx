"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { items } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
export const ComponentsNav = () => {
  const params = usePathname();
  const components = siteConfig.components;

  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <div id="components-nav" className="hidden fixed top-14 lg:flex flex-col h-full overflow-y-auto border-b border-gray-800 lg:bottom-0 lg:z-auto w-60 lg:border-b-0 lg:border-r lg:border-gray-800">
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
      </button>

      <div
        className={cn("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="px-2 pb-24 pt-5">
          <h3 className="font-semibold text-sm px-2 py-1">
            {items[1].name}
          </h3>
          <ul>
            {
              components.map(({ title, href }) => (
                <li className={"block px-2 py-1 text-sm"+(params === href ? " bg-gray-800 text-white" : "")} key={href}>
                  <Link href={href} >
                    {title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
