import React, { useEffect, useState } from "react";
import FoodRecipe from "../components/FoodRecipe";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../components/styles/favourites.css";

function Favourites() {
	const [savedRecipes, setSavedRecipes] = useState([]);
	const [savedCocktails, setSavedCocktails] = useState([]);

	useEffect(() => {
		// Retrieve saved recipes from local storage
		const savedRecipesData =
			JSON.parse(localStorage.getItem("likedRecipes")) || [];
		setSavedRecipes(savedRecipesData);

		// Retrieve saved cocktails from local storage
		const savedCocktailsData =
			JSON.parse(localStorage.getItem("likedCocktails")) || [];
		setSavedCocktails(savedCocktailsData);
	}, []);

	return (
		<div className="saved-items-container container col-lg-10">
			<h1>Saved Items</h1>
			<div>
				<h2>Recipes</h2>
				<div className="saved-recipes">
					<div className="row">
						{savedRecipes.map((recipe, index) => (
							<div className="col-lg-4 mb-4">
								<FoodRecipe key={index} recipe={recipe} />
							</div>
						))}
					</div>
				</div>

				<h2>Cocktails</h2>
				<div className="saved-cocktails">
					<div className="row">
						{savedCocktails.map((cocktail, index) => (
                            <div className="col-lg-4 mb-4">
							<Card key={index}>
								<Card.Img variant="top" src={cocktail.strDrinkThumb} />
								<Card.Body>
									<Card.Title>{cocktail.strDrink}</Card.Title>
									<Button variant="primary"><FontAwesomeIcon icon={faArrowUpRightFromSquare} />View Details</Button>
								</Card.Body>
							</Card>
                            </div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Favourites;
