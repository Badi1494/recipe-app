import React from "react";
import "./detail.css";
import { Recipe } from "../Recipe/type";
import { useParams } from "react-router-dom";

interface RecipeDetailProps {
  data: Recipe[];
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ data }) => {
  const { id } = useParams<{ id: string }>();

  const recipe = data.find((recipe) => recipe.id === Number(id));

  if (!recipe) return <div>No recipe found for the given id</div>;
  return (
    <div className="recipe-detail-container">
      <div className="recipe-info">
        <h1 className="recipe-title">{recipe.name}</h1>
        <p className="recipe-description">{recipe.tags.join(",")}</p>

        <h3>Ingredients</h3>
        <ul className="ingredient-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              <img src="/dot.png" alt="dot" className="ingredient-icon" />{" "}
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.name} className="recipe-img" />
      </div>
    </div>
  );
};

export default RecipeDetail;
