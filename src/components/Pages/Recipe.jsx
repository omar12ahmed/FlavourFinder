//Recipe.jsx
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import FoodRecipeList from "../FoodRecipeList";
import FoodRecipe from "../FoodRecipe";
import recipeData from "../../utilities/edamamRecipeData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/food.css";

function Recipe() {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	const [suggestedRecipes, setSuggestedRecipes] = useState([]);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	useEffect(() => {
		if (!searchTerm) return;
		setDropdownVisible(true);

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

	const handleSearchBarInput = (e) => {
		setSearchTerm(e.target.value);
	};

	const selectRecipeAndUpdate = (recipe) => {
		setDropdownVisible(false);
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

	const handleSearchButtonClick = () => {
		if (recipes.length > 0) {
			selectRecipeAndUpdate(recipes[0]); // Display details of the first recipe found
		} else {
			// If there are no search results, show the nearest recipe
			const nearestRecipe = recipeData.recipes && recipeData.recipes[0]; // Get the first recipe from recipeData
			setSelectedRecipe(nearestRecipe);
		}
	};

	const handleRecipeSelect = (recipe) => {
		console.log("Onselected triggered: ", recipe);
		selectRecipeAndUpdate(recipe);
	};

	return (
		<div className="container-fluid vh-100 d-flex mt-5">
			<div className="container-fluid mt-5">
				<SearchBar
					searchTerm={searchTerm}
					onChange={handleSearchBarInput}
					onSearch={handleSearchButtonClick}
				/>
				{/* Always display the list of recipes */}
				<FoodRecipeList
					recipes={recipes.slice(0, 6)}
					onSelect={handleRecipeSelect}
					searchTerm={searchTerm}
					dropdownVisible={dropdownVisible}
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
