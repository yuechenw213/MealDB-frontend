import React from "react";
import "./Card.css";

function Card({ data, onRecipeClick, onAddToBookmarks }) {
  const { idMeal, strMeal, strMealThumb } = data;

  const handleAddClick = (event) => {
    event.stopPropagation();
    onAddToBookmarks(data);
  };

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
          <button
            className="btn btn-secondary"
            onClick={handleAddClick}
          >
            Add to Bookmarks
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
