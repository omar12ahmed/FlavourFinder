// ArticleApi.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ArticleApi() {
	const [articles, setArticle] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://newsapi.org/v2/everything", {
					params: {
						apiKey: "9f21a2afddbc4d9fb40324aada662cda",
						q: "nutrition cooking diet healthy eating food science",
					},
				});
				console.log(response);
				setArticle(response.data.articles);
			} catch (error) {
				console.error("error:", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="article">
			<h1 id="foodArticle" className="mb-3">
				Food and Health
			</h1>
			<ul>
				{articles &&
					articles.map((article, index) => (
						<li key={index}>							
							<a href={article.url} target="_blank">
							<FontAwesomeIcon icon={faArrowRight} className="articleIcon" />
								{article.title}
							</a>
						</li>
					))}
			</ul>
		</div>
	);
}

export default ArticleApi;
