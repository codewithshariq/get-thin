import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
  optionText: string;
}

export function Option({ isSelected, optionText, ...restProps }: OptionProps) {
  return (
    <div
      className={cn(
        "flex p-6 items-center rounded-lg border border-solid cursor-pointer",
        isSelected ? "bg-primary border-primary" : "bg-white",
      )}
      {...restProps}
    >
      <div className="flex gap-6 items-center">
        {!isSelected && (
          <div className="h-[1.375rem] w-[1.375rem] rounded-full border border-solid border-primary" />
        )}
        {isSelected && (
          <Image
            src={"/checked-circle.svg"}
            height={22}
            width={22}
            alt="checked-circle"
          />
        )}
        <p
          className={cn(
            "text-sm",
            isSelected ? "text-primary-foreground" : "text-primary",
          )}
        >
          {optionText}
        </p>
      </div>
    </div>
  );
}
