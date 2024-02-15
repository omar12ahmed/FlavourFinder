//RandomRecipes.jsx
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

function RandomRecipes({ recipes }) {
	const [randomRecipes, setRandomRecipes] = useState([]);

	useEffect(() => {
		console.log("Recipes:", recipes);
		if (recipes.length > 0) {
			const randomIndexes = getRandomIndexes(5, recipes.length);
			const randomRecipes = randomIndexes.map((index) => recipes[index]);
			setRandomRecipes(randomRecipes);
		}
	}, [recipes]);

	const getRandomIndexes = (count, max) => {
		const indexes = [];
		while (indexes.length < count) {
			const randomIndex = Math.floor(Math.random() * max);
			if (!indexes.includes(randomIndex)) {
				indexes.push(randomIndex);
			}
		}
		return indexes;
	};

	return (
		<div className="random-recipes-container mt-3 px-3">
			<div className="row mt-5">
				<div className="col-lg-7 mb-4">
					{randomRecipes[0] && (
						<motion.div
							initial={{ opacity: 0, translateX: -50 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 1.5, delay: 0.5 }}
						>
							<Card className="recipe-card p-0 box1 shadow-sm border-0">
								<a
									href={randomRecipes[0].url}
									target="_blank"
									rel="noopener noreferrer"
									className="recipe-link"
								>
									<div className="box1-img-wrapper">
										<Card.Img
											variant="top"
											src={randomRecipes[0].image}
											alt={randomRecipes[0].label}
											style={{ height: "110%" }}
										/>
									</div>
								</a>

								<div className="overlay"></div>
								<Card.Body className="p-0">
									<Card.Title className="text-white">{randomRecipes[0].label}</Card.Title>
								</Card.Body>
							</Card>
						</motion.div>
					)}
				</div>

				<div className="col-lg-5">
					{randomRecipes.slice(1, 3).map((recipe, index) => (
						<div key={index} className="col-lg-12 mb-4">
							<motion.div
								initial={{ opacity: 0, translateX: -50 }}
								animate={{ opacity: 1, translateX: 0 }}
								transition={{ duration: 1.5, delay: index * 0.5 }}
							>

								<Card className="recipe-card p-0 shadow-sm border-0">
									<a
										href={recipe.url}
										target="_blank"
										rel="noopener noreferrer"
										className="recipe-link"
									>
										<Card.Img variant="top" src={recipe.image} alt={recipe.label} style={index===1?{height:"273px",objectFit:"cover"}:{}} />
										<div className="overlay"></div>
									</a>
									<Card.Body className="p-0">
										<Card.Title className="text-white">{recipe.label}</Card.Title>
									</Card.Body>
								</Card>
							</motion.div>
						</div>
					))}
				</div>

				<div className="col-lg-4 mb-4">
					{randomRecipes[3] && (
						<motion.div
							initial={{ opacity: 0, translateX: -50 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 1.5, delay: 0.5 }}
						>
							<Card className="recipe-card p-0 shadow-sm border-0">
								<a
									href={randomRecipes[3].url}
									target="_blank"
									rel="noopener noreferrer"
									className="recipe-link"
								>
									<Card.Img
										variant="top"
										src={randomRecipes[3].image}
										alt={randomRecipes[3].label}
									/>
									<div className="overlay"></div>
								</a>
								<Card.Body className="p-0">
									<Card.Title className="text-white">{randomRecipes[3].label}</Card.Title>
								</Card.Body>
							</Card>
						</motion.div>
					)}
				</div>

				<div className="col-lg-8 mb-4">
					{randomRecipes[4] && (
						<motion.div
							initial={{ opacity: 0, translateX: -50 }}
							animate={{ opacity: 1, translateX: 0 }}
							transition={{ duration: 1.5, delay: 0.5 }}
						>
							<Card className="recipe-card p-0 shadow-sm border-0">
								<a
									href={randomRecipes[4].url}
									target="_blank"
									rel="noopener noreferrer"
									className="recipe-link"
								>
									<Card.Img
										variant="top"
										src={randomRecipes[4].image}
										alt={randomRecipes[4].label}
										style={{ objectFit: "cover" }} //ensure img fills all space
									/>
									<div className="overlay"></div>
								</a>
								<Card.Body className="p-0">
									<Card.Title className="text-white">{randomRecipes[4].label}</Card.Title>
								</Card.Body>
							</Card>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}

export default RandomRecipes;
