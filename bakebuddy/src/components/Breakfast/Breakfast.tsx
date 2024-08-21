import { Recipe } from '../../types/Recipe';

type BreakfastProps = {
    recipes: Recipe[]; // Ensure this matches the type of data being passed
};

function Breakfast({recipes}: BreakfastProps){
    console.log('Received recipes:', recipes);

    if (!recipes) {
        return <div>No recipes available.</div>;
    }

    return (
        <div>
            <h2>Breakfast Recipes</h2>
            <ul> 
            {recipes?.map((recipe) => (
                    <li key={recipe.id}>
                        <h3>{recipe.Title}</h3>
                        <p>Time: {recipe.time}</p>
                        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                        <p>Steps: {recipe.steps.join('; ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breakfast;
