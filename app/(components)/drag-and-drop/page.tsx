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

function DragDropPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="border flex justify-center">     
          <List />
      </div>
    </div>
  )
}


export default DragDropPage;
