import { navigation } from "@/siteConfig";
import Link from "next/link";
import Image from "next/image";
import { items } from "@/config/constants";
import { Button } from "@/components/ui/button";
import TechCards from "@/components/tech-cards";
import Hero from "@/components/animated-hero";
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="mt-6">
        <TechCards />
      </div>
    </div>
  );
}
