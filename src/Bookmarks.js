import React, { useState } from "react";
import Card from "./Card";


function Bookmarks({ bookmarks ,onRecipeClick, onAddToBookmarks, onBackClick}) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="Bookmarks container">
      <h1 className="text-center mb-5">Bookmarked Recipes</h1>
      <div className="row">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.idMeal} className="col-md-4 mb-4">
            <Card data={bookmark} onRecipeClick={() => onRecipeClick(bookmark)} onAddToBookmarks = {() => onAddToBookmarks(bookmark)} bookmarks={bookmarks}  />
          </div>
        ))}
      </div>
      <div>
      <button className="btn btn-primary" onClick={onBackClick}>
          Back to Search
        </button>
    </div>
    </div>
    
  );
}

export default Bookmarks;
