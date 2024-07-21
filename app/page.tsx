import { navigation } from "@/siteConfig";
import Link from "next/link";
import Image from "next/image";
import { items } from "@/constants";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="space-y-8">
      {items.map(({ name, items }) => (
        <div key={name}>
          <h3 className="text-gray-400 font-semibold text-sm px-4 pb-2">
            {name}
          </h3>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {items.map(({ name, slug }) => (
              <Link key={slug} href={slug} className="px-4 py-2">
                <Button>{name}</Button>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <footer className="flex gap-2">
        <a href="https://nextjs.org/" target="_blank">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </a>
        <a href="https://dndkit.com/" target="_blank">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/dnd-kit-logo.svg"
            alt="dnd-kit-logo"
            width={180}
            height={37}
            priority
          />
        </a>
      </footer>
    </div>
  );
}
