import React, { useState }  from "react";
import "./Card.css";

function Card({ data, onRecipeClick, onAddToBookmarks, bookmarks }) {
  const { idMeal, strMeal, strMealThumb } = data;

  const handleAddClick = (event) => {
    event.stopPropagation();
    onAddToBookmarks(data);
  };


  const isBookmarked = bookmarks.some((b) => b.idMeal === idMeal);


  return (
    <div className="card rounded border">
      <div className="Card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="Card-content">
        <h3 className="Card-title">{strMeal}</h3>
        <div className="Card-actions text-center">
          <button
            className="btn btn-primary"
            onClick={() => onRecipeClick(data)}
          >
            View Recipe
          </button>
          {!isBookmarked ? (
            <button className="btn btn-secondary" onClick={handleAddClick}>
              Add to Bookmarks
            </button>
          ) : (
            <button className="btn btn-warning" onClick={handleAddClick}>
              Remove from Bookmarks
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
