"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const BackLink = () => {
  const router = useRouter();
  return <X className="mt-[2px] cursor-pointer" size={32} onClick={() => router.back()} />;
};
