import ContactPage from "../components/ContactPage";
import Aboutus from "../components/Aboutus";
import ArticleApi from "../components/ArticleApi";
import "../components/styles/contact.css";

function Contact() {
	return (
		<div>
			
			<div className="container mt-5 px-5">
				<div className="row g-5 mt-5">
					<div className="col-md-7 col-lg-8">
						<Aboutus />
					</div>
					<div className="col-md-5 col-lg-4">
						<ArticleApi />
					</div>
				</div>
			</div>

			<div className="mt-5">
				<ContactPage />
			</div>
		</div>
	);
}

export default Contact;
