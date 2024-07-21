"use client";
import { cn } from "@/lib/utils";
import { PanelLeft } from "lucide-react";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const NAV_OPEN = 288;

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    console.log(isMobile)
    if(isMobile) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  },[isMobile])

    //set width of sidebar
  const resetWidth = () => {
    //if sidebar is collapsed, expand it
    if (isCollapsed) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  }

  return (
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative h-auto bg-secondary overflow-hidden flex flex-col w-72 z-10 transition-all ease-in-out duration-300",
          isCollapsed && "ml-[-288px] overflow-visible"
        )}
      >
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
        <div className="h-8 m-4 border">
          <div>I am the user options</div>
          <div role="button" className={cn
          ("absolute top-3 right-2",
          isCollapsed && "mr-[-40px]"
          )}>
            <div onClick={resetWidth}>
              <PanelLeft />
            </div>
          </div>
        </div>
        <div className="h-full overflow-auto">
        {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="h-9 border">
              {i}
            </div>
          ))}
        </div>
      </aside>
  );
};

export default Navigation;
