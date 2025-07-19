export const getGender = async (
  name: string
): Promise<"male" | "female" | "undermined"> => {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  const data = await response.json();
  return data.probability > 0.95 ? data.gender : "undermined";
};
