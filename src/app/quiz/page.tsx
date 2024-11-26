import React from "react";
import { StepIndicator } from "@/components/step-indicator";
import { QuizForm } from "@/components/quiz-form";

export default function QuizPage() {
  return (
    <div className="flex flex-col h-full flex-1 p-5">
      <StepIndicator totalSteps={3} />
      <QuizForm />
    </div>
  );
}
