import styled from '@emotion/styled';
import { Autocomplete, FormControl, FormHelperText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllFoodItems } from '../../db';

  const StyledSelectTextbox = styled(TextField)`
    input {
        padding: 0px !important;
    }
  `;


function FoodItems({ handleAddItem }) {
    const [foodItems, setFoodItems] = useState([])

useEffect(() => {
    getAllFoodItems().then(res => setFoodItems(res))
}, [])

  return (

    <Autocomplete
    disablePortal
    id="combo-box-demo"
    inputValue=""
    onChange={(event, newValue) => {
        handleAddItem(newValue)
      }}
    options={foodItems?.map(item => ({ ...item, label: item?.name, value: item?.id}) )}
    sx={{ width:400 }}
    renderInput={(params) => <StyledSelectTextbox {...params} className='selectBox' />}
    
  />

  )
}

export default FoodItems