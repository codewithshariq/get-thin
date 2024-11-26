import React from "react";
import { FormType } from "../quiz-form";
import { calculateBMI } from "@/lib/helpers";

interface FinalStepProps {
  form: FormType;
}

export default function FinalStep({ form }: FinalStepProps) {
  const { getValues } = form;
  const { feet, inches, weightLbs } = getValues();

  const BMI = calculateBMI(
    Number(feet || "0"),
    Number(inches || "0"),
    Number(weightLbs || "0"),
  );

  const isQualified = BMI > 27;

  return (
    <p className="text-center text-primary text-[2rem] leading-10 font-lora font-semibold  self-center mb-10 mt-6 animate-fadeIn">
      {isQualified
        ? "You Qualify!"
        : "Sorry you do not qualify for GLP1 Medication."}
    </p>
  );
}
