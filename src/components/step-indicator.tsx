import Image from "next/image";
import React from "react";
import { Progress } from "./ui/progress";
import ArrowIcon from "@/../public/arrow-icon.svg";

export function StepIndicator() {
  const totalSteps = 5;
  const currentStep = 1;

  const progress = ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="flex items-center w-full justify-center mt-6 md:mt-10 gap-6">
      {currentStep > 1 && (
        <div className="relative w-[18px] h-[14px] cursor-pointer">
          <Image
            src={ArrowIcon}
            alt="arrow-icon"
            fill
            className="text-primary stroke-current"
          />
        </div>
      )}
      <Progress
        value={progress}
        className="h-4 max-w-[15.125rem] md:max-w-[32.75rem]"
      />
      <p className="font-lora font-normal text-base">{`${currentStep}/${totalSteps}`}</p>
    </div>
  );
}
