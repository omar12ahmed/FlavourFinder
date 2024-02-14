import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import CardActions from "@mui/material/CardActions";
import styled from "@emotion/styled";
import ShareButton from "./ShareButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import "../components/styles/food.css";

// Forcing first letter to be uppercase
function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Share icon
const ExpandMore = styled(({ expand, ...other }) => <IconButton {...other} />)(
    ({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    })
);

// Food Recipe card
function FoodRecipe({ recipe }) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        // Check if the recipe is liked and set the liked state accordingly
        const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
        const isLiked = likedRecipes.some((likedRecipe) => likedRecipe.label === recipe.label);
        setLiked(isLiked);
    }, [recipe.label]);

    const toggleLike = () => {
        // Toggle liked state
        setLiked(!liked);

        // Retrieve liked recipes from local storage
        const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];

        // Check if the recipe is already liked
        const existingIndex = likedRecipes.findIndex((likedRecipe) => likedRecipe.label === recipe.label);

        if (!liked) {
            // Add the recipe to liked recipes if it's not already liked
            if (existingIndex === -1) {
                localStorage.setItem("likedRecipes", JSON.stringify([...likedRecipes, recipe]));
            }
        } else {
            // Remove the recipe from liked recipes if it's already liked
            if (existingIndex !== -1) {
                likedRecipes.splice(existingIndex, 1);
                localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
            }
        }
    };

    return (
        <div className="row px-3 h-100">
            <Card className="mb-3 p-0">
                <Card.Img variant="top" src={recipe.image} alt={recipe.label} />
                <Card.Body className="pt-0 px-0">
                    <div className="custom-title text-white">{recipe.label}</div>
                    <div className="card-body px-4">
                        <div className="my-3">
                            {/* Like & Share */}
                            <CardActions disableSpacing className="p-0">
                                <IconButton aria-label="add to favorites" className="ps-0" onClick={toggleLike}>
                                    <FavoriteIcon color={liked ? "secondary" : "inherit"} />
                                </IconButton>
                                <ShareButton shareUrl={recipe.url} />
                            </CardActions>
                        </div>
                        {/* Icon Text */}
                        <div className="icon-text d-flex flex-column mb-4">
                            <div className="d-flex align-items-center">
                                <div className="recipeIcon">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </div>
                                <div className="me-4">
                                    <span className="fw-bold">
                                        {recipe.cuisineType.map((s) => capitalizeFirstLetter(s))}
                                    </span>
                                </div>
                                <div className="recipeIcon">
                                    <FontAwesomeIcon icon={faUtensils} />
                                </div>
                                <span className="fw-bold">{recipe.dishType}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="recipeIcon">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span className="fw-bold">
                                    {recipe.healthLabels[0]}, {recipe.healthLabels[1]}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5>Ingredients:</h5>
                            <ul className="list-unstyled">
                                {recipe.ingredients &&
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="list-ingredients-items">
                                            {ingredient.text.replace("*", "")}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h5>Instructions:</h5>
                            <br />
                            <a
                                href={recipe.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="custom-btn"
                            >
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="recipeLinkIcon"
                                />
                                View Recipe
                            </a>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FoodRecipe;