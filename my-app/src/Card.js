import React from "react";
import "./Card.css";

function Card({ data, onRecipeClick }) {
  const { idMeal, strMeal, strMealThumb } = data;

  return (
    <div className="Card">
      <div className="Card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="Card-content">
        <h3 className="Card-title">{strMeal}</h3>
        <div className="Card-actions">
          <button
            className="btn btn-primary"
            onClick={() => onRecipeClick(data)}
          >
            View Recipe
          </button>
          <a className="btn btn-secondary" href={`/recipe/${idMeal}`}>
            View Recipe (Link)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
