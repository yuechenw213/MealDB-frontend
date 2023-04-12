import React from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ data }) {
  const { idMeal, strMeal, strMealThumb } = data;

  return (
    <div className="card mb-4" key={idMeal}>
      <img
        className="card-img-top"
        src={strMealThumb}
        alt={strMeal}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
      </div>
    </div>
  );
}

export default Card;
