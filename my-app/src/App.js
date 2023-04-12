import React, { useState } from "react";
import Search from "./Search";
import Recipe from "./Recipe";

function App() {
  const [currentPage, setCurrentPage] = useState("search");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage("recipe");
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
    setCurrentPage("search");
  };

  return (
    <div className="App">
      {currentPage === "search" && (
        <Search onRecipeClick={handleRecipeClick} />
      )}
      {currentPage === "recipe" && (
        <Recipe recipe={selectedRecipe} onBackClick={handleBackClick} />
      )}
    </div>
  );
  
}

export default App;
