import axios from "axios";
import { useEffect, useState } from "react";
import CocktailModal from "../components/CocktailModal"
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Grid } from "@mui/material";
import ShareButton from "./ShareButton";


const ExpandMore = styled(({ expand, ...other }) => (
    <IconButton {...other} />
))(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function CocktailRandmonApi() {
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktails, setSelectedCocktails] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = Array.from({ length: 10 }, () => axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'))
                const drinks = await Promise.all(response)
                const randomCocktails = drinks.map(drink =>
                    drink.data.drinks[0])
                console.log(randomCocktails)
                setCocktails(randomCocktails);
            } catch (error) {
                console.error("error", error)
            }
        };
        fetchData()
    }, []);
    const handleShowModal = (cocktail) => {
        setSelectedCocktails(cocktail);
    };
    const handleCloseModal = () => {
        setSelectedCocktails(null)
    }

    return (
        <div >
            <h1 style={{ margin: "60px 0 60px 20px" }}>Recommended drinks</h1>




            <Grid container spacing={2}
                justifyContent="center"
                alignItems="center"
                style={{ margin: "30px 0px 0 30px" }}
            >
                {cocktails.map(cocktail => (

                    <Grid item
                        key={cocktail.strDrink} xs={12} sm={6} md={4} sx={{ marginBottom: 10 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar src="src/assets/images/FF-logos_black.png" alt="company logo" sx={{ bgcolor: red[500] }} aria-label="recipe" style={{}}>
                                    </Avatar>
                                }

                                title={cocktail.strDrink}
                                subheader={cocktail.strCategory}
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    {cocktail.strDrink}
                                </Typography>
                                <CardMedia>
                                    <img src={cocktail.strDrinkThumb}
                                        alt={cocktail.strDrink}
                                        style={{ maxWidth: "" }} />
                                </CardMedia>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <ShareButton
                                shareUrl={cocktail.strDrink}
                                />
                                <button onClick={() => handleShowModal(cocktail)}> View instructions</button>
                            </CardActions>

                        </Card >



                    </Grid>
                ))}
            </Grid>
            {selectedCocktails && (<CocktailModal cocktail={selectedCocktails} handleCloseModal={handleCloseModal} />)}
        </div>
    )
}

export default CocktailRandmonApi