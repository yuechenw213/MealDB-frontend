import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">Meal Finder</span>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a meal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {searchResults.map((meal) => (
            <div className="col-md-4 mb-4" key={meal.idMeal}>
              <Card data={meal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
