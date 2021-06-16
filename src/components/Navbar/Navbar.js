import React, { useContext } from 'react'
import styled from 'styled-components'
import {FaMoon, FaRegMoon} from 'react-icons/fa'
import { modeContext } from '../contexts/ModeContext'
import { Link } from 'react-router-dom'


const NavbarContainer = styled.div `
    width: 100%;
    height: 60px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 5px ${({islight})=> islight? "#eee" : "none"} ;
    font-weight: 800;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${({islight})=> islight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
    color: ${({islight})=> islight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};

    .mode-name{
        cursor: pointer;
    }
    .mode-text{
        margin-left: 5px;
    }
`
const NavLogo = styled(Link) `
    text-decoration: none;
    color: ${({islight})=> islight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
`
const Navbar = () => {
    const {isLight, toggleMode} = useContext(modeContext)
    console.log(isLight);
    return (
        <NavbarContainer islight={isLight}>
            <NavLogo to="/" islight={isLight}>
                Where in the world?
            </NavLogo>
            <div className="mode-name" onClick={toggleMode}>
                {
                    isLight? <FaMoon /> : <FaRegMoon />
                }
                
                <span className="mode-text">
                    {isLight? "Dark" : "Light" } Mode
                </span>
            </div>
        </NavbarContainer>
    )
}

export default Navbar
