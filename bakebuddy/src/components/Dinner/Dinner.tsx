import { Recipe } from '../../types/Recipe';

type DinnerProps = {
    recipes: Recipe[];
};

function Dinner({recipes}: DinnerProps){

    const recipeComps = recipes?.map((recipe) => (
        <li key={recipe.id}>
            <h3>{recipe.Title}</h3>
            <p>Time: {recipe.time}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Steps: {recipe.steps.join('; ')}</p>
        </li>
    ))
    
    return (
        <div>
            <h2>Dinner Recipes</h2>
            <ul>
                {recipeComps}
            </ul>
        </div>
    )
}

export default Dinner