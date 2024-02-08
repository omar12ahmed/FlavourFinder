import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './styles/HomeContent.css'
function
    HomeContent() {

    return (
        <wrapper>
             <div className="p-5 mb-4 bg-body-tertiary rounded-3 ">
      <div className="container-fluid py-5 jumboCopy baner">
        <h1 className="display-5 fw-bold">Flavour Finder</h1>
        <p className="col-md-12 fs-4">The tastiest recipes on the Internet</p>
        
      </div>
    </div>
    <button className="btn btn-primary btn-lg" type="button">Find your next dinner!</button>
        </wrapper>
    )
}

export default HomeContent