import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'


export const HomeContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    margin: 100px 0;
    padding: 0 30px;
    font-size: 14px;
`
export const HomeForm = styled.form `
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    @media screen and (max-width: 840px){
        flex-direction: column;
        height: 140px;
    }
`
export const SearchIcon = styled(BsSearch) `
   cursor: pointer;
`
export const SearchBox = styled.div `
    height: 60px;
    padding: 0 20px;
    border-radius: 7px;
    box-shadow: 0 2px 5px ${({isLight})=> isLight? "#eee" : "none"};
    background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
    color: ${({isLight})=> isLight? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 100%)"} ;
    input{
        border: none;
        outline: none;
        margin-left: 15px;
        padding: 20px 0;
        background-color: transparent;
        width: 350px;
        color: ${({isLight})=> isLight? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 100%)"};
        font-size: 16px;
        font-weight: 300;
    }

    @media screen and (max-width: 500px){
      input{
        width: 150px;
      }
    }
`
export const SelectBox = styled.div `
    width: 270px;
    height: 60px;
    font-size: 16px;
    font-weight: 300;
    color: ${({isLight})=> isLight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
    text-transform: capitalize;
    font-weight: 600;
    position: relative;

    .select-header{
        width: 100%;
        padding: 20px;
        background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
        border-radius: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 5px ${({isLight})=> isLight? "#eee" : "none"};
        cursor: pointer;
    }
    .selected-region{
        color: blue;
    }
    .options{
        width: 100%;
        border-radius: 7px;
        background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
        box-shadow: 0 2px 5px ${({isLight})=> isLight? "#eee" : "none"};
        position: absolute;
        top: 65px;
        left: 0;
        z-index: 100;
        display: ${({showOptions})=> showOptions? "block" : "none" };
    } 

    .option{
        cursor: pointer;
        padding: 10px 20px;
        &:hover{
            background-color: #eee;
        }
    }
`