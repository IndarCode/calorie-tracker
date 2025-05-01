import styled from '@emotion/styled';
import { Autocomplete, FormControl, FormHelperText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const styles = {
    root: {
      color: '#f00',
      '&$checked': {
        color: 'green',
      },
    },
    checked: {},
  };
  

  const StyledSelectTextbox = styled(TextField)`
    input {
        padding: 0px !important;
    }
  `;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 450,
      },
    },
  };

function FoodItems({ handleAddItem }) {
    const [selectedItem, setSelectedItem] = useState('')

    const foodItems = JSON.parse(localStorage.getItem('food-items')) ?? []

  return (

    <Autocomplete
    disablePortal
    id="combo-box-demo"
    inputValue=""
    onChange={(event, newValue) => {
        console.log( newValue, "&&&&&&&&&&&&&")
        handleAddItem(newValue)
      }}
    options={foodItems.map(item => ({ ...item, label: item?.name, value: item?.id}) )}
    sx={{ width:400 }}
    renderInput={(params) => <StyledSelectTextbox {...params} className='selectBox' />}
    
  />

//     <StyledSelect
//     labelId="demo-multiple-name-label"
//     id="demo-multiple-name"
//     value={selectedItem?.name}
//     onChange={handleChange}
//     input={<OutlinedInput label="Name" />}
//     MenuProps={MenuProps}
//     className='select'
//     inputProps={{ 
//       'aria-label': 'Without label', 
//       classes: {
//           root: 'hiiiiiiiiii',
//           select: "selectBox"
//     } }}
//   >
//     {foodItems.map((item) => (
//       <MenuItem
//         key={item?.name}
//         value={item?.name}
//         // style={getStyles(name, personName, theme)}
//       >
//         {item?.name}
//       </MenuItem>
//     ))}
//   </StyledSelect>

        //  <FormControl sx={{ m: 1, minWidth: 120 }}>
        // <StyledSelect
        //   value={age}
        //   onChange={handleChange}
        //   displayEmpty
        //   MenuProps={{
        //     classes: {
        //       paper: "zzzzzzzzz", // Apply styles to the dropdown menu
        //     },
        //   }}
        //   inputProps={{ 
        //     'aria-label': 'Without label', 
        //     classes: {
        //         root: 'hiiiiiiiiii',
        //         select: "selectBox"
        //   } }}
        // >
        //   <MenuItem value={10}>Ten</MenuItem>
        //   <MenuItem value={20}>Twenty</MenuItem>
        //   <MenuItem value={30}>Thirty</MenuItem>
        // </StyledSelect>
       

  )
}

export default FoodItems