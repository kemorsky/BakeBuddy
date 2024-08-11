import React, {useState} from 'react';
import {Recipe, RecipeType} from '../../types/Recipe'
import { useNavigate } from "react-router-dom";
import './RecipeForm.scss'

type RecipeFormProps = {
    onSave: (recipe: Recipe) => void;
}
const RecipeForm: React.FC<RecipeFormProps> = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState<number>(0);
    const [ingredients, setIngredients] = useState<string[]>(['']);
    const [steps, setSteps] = useState<string[]>(['']);
    const [type, setType] = useState<RecipeType>('Breakfast');

    const addIngredientField = () => setIngredients([...ingredients, '']);
    const addStepField = () => setSteps([...steps, '']);

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newRecipe: Recipe = {
            id: Date.now().toString(),
            Title: title,
            time,
            ingredients,
            steps,
            type,
        };
        onSave(newRecipe);
        resetForm();
};

const [form, setForm] = useState({})
const navigate = useNavigate();


const resetForm = () => {
    setTitle('');
    setTime(0);
    setIngredients(['']);
    setSteps(['']);
    setType('Breakfast');
};

return (
    <div className='form-container'>
        <h2>Add New Recipe</h2>
        <input 
        type="text"
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input 
        type="number"
        placeholder='Time'
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value))}
        /> 
        <select value={type} onChange={(e) => setType(e.target.value as RecipeType)}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Baking">Baking</option>
        </select>
        <div>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient, index) => (
                <input 
                    key={index}
                    type='text'
                    value={ingredient}
                    onChange={(e) => {
                        const newIngredients = [...ingredients]
                        newIngredients[index] = e.target.value;
                        setIngredients(newIngredients)
                    }}
                 />
                 
            ))}
            <button type="button" onClick={addIngredientField}>
                    Add Ingredient
                </button>
        </div>
        <div>
            <h3>Steps</h3>
            {steps.map((step, index)=> (
                <input 
                    key={index}
                    type="text"
                    value={step}
                    onChange={(e) => {
                        const newSteps = [...steps]
                        newSteps[index] = e.target.value
                        setSteps(newSteps)
                    }}
                     />
            ))}
            <button type="button" onClick={addStepField}>
                    Add Step
                </button>
        </div>
        <button onClick={handleSave}>Save Recipe</button>
    </div>
)
}

export default RecipeForm;
