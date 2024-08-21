import { Recipe } from '../../types/Recipe';

type LunchProps = {
    recipes: Recipe[];
};

function Lunch({recipes}: LunchProps){
    console.log('Received recipes:', recipes);
    console.log('show me', recipes)

    if (!recipes) {
        return <div>No recipes available.</div>;
    }

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
            <h2>Lunch Recipes</h2>
            <ul>
                {recipeComps}
            </ul>
        </div>
    )
}

export default Lunch