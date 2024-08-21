// import { useNavigate } from 'react-router-dom';
import './App.css'
import RecipeForm from './components/RecipeForm/RecipeForm';
import { Recipe } from './types/Recipe';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import Breakfast from './components/Breakfast/Breakfast';
import Baking from './components/Baking/Baking';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';

function App() {
    const [breakfastRecipes, setBreakfastRecipes] = useState<Recipe[]>([]);
    const [bakingRecipes, setBakingRecipes] = useState<Recipe[]>([]);
    const [lunchRecipes, setLunchRecipes] = useState<Recipe[]>([]);
    const [dinnerRecipes, setDinnerRecipes] = useState<Recipe[]>([]);

  const handleSave = (recipes: Recipe) => {
    switch (recipes.type) {
      case 'Breakfast':
          setBreakfastRecipes([...breakfastRecipes, recipes]);
          break;
      case 'Baking':
          setBakingRecipes([...bakingRecipes, recipes]);
          break;
      case 'Lunch':
          setLunchRecipes([...lunchRecipes, recipes]);
          break;
      case 'Dinner':
          setDinnerRecipes([...dinnerRecipes, recipes]);
          break;
      default:
          console.log('Unknown recipe type');
  }
    // Here you would typically save the recipe to local storage or update the state
    console.log('Recipe saved:', recipes);
};

  return (
    <> 
      <main>
        <h1>Bake Buddy</h1>
        <Sidebar/>
        <RecipeForm onSave={handleSave} />
        {/* <Breakfast recipes={breakfastRecipes} /> */}
        <Baking recipes={bakingRecipes} />
        <Lunch recipes={lunchRecipes} />
        <Dinner recipes={dinnerRecipes} />
      </main>
    </>
  )
}

export default App
