import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './styles/HomeContent.css'
function
    HomeContent() {

    return (
        <section>
            {/* jumbotron */}
            <div className="p-5 mb-4 bg-body-tertiary rounded-3 baner">
                <div className="container-fluid py-5 jumboCopy jumbo-box">
                    <h1 className="display-5 fw-bold">Flavour Finder</h1>
                </div>
            </div>
            {/* description */}
            <div className='text-box'>
                <h2>The tasties recipies on the Internet!</h2>
                <p>Explore a world of flavors with our diverse collection of recipes!
                    Whether you're craving a quick weeknight dinner, a decadent dessert, or a refreshing beverage,
                    our recipes have got you covered. Browse through our culinary creations and embark on a delicious
                    journey in your own kitchen. From easy-to-follow instructions to mouthwatering photos,
                    discover the joy of cooking with our enticing recipe selection. What's on your plate today?</p>
                {/* button - conected to API */}
                <div className='API-buttons'>
                    <button className="btn btn-primary btn-lg button" type="button">Find your next dinner!</button>
                    <button className="btn btn-primary btn-lg button" type="button">Find your next drink!</button>
                </div>
            </div>
            <section className='category-grid'>
                <div id="pasta1" className="categoryGridArea food"></div>
                <div id="mexican" className="categoryGridArea food"></div>
                <div id="aperol" className="categoryGridArea food"></div>
                <div id="pimm" className="categoryGridArea food"></div>
                <div id="pimm2" className="categoryGridArea food"></div>
                <div id="b-mary" className="categoryGridArea food"></div>
                <div id="pancakes" className="categoryGridArea food"></div>
                <div id="curry" className="categoryGridArea food"></div>
                <div id="pasta2" className="categoryGridArea food"></div>
            </section>
        </section>
    )
}

export default HomeContent