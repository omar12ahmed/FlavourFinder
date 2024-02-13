import { useEffect, useState } from "react";
import axios from "axios";
import CocktailRandmonApi from "./CocktailRandomApi";
import CocktailModal from "./CocktailModal";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import ShareButton from "./ShareButton";

function CocktailSearchApi() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([])
    const [selectedCocktails, setSelectedCocktails] = useState(null)



    useEffect(() => {

        const handleSearch = async () => {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                setCocktails(response.data.drinks || []);
            } catch (error) {
                console.error("error", error)
            }
        };

        if (searchTerm) {
            handleSearch()
        } else {
            setCocktails([])

        }
    }, [searchTerm]);

    const handleShowModal = (cocktail) => {
        setSelectedCocktails(cocktail);
    };
    const handleCloseModal = () => {
        setSelectedCocktails(null)
    }
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleSearch = () => { }
    return (
        <>
            <SearchBar
                searchTerm={searchTerm}
                onChange={handleChange}
                onSearch={handleSearch}
            />
            {searchTerm === "" && <CocktailRandmonApi />}
            <div >

                {searchTerm !== "" && <h1 style={{ margin: "60px 0 60px 20px" }}>Revive and Hydrate</h1>}





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
                                        <Avatar src="src/assets/images/FF-logos_black.png"
                                         alt=" company logo" sx={{ bgcolor: red[500] }}
                                         aria-label="recipe" style={{}}>
                                        </Avatar>
                                    }

                                    title={cocktail.strDrink}
                                    subheader={cocktail.strCategory}
                                />
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary" >
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

        </>
    )

}
export default CocktailSearchApi