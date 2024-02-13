/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// FoodRecipe.jsx
import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./styles/food.css";

//Forcing first letter to be uppercase
function capitalizeFirstLetter(string) {
	return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

//Food Recipe card
function FoodRecipe({ recipe }) {
	return (
		<div className="row px-3 h-100">
		<Card className="mb-3 p-0 gap-3">
			<Card.Img variant="top" src={recipe.image} alt={recipe.label} />
			<Card.Body className="pt-0 px-0">
			<Card.Title className="custom-title text-white">{recipe.label}</Card.Title>
			<div className="card-body px-4">
				<div className="my-3">
					<div>
				<a className="custom-btn-v2">
					<FontAwesomeIcon icon={faBookmark} className="recipeLinkIcon" />Save Recipe
        </a></div>
				<div className="mt-3">
				<button  className="custom-btn-v2"><FontAwesomeIcon icon={faPaperPlane} className="recipeLinkIcon" />Email</button>
				</div>
				</div>
				
				{/* Icon Text */}
				<div className="icon-text d-flex flex-column mb-4">
					<div className="d-flex align-items-center">
						<div className="recipeIcon">
							<FontAwesomeIcon icon={faGlobe} />
						</div>						
						<div className="me-4">
							<span className="fw-bold">{recipe.cuisineType.map((s) => capitalizeFirstLetter(s))}</span>
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
						<span className="fw-bold">{recipe.healthLabels[0]}, {recipe.healthLabels[1]}</span>
					</div>
				</div>

				<Card.Text className="mb-4">
          <h5>Ingredients:</h5>
          <ul className="list-unstyled">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="list-ingredients-items">{ingredient.text.replace("*", "")}</li> //Remove asterisks in default data
              ))}
          </ul>
        </Card.Text>

				<Card.Text>
          <h5>Instructions:</h5>
					<br/>	
					<a href={recipe.url} target="_blank" rel="noopener noreferrer" className="custom-btn">
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="recipeLinkIcon" />View Recipe 
          </a>
        </Card.Text>
			</div>  
			</Card.Body>
		</Card>
		</div>
	);
}

export default FoodRecipe;
