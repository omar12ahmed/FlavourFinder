// FoodRecipeList.jsx
import React from "react";
import "../assets/css/food.css";

function FoodRecipeList({ recipes, onSelect }) {
	return (
		<div className="recipe-list">
			{recipes &&
				recipes.map((recipe, index) => {
					console.log(recipe.label); // Log the recipe
					return (
						<div key={index} onClick={() => onSelect(recipe)}>
							<li>
								<span className={recipe.label.includes("input") ? "bold-label" : ""}>
									{recipe.label}
								</span>
							</li>
						</div>
					);
				})}
		</div>
	);
}

export default FoodRecipeList;
