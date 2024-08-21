// RecipeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Recipe } from '../../types/Recipe';

type RecipeContextType = {
    breakfastRecipes: Recipe[];
    bakingRecipes: Recipe[];
    lunchRecipes: Recipe[];
    dinnerRecipes: Recipe[];
    addRecipe: (recipe: Recipe) => void;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipes = () => {
    const context = useContext(RecipeContext);
    if (!context) throw new Error('useRecipes must be used within a RecipeProvider');
    return context;
};

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [breakfastRecipes, setBreakfastRecipes] = useState<Recipe[]>([]);
    const [bakingRecipes, setBakingRecipes] = useState<Recipe[]>([]);
    const [lunchRecipes, setLunchRecipes] = useState<Recipe[]>([]);
    const [dinnerRecipes, setDinnerRecipes] = useState<Recipe[]>([]);

    const addRecipe = (recipe: Recipe) => {
        switch (recipe.type) {
            case 'Breakfast':
                setBreakfastRecipes([...breakfastRecipes, recipe]);
                break;
            case 'Baking':
                setBakingRecipes([...bakingRecipes, recipe]);
                break;
            case 'Lunch':
                setLunchRecipes([...lunchRecipes, recipe]);
                break;
            case 'Dinner':
                setDinnerRecipes([...dinnerRecipes, recipe]);
                break;
            default:
                console.log('Unknown recipe type');
        }
    };

    return (
        <RecipeContext.Provider value={{ breakfastRecipes, bakingRecipes, lunchRecipes, dinnerRecipes, addRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};
