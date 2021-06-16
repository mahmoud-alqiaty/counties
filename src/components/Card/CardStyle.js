import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled(Link) `
    height: 350px;
    text-decoration: none;
    border-radius: 10px;
    overflow: hidden;
    transition: .2s;
    &:hover{
        transform: scale(1.05);
    }
`
export const CardImg = styled.img `
    display: block;
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
`
export const CardInfo = styled.div `
    width: 100%;
    height: 200px;
    padding: 20px;
    border-radius: 0px 0px 10px 10px;
    background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
    color: ${({isLight})=> isLight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};

    h2{
        padding: 7px 0;
    }
    p{
        padding: 0 0 3px;
        font-weight: 600;
    }

    p span{
        color: ${({isLight})=> isLight? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 100%)"};
        font-weight: 300;
    }
`

