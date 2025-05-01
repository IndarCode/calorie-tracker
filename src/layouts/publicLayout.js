import styled from '@emotion/styled'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const StyledHeader = styled.header`
        width: 100%;
        padding: 3vh;
        background-color: #000;
        flex-basis: 100%;
        justify-content: flex-end;
        display: flex; 
        align-items: center;
        padding: 20px;
    h1 {
        margin-right: auto;
        color: #fff !important;
        font-size: 30px;
        font-weight: 900;
        letter-spacing: -1px;
    }
    a {
        color: #fff !important;
        margin: 0 10px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
        :hover {
            text-decoration: underline;
        }
}

`
function PublicLayout({children}) {
  return (
    <div>
        <StyledHeader>
            <h1>calorieTracker</h1>
            <Link to="/">Home</Link>;
            <Link to="/add-food-item">Add Food Item</Link>;
          </StyledHeader>
        <Outlet />
    </div>
  )
}

export default PublicLayout