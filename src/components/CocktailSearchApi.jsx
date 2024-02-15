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
import { useNavigate, useLocation } from "react-router-dom";


function CocktailSearchApi() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([])
    const [selectedCocktails, setSelectedCocktails] = useState(null);
    const [likedCocktails, setLikedCocktails] = useState(() => {
        const savedLikedCocktails = localStorage.getItem("likedCocktails");
        return savedLikedCocktails ? JSON.parse(savedLikedCocktails) : [];
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                console.log(searchTerm)
                setCocktails(response.data.drinks || []);
            } catch (error) {
                console.error("error", error)
            }
        };

        const updateUrl = () => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("search", searchTerm);
            navigate(`/Drinks?${searchParams.toString()}`);
        };

        if (searchTerm) {
            handleSearch();
            updateUrl();
        } else {
            setCocktails([]);
            navigate("/Drinks");
        }
    }, [searchTerm]);

    const handleShowModal = (cocktail) => {
        setSelectedCocktails(cocktail);
    };

    const handleCloseModal = () => {
        setSelectedCocktails(null);
    };

    const handleLikeToggle = (cocktail) => {
        const index = likedCocktails.findIndex((likedCocktail) => likedCocktail.idDrink === cocktail.idDrink);
        if (index === -1) {
            setLikedCocktails([...likedCocktails, cocktail]);
        } else {
            const updatedLikedCocktails = [...likedCocktails];
            updatedLikedCocktails.splice(index, 1);
            setLikedCocktails(updatedLikedCocktails);
        }
    };

    useEffect(() => {
        localStorage.setItem("likedCocktails", JSON.stringify(likedCocktails));
    }, [likedCocktails]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <>
            <div style={{ marginTop: "60px" }}>
                <SearchBar
                    searchTerm={searchTerm}
                    onChange={handleChange}
                    placeholder={"Search cocktails..."}
                />
            </div>
            {searchTerm === "" && <CocktailRandmonApi />}
            <div>
                {searchTerm !== "" && <h1 style={{ margin: "60px 0 60px 20px" }}>Revive and Hydrate</h1>}
                <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ margin: "30px 0px 0 30px" }}>
                    {cocktails.map(cocktail => (
                        <Grid item key={cocktail.idDrink} xs={12} sm={6} md={4} sx={{ marginBottom: 10 }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={<Avatar src={cocktail.strDrinkThumb} alt={cocktail.strDrink} sx={{ bgcolor: red[500] }} aria-label="recipe" />}
                                    title={cocktail.strDrink}
                                    subheader={cocktail.strCategory}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {cocktail.strDrink}
                                    </Typography>
                                    <CardMedia>
                                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ maxWidth: "" }} />
                                    </CardMedia>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites" onClick={() => handleLikeToggle(cocktail)}>
                                        <FavoriteIcon color={likedCocktails.some((likedCocktail) => likedCocktail.idDrink === cocktail.idDrink) ? "secondary" : "inherit"} />
                                    </IconButton>
                                    <ShareButton shareUrl={cocktail.strDrink} />
                                    <button onClick={() => handleShowModal(cocktail)}> View instructions</button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {selectedCocktails && (<CocktailModal cocktail={selectedCocktails} handleCloseModal={handleCloseModal} />)}
            </div>
        </>
    );
}

export default CocktailSearchApi;

