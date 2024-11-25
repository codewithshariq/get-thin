"use client";
import useFormStore from "@/store/form-store";
import React from "react";
import { WeightLossGoal } from "./form-steps/weight-loss-goal";

export default function Form() {
  const { currentStep } = useFormStore((state) => state);

  return (
    <form className="flex flex-col items-center">
      {currentStep === 1 && <WeightLossGoal />}
    </form>
  );
}
