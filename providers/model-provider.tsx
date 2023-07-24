"use client"

import { useEffect, useState } from "react"

import { StoreModel } from "@/components/models/store-model"

export const ModelProvider = () => {
    const [isMounted, setIsmounted] = useState(false)

    useEffect(() => {
       setIsmounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <>
          <StoreModel/>
        </>
    )
}