"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { items } from "@/config/constants";
import { Button } from "./ui/button";
export const GlobalNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <div className="flex w-full flex-col border-b border-gray-800 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
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
        <nav className="space-y-6 px-2 pb-24 pt-5">
        {
            items.map(({ name, items }) => (
                <div key={name}>
                    <h3 className="font-semibold text-sm px-4 pb-2">
                    {name}
                    </h3>
                    <ul className="space-y-2">
                    {items.map(({ name, slug }) => (
                        <li key={slug}>
                        <Link href={slug} className="block px-4 py-2">
                            {name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                ))
        }
        </nav>
      </div>
    </div>
  );
};
