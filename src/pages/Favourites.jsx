import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';


function Favourites() {
    return (
        <>
            <section className='form'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </section>
            <section className='caroussel'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../assets/images/images1" className="d-block w-100" alt="pasta"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/images5" className="d-block w-100" alt="Aperol"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/images7" className="d-block w-100" alt="Mexican food"/>
                        </div>
                        <div className="carousel-item active">
                            <img src="../assets/images/images3" className="d-block w-100" alt="Pimm's Cup"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/images9" className="d-block w-100" alt="pancakes"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/images6" className="d-block w-100" alt="Bloody Mary"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Favourites;