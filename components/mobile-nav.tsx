"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/constants";
import Link from "next/link";

export const MobileNav = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index:number) => {
    setOpenIndex(openIndex === index ? null : index)
  };
  if (isDesktop) return null;
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant="ghost"
          size="icon"
          className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9">
        <Link href="/">Home</Link>
        <Accordion type="single" collapsible className="w-full">
          {siteConfig.mainNav.filter((link) => link.href !== "/").map((navLink, index) => (
            <AccordionItem key={index} value={navLink.title}>
              <AccordionTrigger onClick={() => handleToggle(index)}>
                {navLink.title}
              </AccordionTrigger>
              <AccordionContent>
                {navLink.items?.map((child, index) => (
                  <Link
                    key={index}
                    href={child.href}
                    className="block py-2 px-4 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {child.title}
                  </Link>
                
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};
