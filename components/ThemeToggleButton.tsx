"use client";

import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "@/ThemeContext";
import Image from "next/image";

const ThemeToggleButton = () => {
  // Use custom hook to access context
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} className="bg-transparent border-none">
      <Image
        src={theme === "light" ? "/day.png" : "/moon.png"}
        alt="theme Toggle"
        width={30}
        height={30}
      />
    </Button>
  );
};

export default ThemeToggleButton;
