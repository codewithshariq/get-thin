"use client";
import { formSchema } from "@/components/quiz-form";
import { z } from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  formState: z.infer<typeof formSchema>;
  currentStep: number;
  setFormState: (state: z.infer<typeof formSchema>) => void;
  setCurrentStep: (step: number) => void;
  clearState: () => void;
}

const initialState: z.infer<typeof formSchema> = {
  feet: "",
  inches: "",
  weightLbs: "",
  weightLossGoal: "",
};

const useFormStore = create<Store>()(
  persist(
    (set) => ({
      formState: initialState,
      currentStep: 1,
      setFormState: (state) => set({ formState: state }),
      setCurrentStep: (step) => set({ currentStep: step }),
      clearState: () => set({ formState: initialState, currentStep: 0 }),
    }),
    {
      name: "form-storage",
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) =>
          sessionStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    },
  ),
);

export default useFormStore;
