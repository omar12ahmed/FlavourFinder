//Recipe.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import FoodRecipeList from "../FoodRecipeList";
import FoodRecipe from "../FoodRecipe";
import recipeData from "../../utilities/edamamRecipeData.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Recipe() {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const [suggestedRecipes, setSuggestedRecipes] = useState([]);

	useEffect(() => {
		if (!searchTerm) return;

		// Fetch recipes from the Edamam API
		fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=13240bb6&app_key=eed90ce549fd7ffed60d201349af2108`
		)
			.then((response) => response.json())
			.then((data) => {
				setRecipes(data.hits.map((hit) => hit.recipe)); // Extract the recipe data from the hits array
			})
			.catch((error) => {
				console.error("Error fetching recipes:", error);
			});
	}, [searchTerm]);

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearchButtonClick = () => {
		// Fetch recipes from the Edamam API
		fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=13240bb6&app_key=eed90ce549fd7ffed60d201349af2108`
		)
			.then((response) => response.json())
			.then((data) => {
				const hits = data.hits;
				if (hits.length > 0) {
					setRecipes(hits.map((hit) => hit.recipe));
					setSelectedRecipe(hits[0].recipe); // Display details of the first recipe found
					// Fetch and set the nearest two recipes
					const nearestIndex = recipes.findIndex(
						(r) => r.uri === hits[0].recipe.uri
					);
					if (nearestIndex !== -1 && recipes.length > nearestIndex + 2) {
						const nearestRecipes = [
							recipes[nearestIndex + 1],
							recipes[nearestIndex + 2],
						];
						setSuggestedRecipes(nearestRecipes);
					} else {
						console.error(
							"Nearest recipes not found or not enough recipes in the database."
						);
					}
				} else {
					// If there are no search results, show the nearest recipe
					const nearestRecipe = recipeData.recipes && recipeData.recipes[0]; // Get the first recipe from recipeData
					setSelectedRecipe(nearestRecipe);
				}
			})
			.catch((error) => {
				console.error("Error fetching recipes:", error);
			});
	};

	const handleRecipeSelect = (recipe) => {
		setSelectedRecipe(recipe);
		// Fetch and set the nearest two recipes
		const nearestIndex = recipes.findIndex((r) => r.uri === recipe.uri);
		if (nearestIndex !== -1 && recipes.length > nearestIndex + 2) {
			const nearestRecipes = [
				recipes[nearestIndex + 1],
				recipes[nearestIndex + 2],
			];
			setSuggestedRecipes(nearestRecipes);
		} else {
			console.error(
				"Nearest recipes not found or not enough recipes in the database."
			);
		}
	};

	return (
		<div className="container-fluid vh-100 d-flex">
			<div className="container-fluid">
				<SearchBar
					searchTerm={searchTerm}
					onChange={handleSearch}
					onSearch={handleSearchButtonClick}
				/>
				{/* Always display the list of recipes */}
				<FoodRecipeList
					recipes={recipes.slice(0, 6)}
					onSelect={handleRecipeSelect}
				/>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3 g-3">
					{/* Display the selected recipe */}
					<div className="col">
						{selectedRecipe && <FoodRecipe recipe={selectedRecipe} />}
					</div>

					{/* Display the suggested recipes */}

					{suggestedRecipes.map((recipe, index) => (
						<div className="col" key={index}>
							<FoodRecipe recipe={recipe} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default Recipe;
