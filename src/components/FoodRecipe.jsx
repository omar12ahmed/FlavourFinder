/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FoodRecipe.jsx
import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./styles/food.css";

//Forcing first letter to be uppercase
function capitalizeFirstLetter(string) {
	return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

//Food Recipe card
function FoodRecipe({ recipe }) {
	return (
		<div className="row h-100">
		<Card className="mb-3 p-0">
			<Card.Img variant="top" src={recipe.image} alt={recipe.label} />
			<Card.Body className="pt-0 px-0">
			<Card.Title className="custom-title text-white">{recipe.label}</Card.Title>
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
						<span>{recipe.dishType}</span>
					</div>

					<div className="d-flex align-items-center">
						<div className="recipeIconText">
							<FontAwesomeIcon icon={faHeart} />
						</div>
						{recipe.healthLabels[0]}, {recipe.healthLabels[1]}
					</div>
				</div>

				<Card.Text>
          <h6>Ingredients:</h6>
          <ul className="list-unstyled">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text.replace("*", "")}</li> //Remove asterisks in default data
              ))}
          </ul>
        </Card.Text>

				<Card.Text>
          <h6>Instructions:</h6>
          <a href={recipe.url} className="custom-btn">
            View Recipe <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Card.Text>
			</div>  
			</Card.Body>
		</Card>
		</div>
	);
}

export default FoodRecipe;
