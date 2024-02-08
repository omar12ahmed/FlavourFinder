// FoodRecipe.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function FoodRecipe({ recipe }) {
	return (
		<div className="card p-0">
			<img src={recipe.image} alt={recipe.label} className="card-img-top" />
			<h5 className="card-title px-2 mt-3 text-left">{recipe.label}</h5>
			<div className="card-body">
				<h6 className="card-subtitle">Ingredients:</h6>
				<ul style={{ textAlign: "left" }}>
					{recipe.ingredients &&
						recipe.ingredients.map((ingredient, index) => (
							<li key={index}>{ingredient.text}</li>
						))}
				</ul>
				<h6 className="card-subtitle">Cuisine Type:</h6>
				<p className="card-text">{recipe.cuisineType}</p>
				<h6 className="card-subtitle">Instructions:</h6>
				<a href={recipe.url}>
					View Recipe <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
			</div>
		</div>
	);
}

export default FoodRecipe;
