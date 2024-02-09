/* eslint-disable react/prop-types */
// FoodRecipeList.jsx
import { useState, useEffect } from "react";
import "../assets/css/food.css";
function FoodRecipeList({ recipes, onSelect, searchTerm }) {
	//apply style to word in recipe list that matches search term
	const [formattedRecipes, setFormattedRecipes] = useState([]);
	console.log(recipes);
	console.log(searchTerm);
	console.log(
		recipes.map((recipe) => {
			console.log(recipe.label);
			const index = recipe.label.toLowerCase().indexOf(searchTerm.toLowerCase());
			console.log(index);
			// return {
			//   start: recipe.label.substring(0, index),
			//   term: recipe.label.substring(index, index + searchTerm.length),
			//   end: recipe.label.substring(index + searchTerm.length),
			//   fullRecipe: recipe,
			// };
			return {
				string: recipe.label,
				startOfString: recipe.label.substring(0, index),
				termString: recipe.label.substring(index, index + searchTerm.length),
				endOfString: recipe.label.substring(index + searchTerm.length),
				fullRecipe: recipe,
			};
		})
	);
	useEffect(() => {
		if (searchTerm) {
			const updateRecipes = recipes.map((recipe) => {
				// Given string
				console.log(recipe.label);
				// Find the index of the search term in the string
				let index = recipe.label.toLowerCase().indexOf(searchTerm.toLowerCase());
				console.log(index);
				// Create the array/object of substrings
				return {
					startOfString:
						index >= 0 ? recipe.label.substring(0, index) : recipe.label,
					termString:
						index >= 0 && recipe.label.substring(index, index + searchTerm.length),
					endOfString:
						index >= 0 && recipe.label.substring(index + searchTerm.length),
					fullRecipe: recipe,
				};
			});
			setFormattedRecipes(updateRecipes);
		}
	}, [searchTerm, recipes]);
	return (
		<div>
			{searchTerm && formattedRecipes.length > 0 && (
				// Create Dropdown List
				<div className="dropdown" data-bs-toggle="dropdown">
					<ul className="recipe-list dropdown-menu show">
						{formattedRecipes.map((recipe, index) => (
							<li
								key={index}
								onClick={() => onSelect(recipe.fullRecipe)}
								className="dropdown-item"
							>
								<span>{recipe.startOfString}</span>
								<span style={{ fontWeight: "bold", color: "#86C166" }}>
									{recipe.termString}
								</span>
								<span>{recipe.endOfString}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
export default FoodRecipeList;
// {
/* <div className="recipe-list">
            {recipes &&
                recipes?.map((recipe, index) => {
                    console.log(recipe.label); // Log the recipe
                    return (
                        <div key={index} onClick={() => onSelect(recipe)}>
                            <li>
                                <span className={recipe.label.includes(searchTerm) ? "bold-label" : ""}>
                                    {recipe.label}
                                </span>
                            </li>
                        </div>
                    );
                })}
        </div> */
// }
