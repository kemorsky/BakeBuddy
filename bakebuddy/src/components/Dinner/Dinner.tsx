import { Recipe } from '../../types/Recipe';

type DinnerProps = {
    recipes: Recipe[];
};

const Dinner: React.FC<DinnerProps> = ({recipes}) => {
    return (
        <div>
            <h2>Dinner Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.Title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dinner