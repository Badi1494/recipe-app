import React, { useEffect, useState } from "react";
import { getRecipies } from "./utils/fetchData";
import MainLayout from "./components/Layout/mainLayout";
import RecipeCard from "./components/Recipe/card";
import { Recipe } from "./components/Recipe/type";
import "./App.css"; // Import the CSS file for styling
import { useSearch } from "./context/context"; // Adjust the path if necessary

function App() {
  const [recipeData, setRecipeData] = useState<Recipe[]>([]);
  const [visibleCount, setVisibleCount] = useState(6); // Number of items to display initially
  const { searchInput, searchCategory } = useSearch();
  const [filteredData, setFilteredData] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipies().then((res) => {
      const data = res.recipes;
      setRecipeData(data);
      setFilteredData(data);
    });
  }, []);

  useEffect(() => {
    let newFilteredData = recipeData;

    if (searchCategory === "All Categories") {
      newFilteredData = recipeData.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          recipe.difficulty.toLowerCase().includes(searchInput.toLowerCase()) ||
          recipe.cuisine.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (searchCategory === "Difficulty") {
      newFilteredData = recipeData.filter((recipe) =>
        recipe.difficulty.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (searchCategory === "Cuisine") {
      newFilteredData = recipeData.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setFilteredData(newFilteredData);
  }, [searchInput, searchCategory, recipeData]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Load 6 more items
  };

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          marginTop: "90px",
          paddingRight: "230px",
          paddingLeft: "230px",
        }}
      >
        {filteredData.slice(0, visibleCount).map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
      {visibleCount < filteredData.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </MainLayout>
  );
}

export default App;
