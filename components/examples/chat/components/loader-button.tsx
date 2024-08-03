"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";

export const LoaderButton = () => {
  const [loading, showLoading] = React.useState(true);
  function handleIsLoading() {
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
    }, 3000);
  }
  return (
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
  );
};
