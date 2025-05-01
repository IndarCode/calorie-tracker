import styled from '@emotion/styled';
import { Autocomplete, FormControl, FormHelperText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllFoodItems, setDietTarget } from '../../db';
import { PrimaryButton } from '../../components/styled/styled';

  const StyledForm = styled.form`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    h1 {
        font-size: 38px;
        letter-spacing: -1px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label {
        font-weight: 500;
    }
    input {
        padding: 8px 10px;
        width: 100%;
        border: 1px solid #111;
        border-radius: 3px;
    }
  `;


function Admin({ handleAddItem }) {
    const [target, setTarget] = useState({
        calorie: '',
        protein: '',
        carbs: '',
        fat: '',
    })

    const { calorie, protein, carbs, fat} = target

useEffect(() => {
    // getAllFoodItems().then(res => setFoodItems(res))
}, [])

function handleSetTarget(){
console.log(target, "^^^^^")
setDietTarget({...target}).then(res => setTarget({calorie: '',
    protein: '',
    carbs: '',
    fat: '',
}))
}

  return (

    <StyledForm>
        <h1>Diet Target</h1>
        <div>
            <label>Total Calories(kCal)</label>
            <input type="number" placeholder='Calorie' value={calorie} onChange={(e) => setTarget({...target, calorie: e?.target?.value})} />
        </div>
        <div>
            <label>Total Protein</label>
            <input type="number" placeholder='Protein' value={protein} onChange={(e) => setTarget({...target, protein: e?.target?.value})} />
        </div>
        <div>
            <label>Total Carbohydrate</label>
            <input type="number" placeholder='Carbs' value={carbs} onChange={(e) => setTarget({...target, carbs: e?.target?.value})} />
        </div>
        <div>
            <label>Total Fat</label>
            <input type="number" placeholder='Fat' value={fat} onChange={(e) => setTarget({...target, fat: e?.target?.value})} />
        </div>
        <PrimaryButton 
            type="button"
            style={{ color: '#fff'}} 
            onClick={() => handleSetTarget()}
        >
            Save
        </PrimaryButton>
    </StyledForm>
    
  

  )
}

export default Admin