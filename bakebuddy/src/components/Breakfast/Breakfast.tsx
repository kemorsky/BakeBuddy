import React from 'react';
import { Recipe } from '../../types/Recipe';

type BreakfastProps = {
    recipes: Recipe[]; // Ensure this matches the type of data being passed
};

const Breakfast: React.FC<BreakfastProps> = ({ recipes }) => {
    console.log('Received recipes:', recipes);

    if (!recipes) {
        return <div>No recipes available.</div>;
    }

    return (
        <div>
            <h2>Breakfast Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Breakfast;
