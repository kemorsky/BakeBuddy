import {Breakfast} from '../../types/Recipe'

type BreakfastCardProps = {
    recipe: Breakfast;
  };

function BreakfastElem(props: BreakfastCardProps) {
    const {recipe} = props;
    
    return (
        <div>
            <article>{recipe.Title}</article>
            <article>{recipe.Time}</article>
            <article>{recipe.Recipe}</article>
        </div>
    )
}

export default BreakfastElem