import React from "react";
import { Question } from "../question";
import { Option } from "../option";
import useFormStore from "@/store/form-store";

const OPTIONS = [
  "Lose 1-20 lbs for good",

  "Lose 21-50 lbs for good",

  "Lose over 50 lbs for good",

  "Maintian my weight nad get fit",

  "Haven’t decided",
];

export function WeightLossGoal() {
  const { setFormState, formState } = useFormStore((state) => state);

  const handleSelection = (option: string) => {
    setFormState({ weightLossGoal: option });
  };
  return (
    <>
      <Question>What is your weight loss goal?</Question>
      <div className="flex flex-col gap-4 max-w-[47.125rem] self-center w-full">
        {OPTIONS.map((option, index) => {
          const isSelected = formState.weightLossGoal === option;

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
