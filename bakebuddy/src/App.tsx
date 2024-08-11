// import { useNavigate } from 'react-router-dom';
import './App.css'
import RecipeForm from './components/RecipeForm/RecipeForm';
import { Recipe } from './types/Recipe';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {

  const handleSave = (recipe: Recipe) => {
    // Here you would typically save the recipe to local storage or update the state
    console.log('Recipe saved:', recipe);
};
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // const navigate = useNavigate();
  // const goToBaking = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault(); // Prevent the default anchor behavior
  //   navigate("/baking");
  // };
  // const goToBreakfast = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault(); // Prevent the default anchor behavior
  //   navigate("/breakfast");
  // };
  // const goToLunch = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault(); // Prevent the default anchor behavior
  //   navigate("/lunch");
  // };
  // const goToDinner = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault(); // Prevent the default anchor behavior
  //   navigate("/dinner");
  // };

  return (
    <> 
      <main>
        <h1>Bake Buddy</h1>
        <button onClick={() => setIsSidebarOpen(true)}>Open Sidebar</button>
        <Sidebar
        opened={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)} />
        <RecipeForm onSave={handleSave} />
        {/* <aside>
          <a href="Baking" onClick={goToBaking}>Baking</a>
          <a href="Breakfast" onClick={goToBreakfast}>Breakfast</a>
          <a href="Lunch" onClick={goToLunch}>Lunch</a>
          <a href="Dinner" onClick={goToDinner}>Dinner</a>
        </aside> */}
      </main>
    </>
  )
}

export default App
