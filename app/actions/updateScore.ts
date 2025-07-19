export const updateScore = async (userId: string, score: number) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify({ score }),
  });
  return response.json();
};
