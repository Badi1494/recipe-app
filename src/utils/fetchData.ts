export const getRecipies = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data;
};
