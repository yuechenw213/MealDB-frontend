import React, { useState } from "react";
import Search from "./Search";
import Recipe from "./Recipe";
import Bookmarks from "./Bookmarks";

function App() {
  const [currentPage, setCurrentPage] = useState("search");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);


  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage("recipe");
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
    setCurrentPage("search");
  };

  // const handleAddToBookmarks = (recipe) => {
  //   console.log(recipe);
  //   setBookmarks((bookmarks) => [...bookmarks, recipe]);
  // };

  const handleAddToBookmarks = (recipe) => {
    const index = bookmarks.findIndex((bookmark) => bookmark.idMeal === recipe.idMeal);
    if (index !== -1) {
      // Recipe is already in bookmarks, so remove it
      setBookmarks((bookmarks) => [...bookmarks.slice(0, index), ...bookmarks.slice(index + 1)]);
    } else {
      // Recipe is not in bookmarks, so add it
      setBookmarks((bookmarks) => [...bookmarks, recipe]);
    }
  };
  

  const handleBookmarksClick = () => {
    setCurrentPage("bookmarks");
  };

  return (
    <div className="App">
      {currentPage === "search" && (
        <Search onRecipeClick={handleRecipeClick}  onAddToBookmarks={handleAddToBookmarks} bookmarks = {bookmarks} />
      )}
      {currentPage === "recipe" && (
        <Recipe recipe={selectedRecipe} onBackClick={handleBackClick}  onAddToBookmarks={handleAddToBookmarks} bookmarks={bookmarks}/>
      )}
      {currentPage === "bookmarks" && (
        <Bookmarks bookmarks={bookmarks} onRecipeClick={handleRecipeClick} onAddToBookmarks={handleAddToBookmarks} onBackClick={handleBackClick}/>
      )}
      <div className="fixed-bottom mb-3 mr-3">
        <button className="btn btn-primary" onClick={handleBookmarksClick} onAddToBookmarks={handleAddToBookmarks} onBackClick={handleBackClick} >
          Bookmarks ({bookmarks.length} )
        </button>
      </div>
    </div>
  );
  
}

export default App;
