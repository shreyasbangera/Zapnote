"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link2 } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}${pathname}`
      );
      toast({ description: "Link copied to clipboard!" });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <header className="fixed flex justify-between items-center w-full h-16 px-4 md:px-8 bg-background z-50">
      <Link href="/">
        <h1 className="md:text-xl font-semibold">ZapNote</h1>
      </Link>
      <div className="flex items-center gap-4">
      {pathname === "/" && <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a
            href="#home"
            className="dark:text-gray-300 text-gray-500 dark:hover:text-white hover:text-black px-3 py-2 rounded-md text-sm font-semibold animate__animated animate__fadeIn"
          >
            Home
          </a>
          <a
            href="#features"
            className="dark:text-gray-300 text-gray-500 dark:hover:text-white hover:text-black px-3 py-2 rounded-md text-sm font-semibold animate__animated animate__fadeIn"
          >
            Features
          </a>
          <a
            href="#howItWorks"
            className="dark:text-gray-300 text-gray-500 dark:hover:text-white hover:text-black px-3 py-2 rounded-md text-sm font-semibold animate__animated animate__fadeIn"
          >
            How it Works
          </a>
        </div>
      </div>}
        {pathname != "/" && (
          <Button onClick={copyToClipboard} size="sm">
            <Link2 className="h-4 w-4" />
            <p className="hidden lg:block">Copy Link</p>
          </Button>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}
