"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Loader2, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";

const ButtonPage = () => {
  const [loading, showLoading] = React.useState(false);

  function handleIsLoading() {
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
    }, 3000);
  }
  return (
    <div className="container">
      <div className="mb-4">
        <CardHeader>Loading</CardHeader>
        <Card className="flex items-center justify-center w-full h-60 border-b">
          <Button disabled={loading} onClick={handleIsLoading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Please wait
              </>
            ) : (
              "Click me"
            )}
          </Button>
        </Card>
      </div>
      <div className="mb-4">
        <CardHeader>Icon Right</CardHeader>
        <Card className="flex items-center justify-center w-full h-60 border-b">
          <Button>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Prev
          </Button>
        </Card>
      </div>
      <div className="mb-4">
        <CardHeader>Icon Left</CardHeader>
        <Card className="flex items-center justify-center w-full h-60 border-b">
          <Button>
            Next
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>
      <div className="mb-4">
        <CardHeader>Scalling Button</CardHeader>
        <Card className="flex items-center justify-center w-full h-60 border-b">
        <Button className="glow-on-hover px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Scaling Button
          </Button>
        </Card>
      </div>
      <div className="mb-4">
        <CardHeader>Glowing Button</CardHeader>
        <Card className="flex items-center justify-center w-full h-60 border-b bg-black">
        <Button className="glow-on-hover px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform">
            Glowing Button
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ButtonPage;
