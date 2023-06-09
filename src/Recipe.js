import React, { useState, useEffect } from "react";
import "./Recipe.css";

function Recipe(props) {
  
  const [recipe, setRecipe] = useState(props.recipe);


  const handleAddClick = (event) => {
    event.stopPropagation();
    props.onAddToBookmarks(recipe);
  };

  const isBookmarked = props.bookmarks.some((b) => b.idMeal === recipe.idMeal);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        <li key={i} className="list-group-item">
          {recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}
        </li>
      );
    } else {
      break;
    }
  }

  return (
    <div className="Recipe container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="Recipe-title text-center">{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="Recipe-image img-fluid rounded mx-auto d-block" />
          <div>
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
          <div className="Recipe-details mt-4">
            <h2>Ingredients</h2>
            <ul className="list-group">{ingredients}</ul>
            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
          </div>
          <button className="btn btn-primary" onClick={props.onBackClick}>
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
