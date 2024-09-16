import React from "react";
import "./card.css";
import { Recipe } from "./type";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { image, name, reviewCount, mealType, rating, cookTimeMinutes } =
    recipe;
  const renderStars = () => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? "filled-star" : "empty-star"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="recipe-card">
      <img src={image} alt={name} className="recipe-image" />
      <div className="info-container">
        <h3 className="recipe-name">{name}</h3>
        <div className="review-section">
          <span className="review-count">Reviews: {reviewCount}</span>
        </div>
      </div>
      <div className="meal-type-rating">
        <div className="time-container">
          <img src="/time.png" alt="time icon" />
          <span className="time-text">{cookTimeMinutes} minutes</span>
        </div>
        <div className="rating">
          <span className="meal-type">{mealType}</span>
          <div>{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
