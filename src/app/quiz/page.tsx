import React from "react";
import { StepIndicator } from "@/components/step-indicator";
import Form from "@/components/form";

export default function QuizPage() {
  return (
    <div className="flex flex-col h-full flex-1 p-5">
      <StepIndicator totalSteps={2} />
      <Form />
    </div>
  );
}
