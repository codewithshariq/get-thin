"use client";
import React from "react";
import { StepIndicator } from "@/components/step-indicator";
import { QuizForm } from "@/components/quiz-form";
import useFormStore from "@/store/form-store";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function QuizPage() {
  const hasHydrated = useFormStore((state) => state.hasHydrated);

  if (!hasHydrated) {
    return (
      <div className="flex flex-col h-full flex-1 p-5 items-center">
        <LiaSpinnerSolid className="h-20 w-20 lg:h-36 lg:w-36 text-primary stroke-current fill-current animate-spin mt-20" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full flex-1 p-5">
      <StepIndicator totalSteps={2} />
      <QuizForm />
    </div>
  );
}
