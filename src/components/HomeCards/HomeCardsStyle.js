import styled from "styled-components";

export const HomeCardsContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .total-result{
        margin: 0 auto 30px;
        text-align: center;
        font-size: 18px;
        font-weight: 800;
        border-bottom: 1px solid ;
        display: inline-block;
        color: ${({islight})=> islight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
    }
`
export const HomeCardsInnerContainer = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    @media screen and (max-width: 992px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
`
