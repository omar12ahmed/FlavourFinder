/* eslint-disable react/prop-types */
// FoodRecipeList.jsx
import { useState, useEffect } from "react";
import "../components/styles/food.css";

function FoodRecipeList({ recipes, onSelect, searchTerm, dropdownVisible }) {
	//apply style to word in recipe list that matches search term
	const [formattedRecipes, setFormattedRecipes] = useState([]);
	const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(-1); // Initialize with -1 to denote no selection

	useEffect(() => {
		if (searchTerm) {
			const updateRecipes = recipes.map((recipe) => {
				// Find the index of the search term in the string
				let index = recipe.label.toLowerCase().indexOf(searchTerm.toLowerCase());

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

	// Event listener to handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (formattedRecipes.length === 0) return;

			switch (event.key) {
				case "ArrowUp":
					setSelectedRecipeIndex((prevIndex) =>
						prevIndex > 0 ? prevIndex - 1 : formattedRecipes.length - 1
					);
					break;
				case "ArrowDown":
					setSelectedRecipeIndex((prevIndex) =>
						prevIndex < formattedRecipes.length - 1 ? prevIndex + 1 : 0
					);
					break;
				case "Enter":
					if (selectedRecipeIndex !== -1) {
						const selectedRecipe = formattedRecipes[selectedRecipeIndex].fullRecipe;
						onSelect(selectedRecipe);
						setSelectedRecipeIndex(-1);
					}
					// Reset state variables to hide the dropdown
					break;
				default:
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [formattedRecipes, onSelect, selectedRecipeIndex]);

	return (
		<div className="px-3">
			{/* Create Dropdown List if searchTerm is present */}
			{searchTerm && dropdownVisible && (
				<div className="dropdown recipe-dropdown px-5" data-bs-toggle="dropdown">
					<ul className="recipe-list dropdown-menu show">
						{formattedRecipes.map((recipe, index) => (
							<li
								key={index}
								onClick={() => onSelect(recipe.fullRecipe)}
								className={`dropdown-item ${
									index === selectedRecipeIndex ? "active" : ""
								}`}
							>
								<img
									src={recipe.fullRecipe.image}
									alt={recipe.fullRecipe.label}
									className="recipe-list-img"
								/>
								<span>{recipe.startOfString}</span>
								<span style={{ fontWeight: "bold", color: "#DB4D6D" }}>
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
