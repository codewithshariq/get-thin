"use client";
import React from "react";
import { Question } from "../question";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { FormType } from "../quiz-form";
import ArrowIcon from "@/../public/arrow-icon.svg";
import { calculateBMI } from "@/lib/helpers";
import useFormStore from "@/store/form-store";

interface BMICalculatorProps {
  form: FormType;
}

export default function BMICalculator({ form }: BMICalculatorProps) {
  const { setCurrentStep, currentStep } = useFormStore((state) => state);
  const { trigger, watch } = form;
  const { feet, inches, weightLbs } = watch();

  const BMI = calculateBMI(
    Number(feet || "0"),
    Number(inches || "0"),
    Number(weightLbs || "0"),
  );

  return (
    <div className="animate-fadeIn flex flex-col w-full items-center">
      <Question>What is your current height & weight?</Question>
      <div className="flex flex-col w-full gap-5 mb-6 lg:mb-12 max-w-[29.375rem]">
        <div className="flex flex-col w-full items-center">
          <p className="text-base font-normal text-gray-500">Your BMI</p>
          <p className="font-semibold font-lora text-primary text-5xl">
            {BMI.toFixed(1)}
          </p>
        </div>
        <Slider disabled max={30} step={0.1} value={[BMI]} />
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 self-center w-full">
        <div className="flex gap-8 w-full">
          <FormField
            control={form.control}
            name="feet"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Feet</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    max={8}
                    min={0}
                    placeholder="Feet (0-8)"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "" || /^[0-8]$/.test(value)) {
                        field.onChange(value);
                        trigger(["feet"]);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="inches"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Inches</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    max={11}
                    min={0}
                    placeholder="Inches (0-11)"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "" || /^(1[01]|[0-9])?$/.test(value)) {
                        field.onChange(e);
                        trigger(["inches"]);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="weightLbs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (in lbs)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  max={1000}
                  min={0}
                  placeholder="Weight (in lbs)"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (
                      value === "" ||
                      (Number(value) >= 0 && Number(value) <= 1000)
                    ) {
                      field.onChange(e);
                      trigger(["weightLbs"]);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button
        type="button"
        className="w-full mt-6 lg:mt-20 h-auto p-6 font-bold uppercase text-center rounded-lg text-xl gap-4"
        onClick={async () => {
          const validated = await trigger(["feet", "inches", "weightLbs"]);
          if (!validated) return;
          setCurrentStep(currentStep + 1);
        }}
      >
        Next
        <ArrowIcon className="relative w-[18px] h-[18px] cursor-pointer transform scale-x-[-1]" />
      </Button>
    </div>
  );
}
