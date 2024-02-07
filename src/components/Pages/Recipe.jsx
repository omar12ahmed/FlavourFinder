import recipeData from "../../utilities/edamamRecipeData.json"
function Recipe(){
console.log(recipeData)
console.log(recipeData.hits[0].recipe.image)
    return(
        <div>
            recipedata.image
        </div>

    )
}
export default Recipe