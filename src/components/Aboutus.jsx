// Aboutus.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { Height } from "@mui/icons-material";

function Aboutus() {
	return (
		<div>
			<div className="mb-5">
				<h1 id="aboutUs">About us</h1>
				<p>
					Welcome to our recipe app, where culinary creativity meets convenience. We
					are passionate about simplifying your kitchen adventures, providing a
					seamless experience for both seasoned chefs and aspiring home cooks.
					Explore a world of flavors, discover new techniques, and embark on a
					delicious journey with our user-friendly recipe app—because we believe that
					cooking should be a joy, not a chore.
				</p>


				<h3 style={{marginTop:"60px"}} >Above all, We are:</h3>
				<ul className="weAre">
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="contactIcon" />
						<b>Enjoyable</b>: Shared moments of friends, family, cooking, and laughter
						make every dish an experience to savor.
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="contactIcon" />
						<b>Welcoming:</b> A culinary community that values the exchange of ideas
						and connection among home cooks.
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="contactIcon" />
						<b>Assisting: </b>Inspiration and support are just a message away for your
						dinner dilemmas.
					</li>

					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="contactIcon" />
						<b>Innovative:</b> Celebrating cooking as an art form, encouraging
						experimentation and creative expression.
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="contactIcon" />
						<b>Inclusive: </b>Embracing all levels of cooking expertise and recipes
						without judgment.
					</li>
					<li>
						<FontAwesomeIcon icon={faCheckCircle} className="contactIcon" />
						<b>Relatable: </b>Passion for good food without unnecessary
						complexity—keeping it simple and enjoyable.
					</li>
				</ul>
			</div>

				<hr/>
			<div className="mb-5">
				<h1 id="history">History</h1>
				<p>
					Embark on a flavorful journey through the pages of our history. Established
					with a vision to inspire and simplify the art of cooking, our recipe app
					has evolved into a culinary companion for enthusiasts worldwide. From our
					humble beginnings, we've been dedicated to bringing joy to kitchens
					everywhere, fostering a community that celebrates the love of good food.
					Join us in relishing the moments that have shaped our history, as we
					continue to share the passion for delicious, home-cooked meals.
				</p>	
			</div>
		</div>
	);
}

export default Aboutus;
