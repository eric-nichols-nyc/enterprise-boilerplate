import { navigation } from "@/siteConfig";
import Link from "next/link";
import Image from "next/image";
import { items } from "@/config/constants";
import { Button } from "@/components/ui/button";
import TechCards from "@/components/tech-cards";
export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">Start building with Next.js</h1>
      <h4 className="text-lg md:text-2xl text-center mt-4">Get started by editing</h4>
      <div className="mt-6">
        <TechCards />
      </div>
    </div>
  );
}
