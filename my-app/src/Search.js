import React, { useState } from "react";
import Card from "./Card";
import Recipe from "./Recipe";
import "./Search.css";

function Search({ onAddToBookmarks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data.meals || []);
  };

  const handleRecipeClick = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  const handleAddToBookmarks = (recipe) => {
    onAddToBookmarks(recipe);
  }

  return (
    <div className="Search container">
      <h1 className="text-center mb-5">Recipe Search</h1>
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a search term..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {selectedRecipe ? (
        <Recipe recipe={selectedRecipe} onBackClick={handleBackClick} onAddToBookmarks={handleAddToBookmarks}/>
      ) : (
        <div className="row">
          {searchResults.map((result) => (
            <div key={result.idMeal} className="col-md-4 mb-4">
              <Card data={result} onRecipeClick={handleRecipeClick} onAddToBookmarks={handleAddToBookmarks} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
