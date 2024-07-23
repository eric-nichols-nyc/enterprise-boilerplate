import { Card, CardHeader } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography",
  description: "...",
};
import React from "react";

export function TypographyPage() {
  return (
    <div className="container">
      <div className="py-12 px-8">
        <CardHeader>H1</CardHeader>
        <Card className="py-12 px-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
          </h1>
        </Card>
      </div>

      <div className="py-12 px-8">
        <CardHeader>H2</CardHeader>
        <Card className="py-12 px-8">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Taxing Laughter: The Joke Tax Chronicles
          </h2>
        </Card>
      </div>

      <div className="py-12 px-8">
        <CardHeader>H3</CardHeader>
        <Card className="py-12 px-8">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Taxing Laughter: The Joke Tax Chronicles
          </h3>
        </Card>
      </div>
    </div>
  );
}
export default TypographyPage;
