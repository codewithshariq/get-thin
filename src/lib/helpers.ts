export const calculateBMI = (
  feet: number,
  inches: number,
  weightLbs: number,
): number => {
  const heightInches = feet * 12 + inches;
  const heightMeters = heightInches * 0.0254;

  const weightKg = weightLbs * 0.453592;

  const bmi = weightKg / (heightMeters * heightMeters);

  return !isFinite(bmi) ? 0 : Math.round(bmi * 10) / 10;
};
