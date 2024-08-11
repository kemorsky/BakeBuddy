import { Recipe } from '../../types/Recipe';

type LunchProps = {
    recipes: Recipe[];
};

const Lunch: React.FC<LunchProps> = ({recipes}) => {
    return (
        <div>
            <h2>Lunch Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.Title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lunch