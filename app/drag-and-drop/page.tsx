import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Drag and Drop Demo',
  description: '...',
}
 import React from "react";
import { Grid } from "./_components/Grid";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import List from "./_components/list";
import Link from "next/link";

export function DragDropPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Drag and Drop Items Page</h1>  
      <div className="border flex justify-center">
      <Tabs defaultValue="account" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Grid</TabsTrigger>
          <TabsTrigger value="password">List</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Grid />
        </TabsContent>
        <TabsContent value="password">
          <List />
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}


export default DragDropPage;
