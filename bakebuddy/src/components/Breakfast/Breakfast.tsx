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
                <Breakfast/>
                {recipes.map((recipe) => (
                    <li key={recipe.id}> title={recipe.Title} time={recipe.time} ingredients={recipe.ingredients} steps={recipe.steps}</li>
                ))}
            </ul>
        </div>
    );
};

export default Breakfast;
