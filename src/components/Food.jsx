import { useState } from "react";
import {
    IconGrill,
    IconPlus,
    IconEraser,
    IconX,
} from "@tabler/icons-react";

function Food() {
    const [foods, setFoods] = useState([]);
    const [newFood, setNewFood] = useState('');

    const capitalize = (str, lower = false) => (lower ? str.toLowerCase : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

    const handleInputChange = (event) => {
        setNewFood(capitalize(event.target.value));
    };

    const handleKeyUp = (event) => {
        if (event.code === 'Enter') {
            addFood();
        }

        if (event.code === 'Escape') {
            setNewFood('');
        }
    };

    const addFood = () => {
        const food = newFood.trim();
        if (food.trim().length > 0) {
            setFoods(f => [...f, food]);
            setNewFood('');
        }
    };

    const deleteFood = (index) => {
        const updatedFoods = foods.filter((_, i) => i !== index);
        const deletedFood = foods.find((_, i) => i === index);

        setFoods(updatedFoods);
        setNewFood(deletedFood);
    };

    const clearInput = () => {
        setNewFood('');
    };

    return (
        <>
            <nav className="panel">
                <p className="panel-heading">Foods</p>
                {
                    foods.map((food, index) =>
                        <div key={index} className="panel-block">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a onClick={() => deleteFood(index)} className="button is-danger">
                                        <span className="icon"><IconX /></span>
                                    </a>
                                </p>
                                <p className="control">
                                    <span className="icon-text">
                                        <span className="icon"><IconGrill /></span>
                                        <span className="is-size-5">{food}</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    )
                }
            </nav>
            <div className="field has-addons">
                <div className="control">
                    <input type="text"
                        className="input is-rounded"
                        placeholder="Enter a food"
                        value={newFood}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp} />
                </div>
                <div className="control">
                    <a className="button is-info" onClick={addFood}>
                        <span className="icon">
                            <IconPlus />
                        </span>
                    </a>
                </div>
                <div className="control">
                    <a className="button is-danger is-rounded" onClick={clearInput}>
                        <span className="icon">
                            <IconEraser />
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Food;