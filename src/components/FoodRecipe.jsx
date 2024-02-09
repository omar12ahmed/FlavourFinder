// FoodRecipe.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/food.css";

//Capitalize first letter of each word, fix defult lowercase
function capitalizeFirstLetter(string) {
	return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

//Food Recipe card
function FoodRecipe({ recipe }) {
	return (
		<div className="card p-0 shadow-sm">
			<img src={recipe.image} alt={recipe.label} className="card-img-top" />
			<h5 className="card-title px-4 mt-3">{recipe.label}</h5>
			<div className="card-body px-4">
				{/* Icon Text */}
				<div className="icon-text d-flex flex-column mb-4">
					<div className="d-flex align-items-center">
						<div className="recipeIconText">
							<FontAwesomeIcon icon={faGlobe} />
						</div>
						
						<div className="me-4">
							<span>{recipe.cuisineType.map((s) => capitalizeFirstLetter(s))}</span>
						</div> 

						<div className="recipeIconText">
							<FontAwesomeIcon icon={faUtensils} />
						</div>
						{recipe.dishType}
					</div>
					<div className="d-flex align-items-center">
						<div className="recipeIconText">
							<FontAwesomeIcon icon={faHeart} />
						</div>
						{recipe.healthLabels[0]}, {recipe.healthLabels[1]}
					</div>
				</div>

				<h6 className="card-subtitle">Ingredients:</h6>
				<ul style={{ textAlign: "left" }}>
					{recipe.ingredients &&
						recipe.ingredients.map((ingredient, index) => (
							<li key={index}>{ingredient.text.replace("*", "")}</li> //Remove asterisks in defult data
						))}
				</ul>

				<h6 className="card-subtitle">Instructions:</h6>
				<a href={recipe.url}>
					View Recipe <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
			</div>
		</div>
	);
}

export default FoodRecipe;
