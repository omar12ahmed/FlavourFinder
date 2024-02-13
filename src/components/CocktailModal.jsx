import { Modal, Button } from "react-bootstrap"
import CardContent from '@mui/material/CardContent';


function CocktailModal({ cocktail, handleCloseModal }) {
    return (
        <Modal show={true}
            onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {cocktail.strDrink}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Instructions:</h4>
                <CardContent>

                    <p>{cocktail.strInstructions}</p>

                    <h4>Ingredients:</h4>
                    <ul>
                        {[...Array(15).keys()].map(index => {
                            const ingredient = cocktail[`strIngredient${index + 1}`];
                            const measure = cocktail[`strMeasure${index + 1}`];
                            if (ingredient) {
                                return (
                                    <li key={index}>{measure && `${measure} -`} {ingredient}</li>
                                );
                            } return null

                        })}
                    </ul>
                </CardContent>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={handleCloseModal}> close</button>
            </Modal.Footer>

        </Modal>
    )
}
export default CocktailModal