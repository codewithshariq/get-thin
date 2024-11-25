import { cn } from "@/lib/utils";
import React from "react";

interface QuestionProps {
  children: React.ReactNode;
  className?: string;
}

export function Question({ children, className }: QuestionProps) {
  return (
    <p
      className={cn(
        "text-[2rem] leading-10 font-semibold text-primary text-center font-lora max-w-[22.875rem] md:max-w-[35ch] self-center mb-10 mt-6",
        className,
      )}
    >
      {children}
    </p>
  );
}
