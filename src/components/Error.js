import React from 'react'
import { BiError } from 'react-icons/bi'
import styled from 'styled-components'

const ErrorContainer = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
`
const Error = ({message}) => {
    return (
        <ErrorContainer>
            <BiError />
            {message}
        </ErrorContainer>
    )
}

export default Error
