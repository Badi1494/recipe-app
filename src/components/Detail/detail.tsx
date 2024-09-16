import React from "react";
import "./detail.css";

interface RecipeDetailProps {
  title: string;
  description: string;
  ingredients: string[];
  imageSrc: string;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  title,
  description,
  ingredients,
  imageSrc,
}) => {
  return (
    <div className="recipe-detail-container">
      <div className="recipe-info">
        <h1 className="recipe-title">{title}</h1>
        <p className="recipe-description">{description}</p>

        <h3>Ingredients</h3>
        <ul className="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              <span className="ingredient-icon">●</span> {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-image-container">
        <img src={imageSrc} alt={title} className="recipe-image" />
      </div>
    </div>
  );
};

export default RecipeDetail;
