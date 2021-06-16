import styled from "styled-components";

export const DetailsContainer = styled.div `
    width: 100%;;
    min-height: 100vh;
    padding: 0 30px;
    margin: 80px 0;
`
export const BackBtn = styled.button `
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 0 3px ${({isLight})=> isLight? "#eee" : "hsl(207, 26%, 17%)"};
    background-color: ${({isLight})=> isLight? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
    color: ${({isLight})=> isLight? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
    margin-bottom: 20px;
`

export const DetailsInnerContent = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const DetailsImg = styled.img `
    display: block;
    width: 30%;
    height: 300px;
    margin-right: 10px;
`
export const DetailsData = styled.div `
    width: 65%;
    height: 200px;
    margin-left: 10px;
`
export const DetailsInfo = styled.div `
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    p{
        margin-bottom: 7px;
        font-weight: 600;
    }

    span{
        font-weight: 300;
        margin-left: 5px;
    }
`
export const BorderCountries = styled.div `
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
`
// export const DetailsLeftInfo = styled.div `
//     width: 50%;
//     height: 200px;
//     margin-left: 10px;
// `