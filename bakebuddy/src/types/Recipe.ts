export type RecipeType = 'Baking' | 'Breakfast' | 'Lunch' | 'Dinner';

export interface Recipe {
    id: string;
    Title: string;
    time: number;
    ingredients: string[];
    steps: string[];
    type: RecipeType;
}