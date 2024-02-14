import React, { useEffect, useState } from "react";
import FoodRecipe from "../components/FoodRecipe";
import { Card, Button } from "react-bootstrap";

function Favourites() {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [savedCocktails, setSavedCocktails] = useState([]);

    useEffect(() => {
        // Retrieve saved recipes from local storage
        const savedRecipesData = JSON.parse(localStorage.getItem("savedRecipes")) || [];
        console.log("Saved recipes from local storage:", savedRecipesData); // Add logging statement
        setSavedRecipes(savedRecipesData);

        // Retrieve saved cocktails from local storage
        const savedCocktailsData = JSON.parse(localStorage.getItem("savedCocktails")) || [];
        console.log("Saved cocktails from local storage:", savedCocktailsData); // Add logging statement
        setSavedCocktails(savedCocktailsData);
    }, []);

    return (
        <div>
            <h1>Saved Items</h1>
            <div className="saved-items-container">
                <h2>Recipes</h2>
                <div className="saved-recipes">
                    {savedRecipes.map((recipe, index) => (
                        <FoodRecipe key={index} recipe={recipe} />
                    ))}
                </div>
                <h2>Cocktails</h2>
                <div className="saved-cocktails">
                    {savedCocktails.map((cocktail, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={cocktail.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{cocktail.strDrink}</Card.Title>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favourites;