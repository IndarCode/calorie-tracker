import React, { useState } from 'react'
import { PrimaryButton } from '../../components/styled/styled'
import styled from '@emotion/styled';

const StyledFoodForm = styled.section`
max-width: 600px;
margin: 30px auto;

h2 {
    font-size: 20px;
    margin-bottom: 20px;
}
form {
    display: flex;
    flex-direction: column;
    div {
        margin-bottom:10px;
    }
    div > input {
        border: 1px solid #666;
        border-radius: 2px;
        padding: 6px 20px;
        margin-top: 2px;
        width: 100%;
    }
    div > label {
        font-size: 14px;
        font-weight: 600;
    }
    button {
        color: rgb(255, 255, 255);
        padding: 15px;
        width: 290px;
        margin: 20px auto 0;
        border-radius: 5px;
    }
    
}


`;

function AddFoodItem() {
    const [val, setVal] = useState({
        name: '',
        protein: '',
        carbs: '',
        fat: '',
        calorie: ''
    })

    function handleAddFoodItem(){
        let foodItems = localStorage.getItem('food-items');
        if(foodItems){
            foodItems = JSON.parse(foodItems)
        } else {
            foodItems = []
        }
        localStorage.setItem("food-items", JSON.stringify([...foodItems, val]))
        setVal({
            name: '',
            protein: '',
            carbs: '',
            fat: '',
            calorie: ''
         })
    }

  return (
    <StyledFoodForm>
        <h2>Add Food Item</h2>
        <form>
            <div>
                <label>Food Name</label>
                <input type="text" placeholder="Food Item" value={val?.name} onChange={(e) => setVal({...val, name: e?.target?.value})} />
            </div>
            <div>
                <label>Protein(gm)</label>
                <input type="number" placeholder="Protein" value={val?.protein}  onChange={(e) => setVal({...val, protein: Number(e?.target?.value)})} />
            </div>
            <div>
                <label>Carbs(gm)</label>
                <input type="number" placeholder="Carbs" value={val?.carbs}  onChange={(e) => setVal({...val, carbs: Number(e?.target?.value)})} />
            </div>
            <div>
                <label>Fat(gm)</label>
                <input type="number" placeholder="Fat" value={val?.fat}  onChange={(e) => setVal({...val, fat: Number(e?.target?.value)})} />
            </div>
            <div>
                <label>Calories(kCal)</label>
                <input type="number" placeholder="Calorie" value={val?.calorie}  onChange={(e) => setVal({...val, calorie: Number(e?.target?.value)})} />
            </div>

            <PrimaryButton 
                type="button"
                style={{ color: '#fff'}} 
                onClick={() => handleAddFoodItem()}
            >
                Add
            </PrimaryButton>
            
        </form>
    </StyledFoodForm>
  )
}

export default AddFoodItem