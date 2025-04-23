import React from "react";
import { Button } from "../ui/button";
import { Moon } from "lucide-react";
import { Toggle } from "@radix-ui/react-toggle";

export const ThemeSwitcher = () => {
  return (
    <div>
      <Toggle className="border border-black rounded-[5px] shadow-black ">
        <Moon />
      </Toggle>
    </div>
  );
};
