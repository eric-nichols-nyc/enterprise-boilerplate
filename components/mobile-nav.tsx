"use client";
import { useMediaQuery } from "@/hooks/use-media-query"
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react";
import { Button } from "./ui/button";

export const MobileNav = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) return null
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
        <nav className="flex flex-col items-start">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Blog</a>
          <a href="#" className="text-white">Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
