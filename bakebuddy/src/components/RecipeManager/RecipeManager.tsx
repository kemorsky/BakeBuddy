// import { useState } from 'react';
// import { Recipe } from '../../types/Recipe';
// import RecipeForm from '../RecipeForm/RecipeForm';
// import Breakfast from '../Breakfast/Breakfast';
// import Baking from '../Baking/Baking';
// import Lunch from '../Lunch/Lunch';
// import Dinner from '../Dinner/Dinner';

// const RecipeManager: React.FC = () => {
//     const [breakfastRecipes, setBreakfastRecipes] = useState<Recipe[]>([]);
//     const [bakingRecipes, setBakingRecipes] = useState<Recipe[]>([]);
//     const [lunchRecipes, setLunchRecipes] = useState<Recipe[]>([]);
//     const [dinnerRecipes, setDinnerRecipes] = useState<Recipe[]>([]);

//     const handleSave = (newRecipe: Recipe) => {
//         switch (newRecipe.type) {
//             case 'Breakfast':
//                 setBreakfastRecipes([...breakfastRecipes, newRecipe]);
//                 break;
//             case 'Baking':
//                 setBakingRecipes([...bakingRecipes, newRecipe]);
//                 break;
//             case 'Lunch':
//                 setLunchRecipes([...lunchRecipes, newRecipe]);
//                 break;
//             case 'Dinner':
//                 setDinnerRecipes([...dinnerRecipes, newRecipe]);
//                 break;
//             default:
//                 console.log('Unknown recipe type');
//         }
//     };

//     console.log('Breakfast Recipes:', breakfastRecipes);

//     return (
//         <div>
//             <RecipeForm onSave={handleSave} />
//             <Breakfast recipes={breakfastRecipes} />
//             <Baking recipes={bakingRecipes} />
//             <Lunch recipes={lunchRecipes} />
//             <Dinner recipes={dinnerRecipes} />
//         </div>
//     );
// };

// export default RecipeManager