import React from 'react'
import {VscLoading} from 'react-icons/vsc'
import styled, { keyframes } from 'styled-components'

const LoadingContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const LoadingAnmition = keyframes `
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
const LoadingIcon = styled(VscLoading)`
    font-size: 80px;
    animation: ${LoadingAnmition} 3s infinite;
    margin-top: 150px;
    

`
const Loading = () => {
    return (
        <LoadingContainer>
            < LoadingIcon />
        </LoadingContainer>
    )
}

export default Loading
