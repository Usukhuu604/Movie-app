import React from "react";
import { Moon } from "lucide-react";
import { Toggle } from "@radix-ui/react-toggle";

export const ThemeSwitcher = () => {
  return (
    <div>
      <Toggle className="border border-gray-300 rounded-lg  size-[36px]  ">
        <Moon className="place-self-center" />
      </Toggle>
    </div>
  );
};
