import { Recipe } from '../../types/Recipe';

type BakingProps = {
    recipes: Recipe[];
};

const Baking: React.FC<BakingProps> = ({recipes}) => {
    return (
        <div>
            <h2>Baking Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.Title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Baking