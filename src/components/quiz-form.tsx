"use client";
import useFormStore from "@/store/form-store";
import React, { useEffect } from "react";
import { WeightLossGoal } from "./form-steps/weight-loss-goal";
import BMICalculator from "./form-steps/bmi-calculator";
import { Form } from "./ui/form";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FinalStep from "./form-steps/final-step";

export const formSchema = z.object({
  feet: z.string().min(1, "Feet is required"),
  inches: z.string().min(1, "Inches is required"),
  weightLbs: z.string().min(1, "Weight is required"),
  weightLossGoal: z.string().min(1, "Weight loss goal is required"),
});

export type FormType = UseFormReturn<z.infer<typeof formSchema>>;

export function QuizForm() {
  const { currentStep, formState, setFormState } = useFormStore(
    (state) => state,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formState,
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      setFormState(values as z.infer<typeof formSchema>);
    });

    return () => subscription.unsubscribe();
  }, [form, setFormState]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full max-w-[47.125rem] mx-auto"
      >
        {currentStep === 1 && <WeightLossGoal form={form} />}
        {currentStep === 2 && <BMICalculator form={form} />}
        {currentStep === 3 && <FinalStep form={form} />}
      </form>
    </Form>
  );
}
