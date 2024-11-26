"use client";
import React from "react";
import { Progress } from "./ui/progress";
import ArrowIcon from "@/../public/arrow-icon.svg";
import useFormStore from "@/store/form-store";
interface StepIndicatorProps {
  totalSteps: number;
}

export function StepIndicator({ totalSteps }: StepIndicatorProps) {
  const currentStep = useFormStore((state) => state.currentStep);
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);

  const progress =
    currentStep === totalSteps ? 100 : ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="flex items-center w-full justify-center mt-6 md:mt-10 gap-6">
      {currentStep > 1 && (
        <ArrowIcon
          className="relative w-[18px] h-[18px] cursor-pointer"
          onClick={() => setCurrentStep(currentStep - 1)}
        />
      )}
      <Progress
        value={progress}
        className="h-4 max-w-[15.125rem] md:max-w-[32.75rem]"
      />
      <p className="font-lora font-normal text-base">{`${currentStep}/${totalSteps}`}</p>
    </div>
  );
}
