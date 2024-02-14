import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';


function UserPage() {
    return (
        <>
            <section className='fav-container'>
                <div className='fav-item'>
                    <h3>name</h3>
                    <img src=''></img>
                    <div className='instruction'>
                        <p>instruction</p>
                        <button>remove</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserPage;