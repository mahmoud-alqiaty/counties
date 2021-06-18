import styled from "styled-components";

export const DetailsContainer = styled.div `
    width: 100%;;
    min-height: 100vh;
    padding: 80px 50px;
    background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)"};
    color: ${({isLight})=> isLight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};

    @media screen and (max-width: 500px){
        padding: 80px 20px;
    }
`
export const BackBtn = styled.button `
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin: 30px 0;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
    color: ${({isLight})=> isLight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
    box-shadow: 0 3px 5px ${({isLight})=> isLight? "#eee" : "#000"} ;
`

export const DetailsInnerContent = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 992px){
        flex-direction: column;
    }
`
export const DetailsImg = styled.img `
    display: block;
    width: 400px;
    height: 400px;
`
export const DetailsData = styled.div `
    width: 60%;
    height: 100%;
    margin-left: 20px;

    @media screen and (max-width: 1200px){
        width: 80%;
    }
    @media screen and (max-width: 992px){
        margin-top: 30px;
    }
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const DetailsInfo = styled.div `
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
   
   .leftSide{
       width: 50%;
       margin-right: 10px;
   }
   .rightside{
       margin-left: 10px;
       width: 50%;
   }
    p{
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 20px;
    }

    p span{
        font-weight: 300;
        margin-left: 7px;
    }

    @media screen and (max-width: 768px){
       flex-direction: column;
       text-align: start;

       .rightside{
            margin-left: 0px;
        }
    }
`
export const BorderCountries = styled.div `
    width: 70%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    p{
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 20px;
    }

    .borders{
        display: flex;
        flex-wrap: wrap;
    }
    .border_Btn{
        padding: 5px 25px;
        margin-left: 10px;
        background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
        color: ${({isLight})=> isLight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
        box-shadow: 0 0 5px ${({isLight})=> isLight? "#bbb" : "#000"} ;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px){
       width: 80%;
    }
    @media screen and (max-width: 500px){
       flex-direction: column;
    }
`
// export const BordersInfo = styled.div `
//     width: 50%;
//     height: 200px;
//     margin-left: 10px;
// `