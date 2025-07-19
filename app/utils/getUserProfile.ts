export const getUserProfile = async (
  gender: "male" | "female" | "undermined"
) => {
  const response = await fetch(
    `https://randomuser.me/api/?gender=${gender}&inc=picture,email,location`
  );
  const data = await response.json();
  return data.results[0];
};
