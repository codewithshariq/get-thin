"use client";
import React from "react";
import { Question } from "../question";
import { Option } from "../option";
import useFormStore from "@/store/form-store";
import { FormType } from "../quiz-form";

const OPTIONS = [
  "Lose 1-20 lbs for good",

  "Lose 21-50 lbs for good",

  "Lose over 50 lbs for good",

  "Maintian my weight nad get fit",

  "Haven’t decided",
];

interface WeightLossGoalProps {
  form: FormType;
}

export function WeightLossGoal({ form }: WeightLossGoalProps) {
  const { setCurrentStep, currentStep } = useFormStore((state) => state);

  const { setValue, getValues } = form;

  const handleSelection = (option: string) => {
    setValue("weightLossGoal", option);
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <Question>What is your weight loss goal?</Question>
      <div className="flex flex-col gap-4 self-center w-full">
        {OPTIONS.map((option, index) => {
          const isSelected = getValues("weightLossGoal") === option;

          return (
            <Option
              key={index}
              isSelected={isSelected}
              optionText={option}
              onClick={() => handleSelection(option)}
            />
          );
        })}
      </div>
    </>
  );
}
