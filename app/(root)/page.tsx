"use client";

import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Model } from "@/components/ui/model";
import { useStoreModel } from "@/hooks/use-store-model";

const RootPage = () => {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1>Admin Dashboard</h1>
      <Button>button</Button>
      
      
    </div>
  )
}

export default RootPage