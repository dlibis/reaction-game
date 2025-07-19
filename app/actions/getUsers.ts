export const getUsers = async () => {
  const response = await fetch("/api/users");
  return response.json();
};
